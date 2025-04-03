// NOTE: This update restores the legend, keeps the static text box on the map, and keeps the zoom controls in the upper-left corner.

import { useEffect, useRef, useState } from "react";
// Material UI components for layout and UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null);
  const viewRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [isCenter, setisCenter] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      const [MapView, WebMap, GraphicsLayer, Legend, Expand] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/layers/GraphicsLayer"),
        import("@arcgis/core/widgets/Legend"),
        import("@arcgis/core/widgets/Expand")
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "4b41859317b04d92af10398a0611bd38" },
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
        ui: { components: ["attribution"] },
      });

      viewRef.current = view;

      const legend = new Legend.default({ view });
      const legendExpand = new Expand.default({
        view,
        content: legend,
        expanded: true,
      });
      view.ui.add(legendExpand, "bottom-right");

      const infoNode = document.createElement("div");
      infoNode.style.padding = "10px";
      infoNode.style.background = "white";
      infoNode.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
      infoNode.style.borderRadius = "4px";
      infoNode.style.maxWidth = "250px";
      infoNode.innerHTML = "<strong>Instructions:</strong><br>Click a feature or draw a new one.";
      view.ui.add(infoNode, "top-right");

      view.ui.move("zoom", "top-left");

      const graphicsLayer = new GraphicsLayer.default();
      graphicsLayer.title = "User Feedback Layer";
      view.map.add(graphicsLayer);

      view.on("click", async (event) => {
        const response = await view.hitTest(event);
        const result = response.results.find((r) => r.graphic?.attributes);
        if (result) {
          setSelectedFeature(result.graphic);
          setDrawnGeometry(null);
          setOpen(true);
        }
      });
    };

    loadMap();
  }, []);

  const startDrawing = async () => {
    const [Sketch] = await Promise.all([
      import("@arcgis/core/widgets/Sketch"),
    ]);

    const view = viewRef.current;
    if (!view) return;

    let graphicsLayer = view.map.layers.find((layer) => layer.title === "User Feedback Layer");
    if (!graphicsLayer) return;

    const sketch = new Sketch.default({
      layer: graphicsLayer,
      view,
      creationMode: "single",
      visibleElements: {
        createTools: { point: false, polyline: false, rectangle: false, circle: false },
        selectionTools: {},
        undoRedoMenu: false,
      },
      polygonSymbol: {
        type: "simple-fill",
        color: [0, 255, 255, 0.3],
        outline: { color: [0, 180, 180, 1], width: 2 },
      },
    });

    sketchRef.current = sketch;
    view.ui.add(sketch, "top-right");

    sketch.on("create", (event) => {
      if (event.state === "start") {
        alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
      }
      if (event.state === "complete") {
        setDrawnGeometry(event.graphic.geometry);
        setSelectedFeature(null);
        setOpen(true);
        view.ui.remove(sketch);
      }
    });

    sketch.create("polygon");
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer"),
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/OpenSpaceResponses/FeatureServer/0",
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: drawnGeometry ? 1 : 0,
        name,
        organization,
        submittedcomment: comment,
        is_center: isCenter ? 1 : 0,
        submitted_at: new Date().toISOString(),
        related_feature_id: selectedFeature?.attributes?.OBJECTID || null,
      },
    };

    try {
      const result = await responseLayer.applyEdits({ addFeatures: [newFeature] });
      if (result.addFeatureResults.length > 0 && !result.addFeatureResults[0].error) {
        alert("Feature submitted successfully!");
      } else {
        alert("Submission failed.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting feature:", error);
    }

    setOpen(false);
    setName("");
    setComment("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
    setisCenter(false);
    setOrganization("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2}>
      <Box width="100%" maxWidth="1250px">
        <Typography variant="h4" gutterBottom>
          MAG First Draft Open Space Map Feedback
        </Typography>
        <Typography variant="h6" gutterBottom>
          Click on an existing feature to leave a comment on that feature, or click the "ADD A FEATURE" button to draw a new feature on the map. Double-click when you have finished digitizing the new feature.
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary" onClick={startDrawing}>
            Add A Feature
          </Button>
        </Box>

        <Card sx={{ my: 2, mb: 1 }}>
          <CardContent sx={{ height: 500, display: "flex" }}>
            <div ref={mapRef} style={{ width: "100%", height: "100%", borderRadius: 2 }} />
          </CardContent>
        </Card>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
            <DialogTitle>Feature Feedback</DialogTitle>
            <DialogContent>
              <FormControlLabel
                control={<Checkbox checked={isCenter} onChange={(e) => setisCenter(e.target.checked)} />}
                label="This feature could be considered regionally significant open space."
              />
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />
              <TextField label="Add Your Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
            </DialogContent>
            <DialogActions>
              {drawnGeometry && sketchRef.current && (
                <Button
                  color="error"
                  onClick={() => {
                    const layer = sketchRef.current.layer;
                    layer.removeAll();
                    setDrawnGeometry(null);
                    setOpen(false);
                  }}
                >
                  Delete Feature
                </Button>
              )}
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit Feedback
              </Button>
            </DialogActions>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

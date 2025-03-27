// NOTE: This update fixes the Sketch activation logic so the "Add A Feature" button allows users to start drawing a polygon immediately

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
import Legend from "@arcgis/core/widgets/Legend"; // ArcGIS Legend widget

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null); // <== New ref to store Sketch instance
  const [, setView] = useState(null);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [isCenter, setisCenter] = useState(false);
  const [likesProject, setLikesProject] = useState(false);
  const [priorityLevel, setPriorityLevel] = useState("");

  useEffect(() => {
    const loadMap = async () => {
      const [MapView, WebMap, Sketch, GraphicsLayer] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/widgets/Sketch"),
        import("@arcgis/core/layers/GraphicsLayer"),
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "193de866247a4946a17331d2fdefc294" },
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10,
      });

      setView(view);

      view.when(() => {
        const legend = new Legend({ view });
        if (legendRef.current) legend.container = legendRef.current;

        const graphicsLayer = new GraphicsLayer.default();
        view.map.add(graphicsLayer);

        const sketch = new Sketch.default({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          visibleElements: {
            createTools: { point: false, polyline: false, rectangle: false, circle: false },
            selectionTools: { "rectangle-selection": false },
            undoRedoMenu: false
          },
          // Symbol for new polygons: bright blue-green with solid outline
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3], // bright blue-green with transparency
            outline: {
              color: [0, 180, 180, 1],
              width: 2
            }
          }
        });

        sketchRef.current = sketch; // store sketch in ref
        view.ui.add(sketch, "top-right");

        sketch.on("create", (event) => {
          if (event.state === "complete") {
            setDrawnGeometry(event.graphic.geometry);
            setSelectedFeature(null);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.attributes);
          if (result) {
            setSelectedFeature(result.graphic);
            setDrawnGeometry(null);
            setOpen(true);
          }
        });
      });
    };

    loadMap();
  }, []);

  // Trigger drawing a new polygon manually
  const startDrawing = () => {
    if (sketchRef.current) {
      sketchRef.current.create("polygon");
    }
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer"),
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/CenterResponses/FeatureServer/0",
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
        correct_type: likesProject ? 1 : 0,
        updated_type: priorityLevel,
        submitted_at: new Date().toISOString(),
        related_feature_id: selectedFeature?.attributes?.OBJECTID || null
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
    setLikesProject(false);
    setPriorityLevel("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Box width="100%" maxWidth="1500px">
        <Typography variant="h4" gutterBottom>
          MAG First Draft Centers Map Feedback
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click a feature on the map or draw a new one to leave feedback.
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary" onClick={startDrawing}>
            Add A Feature
          </Button>
          <Button variant="contained" color="primary" onClick={() => alert("Click a feature on the map to comment.")}>
            Click to Add A Comment
          </Button>
        </Box>

        <Card sx={{ my: 2 }}>
          <CardContent sx={{ height: 750, display: 'flex' }}>
            <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 8 }} />
            <div ref={legendRef} style={{ width: "20%", minWidth: 200, paddingLeft: 10, overflowY: "auto" }} />
          </CardContent>
        </Card>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, p: 2 }} role="presentation">
            <DialogTitle>Feature Feedback</DialogTitle>
            <DialogContent>
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />
              <TextField label="Add Your Comment Here" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
              {drawnGeometry ? (
                // Show simplified form for newly drawn features
                <FormControl fullWidth margin="dense">
                  <InputLabel id="center-label">Center Classification</InputLabel>
                  <Select labelId="center-label" value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)}>
                    <MenuItem value="Metropolitan">Metropolitan</MenuItem>
                    <MenuItem value="Urban">Urban</MenuItem>
                    <MenuItem value="City">City</MenuItem>
                    <MenuItem value="Neighborhood">Neighborhood</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                // Full form for clicked features
                <>
                  <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                    A center is defined as a walkable area where activity is focused, with places to live, work, and play...
                  </Typography>
                  <FormControlLabel control={<Checkbox checked={isCenter} onChange={(e) => setisCenter(e.target.checked)} />} label="This feature meets the characteristics of a center." />
                  <FormControlLabel control={<Checkbox checked={likesProject} onChange={(e) => setLikesProject(e.target.checked)} />} label="This center is correctly classified." />
                  <FormGroup>
                    <Typography variant="subtitle1">If the center is incorrectly classified, select the correct classification:</Typography>
                  </FormGroup>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="center-label">Center Classification</InputLabel>
                    <Select labelId="center-label" value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)}>
                      <MenuItem value="Metropolitan">Metropolitan</MenuItem>
                      <MenuItem value="Urban">Urban</MenuItem>
                      <MenuItem value="City">City</MenuItem>
                      <MenuItem value="Neighborhood">Neighborhood</MenuItem>
                      <MenuItem value="NOT A CENTER">This is not a center</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
            </DialogActions>
          </Box>
        </Drawer>

        <Typography variant="caption" display="block" gutterBottom>
          Feedback is saved directly to the hosted feature layer "Responses".
        </Typography>
      </Box>
    </Box>
  );
}

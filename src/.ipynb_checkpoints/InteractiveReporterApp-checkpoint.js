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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Legend from "@arcgis/core/widgets/Legend";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null);
  const [, setView] = useState(null);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);

  useEffect(() => {
    const loadMap = async () => {
      const webmap = new WebMap({
        portalItem: { id: "193de866247a4946a17331d2fdefc294" },
      });

      const view = new MapView({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
        ui: { components: ["zoom", "attribution"] },
      });

      setView(view);

      view.when(async () => {
        view.popup.autoOpenEnabled = false;
        const graphicsLayer = new GraphicsLayer({ popupEnabled: false });
        view.map.add(graphicsLayer);

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- or two fingers on your trackpad to zoom. Click and drag to pan.";
        infoDiv.style.padding = "6px 12px";
        infoDiv.style.background = "rgba(255, 255, 255, 0.9)";
        infoDiv.style.fontSize = "13px";
        infoDiv.style.borderRadius = "4px";
        infoDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        infoDiv.style.maxWidth = "200px";
        view.ui.add(infoDiv, "top-left");

        new Legend({ view, container: legendRef.current });

        const sketch = new Sketch({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          updateOnGraphicClick: false,
          visibleElements: {
            createTools: { point: false, polyline: false, rectangle: false, circle: false },
            selectionTools: { "rectangle-selection": false },
            undoRedoMenu: false,
          },
        });

        sketchRef.current = sketch;

        sketch.on("create", (event) => {
          if (event.state === "complete") {
            const userGraphic = event.graphic;
            userGraphic.attributes = { feature_origin: 1 };
            graphicsLayer.add(userGraphic);
            setSelectedFeature(userGraphic);
            setDrawnGeometry(userGraphic.geometry);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.geometry);

          if (result && result.graphic.attributes?.feature_origin === 1) {
            setSelectedFeature(result.graphic);
            setDrawnGeometry(result.graphic.geometry);
            setOpen(true);
          }
        });
      });
    };

    loadMap();
  }, []);

  const handleDeleteSketch = () => {
    if (selectedFeature && selectedFeature.attributes?.feature_origin === 1 && sketchRef.current) {
      sketchRef.current.layer.remove(selectedFeature);
    }
    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box>
      <div ref={mapRef} style={{ height: "100vh", width: "100%" }} />
      <div ref={legendRef} style={{ position: "absolute", top: 10, right: 10 }} />
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }}>
          <DialogActions>
            <Button onClick={handleDeleteSketch} color="secondary">DELETE SKETCH</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </Box>
      </Drawer>
    </Box>
  );
}

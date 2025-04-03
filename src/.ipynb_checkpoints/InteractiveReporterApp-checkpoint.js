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
  const sketchRef = useRef(null);
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
        zoom: 10.5,
        ui: {
          components: ["attribution", "zoom"]
        }
      });

      setView(view);

      view.when(async () => {
        // Move zoom controls to top-left
        view.ui.move("zoom", "top-left");

        // Add static text box
        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- or two fingers on the screen to zoom. To pan, click and drag the map.";
        infoDiv.style.position = "absolute";
        infoDiv.style.top = "10px";
        infoDiv.style.left = "10px";
        infoDiv.style.padding = "6px 12px";
        infoDiv.style.background = "rgba(255, 255, 255, 0.8)";
        infoDiv.style.fontSize = "13px";
        infoDiv.style.borderRadius = "4px";
        infoDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        infoDiv.style.maxWidth = "220px";
        infoDiv.style.zIndex = "10";
        view.ui.add(infoDiv, "manual");

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
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: {
              color: [0, 180, 180, 1],
              width: 2
            }
          }
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

  // ... rest of the code remains unchanged

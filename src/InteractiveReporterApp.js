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
import "@arcgis/core/assets/esri/themes/light/main.css";

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
  const [priorityLevel, setPriorityLevel] = useState("");

  useEffect(() => {
    // (Your existing map loading logic here)
  }, []);

  const startDrawing = () => {
    if (sketchRef.current) sketchRef.current.create("polygon");
  };

  const handleSubmit = async () => {
    const responseLayer = new FeatureLayer({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/CenterResponses/FeatureServer/0",
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: selectedFeature?.attributes?.feature_origin === 1 ? 1 : 0,
        name,
        organization,
        submittedcomment: comment,
        is_center: isCenter ? 1 : 0,
        priority_level: priorityLevel,
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

    if (sketchRef.current && selectedFeature?.attributes?.feature_origin === 1) {
      sketchRef.current.layer.remove(selectedFeature);
    }

    setOpen(false);
    setName("");
    setComment("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
    setisCenter(false);
    setOrganization("");
    setPriorityLevel("");
  };

  const handleCancel = () => {
    if (sketchRef.current && selectedFeature?.attributes?.feature_origin === 1) {
      sketchRef.current.layer.remove(selectedFeature);
    }

    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  const handleDeleteFeature = () => {
    if (selectedFeature && selectedFeature.attributes?.feature_origin === 1 && !selectedFeature.attributes?.OBJECTID && sketchRef.current) {
      sketchRef.current.layer.remove(selectedFeature);
      alert("Feature deleted successfully.");
    } else {
      alert("Cannot delete this feature.");
    }

    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <DialogActions>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleDeleteFeature} color="secondary">DELETE FEATURE</Button>
      <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
    </DialogActions>
  );
}

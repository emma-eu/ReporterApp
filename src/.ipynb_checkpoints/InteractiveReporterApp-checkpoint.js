import { useEffect, useRef, useState } from "react"; // React hooks for managing component lifecycle, references, and state
import Card from "@mui/material/Card"; // Card UI wrapper from Material UI
import CardContent from "@mui/material/CardContent"; // Content container for Card
import Button from "@mui/material/Button"; // Material UI button
import Typography from "@mui/material/Typography"; // Typography for headers and text
import Box from "@mui/material/Box"; // Layout component for flexible styling
import Drawer from "@mui/material/Drawer"; // Slide-out drawer for side panel
import DialogTitle from "@mui/material/DialogTitle"; // Dialog header
import DialogContent from "@mui/material/DialogContent"; // Container for dialog body content
import DialogActions from "@mui/material/DialogActions"; // Footer section for dialog actions
import TextField from "@mui/material/TextField"; // Input field for text
import Checkbox from "@mui/material/Checkbox"; // Checkbox input
import FormControlLabel from "@mui/material/FormControlLabel"; // Wraps checkbox with a label
import FormGroup from "@mui/material/FormGroup"; // Groups related form controls (e.g., checkboxes)
import FormControl from "@mui/material/FormControl"; // Wrapper for select inputs
import InputLabel from "@mui/material/InputLabel"; // Label for select dropdown
import Select from "@mui/material/Select"; // Dropdown menu
import MenuItem from "@mui/material/MenuItem"; // Items within Select dropdown
import Legend from "@arcgis/core/widgets/Legend"; // ArcGIS JS API Legend widget

export default function InteractiveReporterApp() {
  const mapRef = useRef(null); // Ref to hold the DOM container for the map
  const legendRef = useRef(null); // Ref to hold the DOM container for the legend
  const [, setView] = useState(null); // View is stored in case needed later

  // React state hooks for form control and popup behavior
  const [open, setOpen] = useState(false); // Controls visibility of feedback form
  const [selectedFeature, setSelectedFeature] = useState(null); // Stores clicked map feature
  const [name, setName] = useState(""); // Stores user input name
  const [comment, setComment] = useState(""); // Stores user comment
  const [likesProject, setLikesProject] = useState(false); // Checkbox: user supports project?
  const [projectConcern, setProjectConcern] = useState({ noise: false, traffic: false, environment: false }); // Checkboxes: concerns
  const [priorityLevel, setPriorityLevel] = useState(""); // Dropdown: priority level

  useEffect(() => {
    // Load and initialize the ArcGIS map and set up click interaction
    const loadMap = async () => {
      const [MapView, WebMap] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
      ]);

      const webmap = new WebMap.default({
        portalItem: {
          id: "193de866247a4946a17331d2fdefc294" // Replace with your ArcGIS Online web map ID
        },
      });

      const view = new MapView.default({
        container: mapRef.current, // Mount the map to this DOM node
        map: webmap,
        center: [-111.787301, 40.221715], // Map center
        zoom: 9,
      });

      setView(view); // Save view instance to state if needed

      view.when(() => {
        // Add a legend widget to the map
        const legend = new Legend({ view });
        if (legendRef.current) {
          legend.container = legendRef.current;
        }

        // Click handler: check if user clicked any feature (not limited to layer title)
        view.on("click", async (event) => {
          const response = await view.hitTest(event); // Check what was clicked
          const result = response.results.find((r) => r.graphic?.attributes); // Match any feature with attributes
          if (result) {
            setSelectedFeature(result.graphic); // Save clicked feature
            setOpen(true); // Open form drawer
          }
        });
      });
    };

    loadMap(); // Call map loader when component mounts
  }, []);

  // Handles submitting feedback and writing it to the hosted feature layer
  const handleSubmit = async () => {
    if (!selectedFeature) return; // Don't proceed without a selected feature

    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer"),
    ]);

    // Reference to the "Responses" hosted feature layer
    const responseLayer = new FeatureLayer.default({
      url: "https://services.arcgis.com/YOUR_ORG_ID/arcgis/rest/services/Responses/FeatureServer/0",
    });

    // Construct a new feature with form values and geometry
    const newFeature = {
      geometry: selectedFeature.geometry,
      attributes: {
        name,
        comment,
        likes_project: likesProject ? 1 : 0,
        concern_noise: projectConcern.noise ? 1 : 0,
        concern_traffic: projectConcern.traffic ? 1 : 0,
        concern_environment: projectConcern.environment ? 1 : 0,
        priority_level: priorityLevel,
        related_feature_id: selectedFeature.attributes.OBJECTID, // Link response to selected feature
        submitted_at: new Date().toISOString(),
      },
    };

    // Submit the feature to ArcGIS via applyEdits
    try {
      const result = await responseLayer.applyEdits({
        addFeatures: [newFeature],
      });

      // Check for success or show error
      if (result.addFeatureResults.length > 0 && !result.addFeatureResults[0].error) {
        alert("Feedback submitted successfully!");
      } else {
        alert("Submission failed.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting feature:", error);
    }

    // Reset form and close drawer
    setOpen(false);
    setName("");
    setComment("");
    setLikesProject(false);
    setProjectConcern({ noise: false, traffic: false, environment: false });
    setPriorityLevel("");
    setSelectedFeature(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Box width="100%" maxWidth="1000px">
        {/* Title and instructions */}
        <Typography variant="h4" gutterBottom>
          Interactive Community Feedback Map
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click a feature on the map to leave feedback directly tied to that location.
        </Typography>

        {/* Map and legend container */}
        <Card sx={{ my: 2 }}>
          <CardContent sx={{ height: 600, display: 'flex' }}>
            <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 8 }} />
            <div ref={legendRef} style={{ width: "20%", paddingLeft: 10 }} />
          </CardContent>
        </Card>

        {/* Slide-in Feedback Form */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, p: 2 }} role="presentation">
            <DialogTitle>Feature Feedback</DialogTitle>
            <DialogContent>
              <TextField
                label="Your Name"
                fullWidth
                margin="dense"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Your City/Organization"
                fullWidth
                margin="dense"
                value={name} // Optional: Create a new state variable if separate
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Your Comment"
                fullWidth
                margin="dense"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox checked={likesProject} onChange={(e) => setLikesProject(e.target.checked)} />}
                label="This center is correctly classified"
              />
              <FormGroup>
                <Typography variant="subtitle1">Concerns</Typography>
                <FormControlLabel
                  control={<Checkbox checked={projectConcern.noise} onChange={(e) => setProjectConcern(prev => ({ ...prev, noise: e.target.checked }))} />}
                  label="Noise"
                />
                <FormControlLabel
                  control={<Checkbox checked={projectConcern.traffic} onChange={(e) => setProjectConcern(prev => ({ ...prev, traffic: e.target.checked }))} />}
                  label="Traffic"
                />
                <FormControlLabel
                  control={<Checkbox checked={projectConcern.environment} onChange={(e) => setProjectConcern(prev => ({ ...prev, environment: e.target.checked }))} />}
                  label="Environmental Impact"
                />
              </FormGroup>
              <FormControl fullWidth margin="dense">
                <InputLabel>Project Priority</InputLabel>
                <Select
                  value={priorityLevel}
                  onChange={(e) => setPriorityLevel(e.target.value)}
                  label="Project Priority"
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit Feedback
              </Button>
            </DialogActions>
          </Box>
        </Drawer>

        {/* Footer message */}
        <Typography variant="caption" display="block" gutterBottom>
          Feedback is saved directly to the hosted feature layer "Responses".
        </Typography>
      </Box>
    </Box>
  );
}

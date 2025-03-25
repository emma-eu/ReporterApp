import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Main component for the interactive map with commenting functionality
export default function InteractiveReporterApp() {
  const mapRef = useRef(null); // Reference to the map container div
  const [, setView] = useState(null); // No need to store the view if not used

  useEffect(() => {
    const loadMap = async () => {
      // Dynamically import ArcGIS modules
      const [MapView, WebMap] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
      ]);

      // Create a web map using your ArcGIS Online web map ID
      const webmap = new WebMap.default({
        portalItem: {
          id: "193de866247a4946a17331d2fdefc294", // Replace with your actual webmap ID
        },
      });

      // Initialize the map view
      const view = new MapView.default({
        container: mapRef.current, // Set the container to the mapRef div
        map: webmap,
        center: [-111.876183, 40.758701], // Default map center (Utah)
        zoom: 10,
      });

      setView(view);

      // Wait for the view to load before interacting with layers
      view.when(() => {
        // Find the feature layer named "Comments"
        const commentsLayer = webmap.allLayers.find(
          (layer) => layer.title === "Comments"
        );

        if (!commentsLayer) {
          alert("The 'Comments' layer was not found in the map. Make sure it is added and shared properly.");
          return;
        }

        view.on("click", async (event) => {
          const comment = prompt("Enter your comment about this location:"); // Prompt user for comment

          if (comment) {
            const newFeature = {
              geometry: event.mapPoint,
              attributes: {
                comment,
                created_at: new Date().toISOString(),
              },
            };

            commentsLayer.applyEdits({
              addFeatures: [newFeature],
            }).then((result) => {
              if (result.addFeatureResults.length > 0 && !result.addFeatureResults[0].error) {
                alert("Comment added successfully!");
              } else {
                alert("Failed to add comment.");
                console.error(result);
              }
            });
          }
        });
      });
    };

    loadMap(); // Call the map loader
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Box width="100%" maxWidth="1000px">
        {/* Title and instructions */}
        <Typography variant="h4" gutterBottom>
          Interactive Community Feedback Map
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click anywhere on the map to leave a comment about that location. Your feedback will be saved to the Comments layer.
        </Typography>

        {/* Map container */}
        <Card sx={{ my: 2 }}>
          <CardContent sx={{ height: 600 }}>
            <div ref={mapRef} style={{ width: "100%", height: "100%", borderRadius: 8, overflow: "hidden" }} />
          </CardContent>
        </Card>

        {/* Disclaimer and reset button */}
        <Typography variant="caption" display="block" gutterBottom>
          Comments are stored in the hosted Comments layer. For long-term access or downloads, use ArcGIS Online.
        </Typography>

        <Box pt={2}>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
            Reset Map
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

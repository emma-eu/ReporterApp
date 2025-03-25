import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Main component for the interactive map with commenting functionality
export default function InteractiveReporterApp() {
  const mapRef = useRef(null); // Reference to the map container div
  const [view, setView] = useState(null); // Store the map view instance

  useEffect(() => {
    const loadMap = async () => {
      // Dynamically import ArcGIS modules
      const [MapView, WebMap, Graphic, GraphicsLayer] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/Graphic"),
        import("@arcgis/core/layers/GraphicsLayer"),
      ]);

      // Create a graphics layer to hold user comments
      const graphicsLayer = new GraphicsLayer.default();

      // Create a web map using your ArcGIS Online web map ID
      const webmap = new WebMap.default({
        portalItem: {
          id: "your-webmap-id-here", // Replace with your actual webmap ID
        },
        layers: [graphicsLayer], // Add the graphics layer to the map
      });

      // Initialize the map view
      const view = new MapView.default({
        container: mapRef.current, // Set the container to the mapRef div
        map: webmap,
        center: [-111.876183, 40.758701], // Default map center (Utah)
        zoom: 10,
      });

      setView(view); // Store view in state if needed elsewhere

      // Add click event listener to the map view
      view.on("click", async (event) => {
        const { latitude, longitude } = event.mapPoint;
        const comment = prompt("Enter your comment about this location:"); // Prompt user for comment

        if (comment) {
          // Create a graphic with the comment and location
          const pointGraphic = new Graphic.default({
            geometry: event.mapPoint,
            symbol: {
              type: "simple-marker",
              style: "circle",
              color: "#0079c1",
              size: "10px",
              outline: {
                color: "white",
                width: 1,
              },
            },
            attributes: {
              comment,
              created_at: new Date().toISOString(),
            },
            popupTemplate: {
              title: "User Comment",
              content: "{comment}"
            },
          });

          // Add the graphic to the graphics layer
          graphicsLayer.add(pointGraphic);
        }
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
          Click anywhere on the map to leave a comment about that location. Your feedback will appear as a point on the map with your message.
        </Typography>

        {/* Map container */}
        <Card sx={{ my: 2 }}>
          <CardContent sx={{ height: 600 }}>
            <div ref={mapRef} style={{ width: "100%", height: "100%", borderRadius: 8, overflow: "hidden" }} />
          </CardContent>
        </Card>

        {/* Disclaimer and reset button */}
        <Typography variant="caption" display="block" gutterBottom>
          Comments are stored temporarily in this session. For long-term storage or integration with ArcGIS layers, contact your GIS admin.
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

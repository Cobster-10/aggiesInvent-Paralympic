"use client";

import React, { useEffect } from "react";

declare const Sketchfab: any;

interface SketchfabViewerProps {
  modelUid: string; // Explicitly define the type of modelUid prop as string
}

const SketchfabViewer = ({ modelUid }: SketchfabViewerProps) => {
  useEffect(() => {
    // Load the Sketchfab viewer script dynamically
    const script = document.createElement("script");
    script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the Sketchfab viewer once the script is loaded
    script.onload = () => {
      const iframe = document.getElementById("sketchfab-viewer");
      const client = new Sketchfab(iframe);
      client.init(modelUid, {
        preload: 1, // Preload the viewer parameters
        
        success: (api: any) => {
          api.start();
          api.setBackground({ transparent: true }, function () {
            window.console.log("Background changed");
          });
          console.log("Viewer is ready");
        },
        error: () => {
          console.error("Failed to initialize Sketchfab viewer");
        },
        autospin: 2,
        transparent: 1
      });
    };

    // Cleanup function to remove the script element
    return () => {
      document.body.removeChild(script);
    };
  }, [modelUid]);

  return (
    <iframe
      id="sketchfab-viewer"
      src=""
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowFullScreen
      frameBorder="0"
      title="Sketchfab Viewer"
      style={{ width: "50vw", height: "100vh"}}
    ></iframe>
  );
};

export default SketchfabViewer;

import React, { useRef, useEffect } from 'react';

const HighlightCoordinates = ({ file, detections }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (file && detections && detections.length > 0) {
      const img = new Image();
      const objectURL = URL.createObjectURL(file);
      img.src = objectURL;

      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match the original image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Draw the bounding boxes for each detection
        detections.forEach((detection) => {
          const { x, y, width, height } = detection.coordinates;

          ctx.strokeStyle = "#FF033E"; // Red color for the bounding box
          ctx.lineWidth = 7;
          ctx.strokeRect(x, y, width, height); // Draw the rectangle
        });

        // Clean up the object URL
        URL.revokeObjectURL(objectURL);
      };
    }
  }, [file, detections]);

  return <canvas ref={canvasRef} style={{maxWidth:500}}/>;
};

export default HighlightCoordinates;
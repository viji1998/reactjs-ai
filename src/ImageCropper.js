import React, { useRef, useEffect, useState } from 'react';
import { detectObjects, cropImage } from './imageProcessing';

const ImageCropper = () => {
  const imageRef = useRef(null);
  const [croppedImages, setCroppedImages] = useState([]);

  useEffect(() => {
    const processImage = async () => {
      if (imageRef.current) {
        const predictions = await detectObjects(imageRef.current);
        console.log('Processing Predictions:', predictions); // Debugging line

        const crops = predictions.map(prediction => {
          const croppedImage = cropImage(imageRef.current, prediction.bbox);
          console.log('Cropped Image:', croppedImage); // Debugging line
          return croppedImage;
        });

        setCroppedImages(crops);
      }
    };

    if (imageRef.current.complete) {
      processImage();
    } else {
      imageRef.current.onload = processImage;
    }
  }, []);

  return (
    <div>
      <img ref={imageRef} src="./shirt.png" alt="Source" style={{ display: 'none' }} />
      {croppedImages.map((croppedImage, index) => (
        <img key={index} src={croppedImage} alt={`Cropped ${index}`} />
      ))}
    </div>
  );
};

export default ImageCropper;

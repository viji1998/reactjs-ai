import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

export async function detectObjects(imageElement) {
  const model = await cocoSsd.load();
  const predictions = await model.detect(imageElement);
  return predictions;
}

export function cropImage(imageElement, boundingBox) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const [x, y, width, height] = boundingBox;

  canvas.width = width;
  canvas.height = height;

  context.drawImage(
    imageElement,
    x, y, width, height,
    0, 0, width, height
  );

  return canvas.toDataURL();
}

const API_URL = process.env.REACT_APP_URL;

export const createIndividualImage = async (imageData) => {
  try {
    const response = await fetch(`${API_URL}api/v1/individual/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imageData) // Pass the image data for creation
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating individual image:", error);
    throw error;
  }
};
const API_URL = process.env.REACT_APP_URL;

export const createMasterImage = async (payload) => {
  try {
    const response = await fetch(`${API_URL}api/v1/master/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload) // Add any payload data if needed
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating master image:", error);
    throw error;
  }
};
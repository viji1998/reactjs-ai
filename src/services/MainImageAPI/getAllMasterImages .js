
const API_URL = process.env.REACT_APP_URL;

export const getAllMasterImages = async () => {
  try {
    const response = await fetch(`${API_URL}api/v1/master/getAll`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
     return data.data
  } catch (error) {
    console.error("Error fetching master images:", error);
    throw error;
  }
};


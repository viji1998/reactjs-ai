const API_URL = process.env.REACT_APP_URL;

export const individualgetall = async () => {
  try {
    const response = await fetch(`${API_URL}api/v1/individual/getAll`);
    const contentType = response.headers.get("content-type");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Unexpected response format:", text);
      throw new Error("Unexpected response format");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching master images:", error);
    throw error;
  }
};

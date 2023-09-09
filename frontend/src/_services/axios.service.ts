import axios from "axios";
import { userControl } from "../_interface/user.interface";
import mockStore from "../Assets/Api/Data/mockStoreUser.json";

async function getUserData(
  userId: number,
  paramsmock: boolean
): Promise<{ data: userControl }> {
  try {
    let response;
    if (paramsmock) {
      console.log("Using mock data...");
      response = mockStore.data.id[userId];
    } else {
      const apiEndpoints: string[] = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`,
        `http://localhost:3000/user/${userId}/activity`,
      ];

      // Array to store the fetched data
      let fetchedData: string[] = [];

      // Perform multiple GET requests in parallel
      const responses = await Promise.all(
        apiEndpoints.map((endpoint) => axios.get(endpoint))
      );
      fetchedData = responses.map((response) => response.data);

      response = fetchedData;
      console.log("API Response:", response);
    }
    console.log("Returning response:", response);
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}
export { getUserData };

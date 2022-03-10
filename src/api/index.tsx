import axios from "axios";

export const api = {
  get: async (endpoint: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`
    );
    return response.data;
  },
};

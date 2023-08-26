import { axios, API_ROUTES } from "@/config";

export default {
  async getAll() {
    let result = await axios.get(`${API_ROUTES.country.get}`);

    return result;
  },

  async find(code: string) {
    let result = await axios.get(`${API_ROUTES.country.find}/${code}`);

    return result;
  },
};

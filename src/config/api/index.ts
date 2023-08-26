const API_VERSION = import.meta.env.VITE_API_VERSION;
const API_URL = import.meta.env.VITE_API_URL;
export const API_ROUTES = {
  country: {
    get: `${API_URL}/${API_VERSION}/all`,
    find: `${API_URL}/${API_VERSION}/alpha`,
  },
};

const BASE_URL = 'https://example.com/api'; // Replace with your API base URL

const api = {
  get: async (url) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('API Error:', error);
      throw error;
    }
  },
  post: async (url, body) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('API Error:', error);
      throw error;
    }
  },
  // Add other HTTP methods as needed: put, patch, delete, etc.
};

export default api;

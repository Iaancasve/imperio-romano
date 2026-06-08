import { apiClient } from './cliente';

export const dataService = {
  getProvincias: async () => {
    const query = `
      query {
        provincias {
          id
          nombre
          tipo
          gobernador {
            nombre
          }
        }
      }
    `;

    const response = await apiClient('/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });

    return response.data.provincias;
  },
};
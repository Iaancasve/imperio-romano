import { apiClient } from './cliente';

// front-imperio/src/api/dataService.ts
export const dataService = {
  getProvincias: async () => {
    const query = `
      query {
        provincias {
          id
          nombre
          lealtad
          prosperidadEconomica
          impuestos
          conflictosInternos
          riesgoRebelion
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

  recaudarImpuestos: async (provinciaId: number) => {
  // Debe coincidir con @Post('calcular/:provinciaId')
  return await apiClient(`/impuestos/calcular/${provinciaId}`, {
    method: 'POST',
  });
    },
};


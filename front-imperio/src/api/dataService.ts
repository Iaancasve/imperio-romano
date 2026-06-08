import { apiClient } from './cliente';

export const dataService = {
    getProvincias: async () => {
        const query = `query { provincias { id nombre lealtad prosperidadEconomica impuestos conflictosInternos riesgoRebelion gobernador { id nombre } } }`;
        const response = await apiClient('/graphql', { method: 'POST', body: JSON.stringify({ query }) });
        return response.data.provincias;
    },

    recaudarImpuestos: async (provinciaId: number) => {
        return await apiClient(`/impuestos/calcular/${provinciaId}`, { method: 'POST' });
    },

    createProvincia: async (data: any) => {
        const mutation = `mutation { 
    createProvincia(
      nombre: "${data.nombre}", 
      lealtad: ${Number(data.lealtad)}, 
      prosperidadEconomica: ${Number(data.prosperidadEconomica)}, 
      impuestos: ${Number(data.impuestos)}, 
      conflictosInternos: ${Number(data.conflictosInternos)}, 
      riesgoRebelion: ${Number(data.riesgoRebelion)}
    ) { id } 
  }`;
        return await apiClient('/graphql', { method: 'POST', body: JSON.stringify({ query: mutation }) });
    },
    updateProvincia: async (id: number, data: any) => {
    // EL ID VA SIN COMILLAS PORQUE ES UN INT
    const mutation = `mutation { 
      updateProvincia(
        id: ${id}, 
        nombre: "${data.nombre}", 
        lealtad: ${data.lealtad}, 
        prosperidadEconomica: ${data.prosperidadEconomica}, 
        impuestos: ${data.impuestos}, 
        conflictosInternos: ${data.conflictosInternos}, 
        riesgoRebelion: ${data.riesgoRebelion}
      ) { id } 
    }`;
    return await apiClient('/graphql', { method: 'POST', body: JSON.stringify({ query: mutation }) });
  },

  deleteProvincia: async (id: number) => {
  const mutation = `mutation { removeProvincia(id: ${id}) { id } }`;
  return await apiClient('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: mutation }),
  });
},
};
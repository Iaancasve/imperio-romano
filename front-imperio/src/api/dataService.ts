// front-imperio/src/api/dataService.ts
import { apiClient } from './cliente';

export const dataService = {
    // --- Provincias (GraphQL) ---
    getProvincias: async () => {
        const query = `query { provincias { id nombre lealtad prosperidadEconomica impuestos conflictosInternos riesgoRebelion gobernador { id nombre } } }`;
        const response = await apiClient('/graphql', { method: 'POST', body: JSON.stringify({ query }) });
        return response.data.provincias;
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

    // --- Recaudación (REST) ---
    recaudarImpuestos: async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/impuestos/calcular/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }

        return await response.json();
    },

    // --- Usuarios (REST) ---
    getUsuarios: async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/usuarios', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await response.json();
    },

    createUsuario: async (data: { nombre: string, contrasena: string, rolId: number }) => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Esto envía { nombre, contrasena, rolId }
    });
    if (!response.ok) throw new Error('Error al crear usuario');
    return response.json();
},

    updateUsuario: async (id: number, data: { nombre: string, contrasena?: string, rolId: number }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PATCH',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Enviamos rolId, no role
    });
    return await response.json();
},

    deleteUsuario: async (id: number) => {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3000/usuarios/${id}`, { 
            method: 'DELETE', 
            headers: { 'Authorization': `Bearer ${token}` } 
        });
    }
};
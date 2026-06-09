// Función auxiliar para peticiones GraphQL consistentes
const gqlRequest = async (query: string, variables: any = {}) => {
    const token = localStorage.getItem('token');
    
    const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({ query, variables })
    });
    
    const result = await response.json();
    
    if (result.errors) {
        console.error("GraphQL Errors:", result.errors);
        throw new Error(result.errors[0].message);
    }
    return result.data;
};

export const dataService = {
    getProvincias: async () => {
        const query = `query { provincias { id nombre lealtad prosperidadEconomica impuestos conflictosInternos riesgoRebelion gobernador { id nombre } } }`;
        const data = await gqlRequest(query);
        return data.provincias;
    },

    getGobernadoresLibres: async () => {
        const query = `query { gobernadoresLibres { id nombre } }`;
        const data = await gqlRequest(query);
        return data.gobernadoresLibres;
    },

    createProvincia: async (data: any) => {
        const mutation = `mutation Create($input: CreateProvinciaInput!) { createProvincia(input: $input) { id } }`;
        return await gqlRequest(mutation, { input: data });
    },

    updateProvincia: async (id: number, data: any) => {
        const mutation = `mutation Update($id: Int!, $input: UpdateProvinciaInput!) { updateProvincia(id: $id, input: $input) { id } }`;
        return await gqlRequest(mutation, { id, input: data });
    },

    deleteProvincia: async (id: number) => {
        const mutation = `mutation { removeProvincia(id: ${id}) }`;
        return await gqlRequest(mutation);
    },

    recaudarImpuestos: async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/impuestos/calcular/${id}`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
    },

    getUsuarios: async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/usuarios', { headers: { 'Authorization': `Bearer ${token}` } });
        return await response.json();
    },

    createUsuario: async (data: any) => {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Error al crear usuario');
        return response.json();
    },

    updateUsuario: async (id: number, data: any) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    deleteUsuario: async (id: number) => {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3000/usuarios/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
    },

    simularRebelion: async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/rebeliones/simular/${id}`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        return response.json();
    },
};
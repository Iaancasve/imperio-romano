export const apiClient = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token'); 

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}), 
  };

  const response = await fetch(`http://localhost:3000${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
  }

  return response.json();
};
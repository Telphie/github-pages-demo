import getEndpoints from '../server/db';

const endpoints = getEndpoints();
type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = { greeting: string };

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
  const path = process.env.NODE_ENV === 'development'
    ? `http://localhost:3001/api/${endpoint}`
    : `https://raw.githubusercontent.com/Telphie/github-pages-demo/gh-pages/static/db/${endpoint}.json`;
  const response = await fetch(path);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

const api = {
  get: {
    data: () => getJson<RESPONSE_DATA>('data'),
  },
};

export type { RESPONSE_DATA, ENDPOINTS };
export default api;

const API_URL = import.meta.env.VITE_API_URL;

export const healthCheck = async () => {
  const res = await fetch(`${API_URL}/health`);
  if (!res.ok) throw new Error("API error");
  return res.json();
};

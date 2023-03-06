export async function getUrlInfo(url) {
  const res = await fetch(import.meta.env.VITE_BACKEND_OPTIMIZE_URL , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  const data = await res.json();
  return data;
}
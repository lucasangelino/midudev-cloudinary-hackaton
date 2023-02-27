export async function optimizeUrl(url) {
  const res = await fetch("http://localhost:4000/optipic/api/v1/optimize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  const data = await res.json();
  return data;
}

export const fetchResponse = async (transcript: string) => {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      transcript,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch response");
  }
  const data = await response.json();

  return data;
};

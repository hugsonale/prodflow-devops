import { useEffect, useState } from "react";
import { healthCheck } from "./services/api";

export default function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    healthCheck()
      .then((res) => setStatus(res.status))
      .catch(() => setStatus("API Unreachable"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>ProdFlow</h1>
      <p>Backend Status: <strong>{status}</strong></p>
    </main>
  );
}

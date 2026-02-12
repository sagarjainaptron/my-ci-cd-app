import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7140/api/test")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React + .NET CI/CD Demo</h1>

      {data ? (
        <div>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>Time:</strong> {data.time}</p>
        </div>
      ) : (
        <p>Loading from API...</p>
      )}
    </div>
  );
}

export default App;

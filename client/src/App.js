import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [organisations, setOrganisations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/organisation")
      .then((response) => response.data)
      .then((data) => {
        setOrganisations(data.organizations);
      });
  });

  return (
    <>
      <h1>Organisation</h1>
      <div></div>
    </>
  );
}

export default App;

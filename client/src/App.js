import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Organisation from './components/organisation/Organisation';

function App() {
  const [organisations, setOrganisations] = useState([]);
  useEffect(() => {
    if (organisations.length === 0) {
      axios
        .get('http://localhost:8080/api/organisation')
        .then((response) => response.data)
        .then((data) => {
          setOrganisations(data.organizations);
        });
    }
  }, []);

  return (
    <>
      <div>
        {organisations && <Organisation organisations={organisations} />}
      </div>
    </>
  );
}

export default App;

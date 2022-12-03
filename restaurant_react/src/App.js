import { useEffect } from 'react';
//import { ReactDOM } from 'react';
import './App.css';

function App() {

  useEffect(() => {
      Contacts( );
  }, []);
  
  async function Contacts() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('http://localhost:8000/api/contacts', options);
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <div>
        <h1>Liste des Contacts</h1>
        <ul>
          <li>
            <p>Prénom :  </p>
          </li>
        </ul>
      </div>
    </div>
  );
  }


export default App;

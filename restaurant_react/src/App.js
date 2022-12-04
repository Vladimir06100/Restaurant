import { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact/Contact';

function App() {
  const [contacts, setContacts] = useState([]);
  
  async function getContacts() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let response = await fetch('http://localhost:8000/api/contacts', options);
    const data = await response.json();
    console.log(data);
    const contacts= data.contacts;
    setContacts(contacts);
  }

  useEffect(() => {
    console.log('useEffect');
      getContacts();
  }, []); 

  return (
    <div className="App">
      <div>
        <h1>Liste des Contacts</h1>
        <ul>
          {contacts.map((contact, index) => (
              <Contact
                key={index}
                firstname={contact.firstname}
                lastname={contact.lastname}
                email={contact.email}
                message={contact.message}
              />
          ))}
        </ul>
      </div>
    </div>
  );
  }


export default App;

import { useEffect, useState } from 'react';
import Contact from './Contact/Contact';

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
    const contacts = data.contacts;
    setContacts(contacts);
  }

  useEffect(() => {
    console.log('useEffect');
    getContacts();
  }, []);

  async function createContact(firstname, lastname, email, message) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      }),
    };
    let response = await fetch('http://localhost:8000/api/contacts', options);

    if (response.status !== 201) {
      return;
    }

    const data = await response.json();

    const newContact = data.contact;
    setContacts([newContact, ...contacts]);
  }

  <div>
        <h1>Liste des Contacts</h1>
        {/* create form for new contact */}
        <form onSubmit={(event) => {
          event.preventDefault();
          const firstname = event.target.firstname.value;
          const lastname = event.target.lastname.value;
          const email = event.target.email.value;
          const message = event.target.message.value;
          createContact(firstname, lastname, email, message);
        }}>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" />
          <label htmlFor="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Envoyer</button>
        </form>
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
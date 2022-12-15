import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Inscription from './Identification/Inscription';
import Connexion from './Identification/Connexion';
import Maj from './Identification/Maj';
import Error404 from "./Components/Error404/error404";
import CreationRestaurant from "./Pages/CréationRestaurant";
import Produits from "./Pages/Produits";
import Cartes from "./Pages/Cartes";
import Qrcode from "./Components/Qrcode/Qrcode";
import MesRestaurants from "./Pages/MesRestaurants";
import './Styles/Home.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    error: <Error404 />
  },

  {
    path: '/creation/restaurant',
    element: <CreationRestaurant />,
    error: <Error404 />
  },

  {
    path: 'mesrestaurants',
    element: <MesRestaurants />,
    error: <Error404 />
  },

  {
    path: '/produits',
    element: <Produits />,
    error: <Error404 />
  },

  {
    path: '/cartes',
    element: <Cartes />,
    error: <Error404 />
  },

  {
    path: '/inscription',
    element: <Inscription />,
    error: <Error404 />
  },

  {
    path: '/connexion',
    element: <Connexion />,
    error: <Error404 />
  },

  {
    path: '/Maj',
    element: <Maj />,
    error: <Error404 />
  }
  {
    path: '/qrcode',  
    element: <Qrcode />, 
    error: <Error404 />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

//////////////////////////////////////////////////////
// import Contact from './Contact/Contact';
// import { useEffect, useState } from 'react';
//   const [contacts, setContacts] = useState([]);

//   async function getContacts() {
//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     let response = await fetch('http://localhost:8000/api/contacts', options);
//     const data = await response.json();
//     console.log(data);
//     const contacts = data.contacts;
//     setContacts(contacts);
//   }
//   useEffect(() => {
//     console.log('useEffect');
//     getContacts();
//   }, []);
//   async function createContact(firstname, lastname, email, message) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         message: message,
//       }),
//     };
//     let response = await fetch('http://localhost:8000/api/contacts', options);
//     if (response.status !== 201) {
//       return;
//     }
//     const data = await response.json();
//     const newContact = data.contact;
//     setContacts([newContact, ...contacts]);
//   }
//   return (
//     <div className="App">
//       <div>
//         <h1>Liste des Contacts</h1>
//         <form onSubmit={(event) => {
//           event.preventDefault();
//           const firstname = event.target.firstname.value;
//           const lastname = event.target.lastname.value;
//           const email = event.target.email.value;
//           const message = event.target.message.value;
//           createContact(firstname, lastname, email, message);
//         }}>
//           <label htmlFor="firstname">Prénom</label>
//           <input type="text" name="firstname" id="firstname" />
//           <label htmlFor="lastname">Nom</label>
//           <input type="text" name="lastname" id="lastname" />
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" />
//           <label htmlFor="message">Message</label>
//           <textarea name="message" id="message" cols="30" rows="10"></textarea>
//           <button type="submit">Envoyer</button>
//         </form>
//         <ul>
//           {contacts.map((contact, index) => (
//             <Contact
//               key={index}
//               firstname={contact.firstname}
//               lastname={contact.lastname}
//               email={contact.email}
//               message={contact.message}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );


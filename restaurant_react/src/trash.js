// import { useEffect, useState } from 'react';
// import Contact from './Contact/Contact';

// const [contacts, setContacts] = useState([]);

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

//   <div>
//         <h1>Liste des Contacts</h1>
//         {/* create form for new contact */}
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
/* 
function Contact({ firstname, lastname, email, message }) {
  return (
    <li>
      <h2>{firstname} {lastname}</h2>
      <p>{email}</p>
      <p>{message}</p>
    </li>
  );
}

export default Contact; */





// import Menu from '../Components/Menu';
// import Footer from '../Components/Footer';
// import '../Styles/Produits.css';
// import { useEffect, useState } from 'react';
// import Produits_props from '../Props/Produits_props';


// function Produits() {

//   function getProduits() {
//     fetch('http://localhost:8000/api/produits')
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }


//   const [produits, setProduits] = useState([]);
//   const [nom_produit, setNom_produit] = useState('');
//   const [categorie_id, setCategorie_id] = useState('');
//   const [description, setDescription] = useState('');
//   const [prixHT, setPrixHT] = useState('');
//   const [TVA, setTVA] = useState('');
//   const [prixTTC, setPrixTTC] = useState('');
//   const [quantite, setQuantite] = useState('');

//   // create function for post new produit
//   async function createProduit() {
//     const produit = {
//       nom_produit: nom_produit,
//       categorie_id: categorie_id,
//       description: description,
//       prixHT: prixHT,
//       TVA: TVA,
//       prixTTC: prixTTC,
//       quantite: quantite
//     };
//     await fetch('http://localhost:8000/api/produits', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(produit)
//     });
//     const newProduits = [...produits, produit];
//     setProduits(newProduits);
//   }

//   async function editProduit(id) {
//     const produit = {
//       nom_produit: nom_produit,
//       categorie_id: categorie_id,
//       description: description,
//       prixHT: prixHT,
//       TVA: TVA,
//       prixTTC: prixTTC,
//       quantite: quantite
//     };
//     await fetch('http://localhost:8000/api/produits/' + id, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(produit)
//     });
//     const newProduits = produits.map(produit => {
//       if (produit.id === id) {
//         produit.nom_produit = nom_produit;
//         produit.categorie_id = categorie_id;
//         produit.description = description;
//         produit.prixHT = prixHT;
//         produit.TVA = TVA;
//         produit.prixTTC = prixTTC;
//         produit.quantite = quantite;
//       }
//       return produit;
//     });
//     setProduits(newProduits);
//   }


//   async function deleteProduit(id) {
//     await fetch('http://localhost:8000/api/produits/' + id, {
//       method: 'DELETE'
//     });
//     const newProduits = produits.filter(produit => produit.id !== id);
//     setProduits(newProduits);
//   }

//   useEffect(() => {
//     fetch('http://localhost:8000/api/produits')
//       .then(response => response.json())
//       .then(data => setProduits(data));
//   }
//     , []);

//   return (
//     <div>
//       <Menu />
//       <div className="produits">
//         <h1>Produits</h1>
//         <form onSubmit={createProduit}>
//           <div className="form-group">
//             <label htmlFor="nom_produit">Nom du produit</label>
//             <input type="text" className="form-control" id="nom_produit" placeholder="Nom du produit" value={nom_produit} onChange={(event) => setNom_produit(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="categorie_id">Categorie</label>
//             <input type="text" className="form-control" id="categorie_id" placeholder="Categorie" value={categorie_id} onChange={(event) => setCategorie_id(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="prixHT">Prix HT</label>
//             <input type="text" className="form-control" id="prixHT" placeholder="Prix HT" value={prixHT} onChange={(event) => setPrixHT(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="TVA">TVA</label>
//             <input type="text" className="form-control" id="TVA" placeholder="TVA" value={TVA} onChange={(event) => setTVA(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="prixTTC">Prix TTC</label>
//             <input type="text" className="form-control" id="prixTTC" placeholder="Prix TTC" value={prixTTC} onChange={(event) => setPrixTTC(event.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="quantite">Quantite</label>
//             <input type="text" className="form-control" id="quantite" placeholder="Quantite" value={quantite} onChange={(event) => setQuantite(event.target.value)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Ajouter</button>

//         </form>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Nom du produit</th>
//               <th scope="col">Categorie</th>
//               <th scope="col">Description</th>
//               <th scope="col">Prix HT</th>
//               <th scope="col">TVA</th>
//               <th scope="col">Prix TTC</th>
//               <th scope="col">Quantite</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* recuperer produits  grace au Produits_props */}


//             {produits.map(produit => (
//               <tr key={produit.id}>
//                 <td>{produit.nom_produit}</td>
//                 <td>{produit.categorie_id}</td>
//                 <td>{produit.description}</td>
//                 <td>{produit.prixHT}</td>
//                 <td>{produit.TVA}</td>
//                 <td>{produit.prixTTC}</td>
//                 <td>{produit.quantite}</td>
//                 <td>
//                   <button className="btn btn-sm btn-warning" onClick={() => editProduit(produit.id)}>Modifier</button>
//                   <button className="btn btn-sm btn-danger" onClick={() => deleteProduit(produit.id)}>Supprimer</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </div>
//   );





// }

// export default Produits;
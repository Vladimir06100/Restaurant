import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
// import ''./Cartes.css';
import {useState,useEffect} from 'react';
import Cartes_props from '../Props/Cartes_props';
import Produits from '../Props/Produits_props';


function Cartes() {

    const [cartes, setCartes] = useState ([]);

    async function getCartes() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let response = await fetch('http://localhost:8000/api/cartes', options);
      const data = await response.json();
      console.log(data);
      const cartes = data.cartes;
      setCartes(cartes);
    }
 
    useEffect(() => {
      getCartes();
    }, []);
 
    async function createCarte(nom_carte) {
     const options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         nom_carte: nom_carte,
        
       }),
     };
     let response = await fetch('http://localhost:8000/api/cartes', options);
 
     if (response.status !== 201) {
       return;
     }
 
     const data = await response.json();
 
     const newCarte = data.carte;
     setCartes([newCarte, ...cartes]);
   }


   const [produits, setProduits] = useState([]);

   async function getProduits() {
       const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
           },
       };
       let response = await fetch('http://localhost:8000/api/produits', options);
       const data = await response.json();
       console.log(data);
       const produits = data.produits;
       setProduits(produits);
   }

   useEffect(() => {
       console.log('useEffect');
       getProduits();
   }
       , []);

    return (
        <div>
            <Menu />
            <h1>Cartes</h1>
    

            <div>
            <form method="POST" action="" onSubmit={(event)=> {
        const nom_carte= event.target.nom_carte.value;
        createCarte(nom_carte);


        }}>
             {cartes.map((carte, index) => (
  <Cartes_props 
  key={index}
  nom_carte={carte.nom_carte} 
  produit_id={carte.produit_id} />
  ))}

Produits :  {produits.map((produit) => (
                                <tr key={produit.id}>
                                    <td>{produit.nom_produit}</td>
                                    <td>{produit.categorie_id}</td>
                                    <td>{produit.description}</td>
                                    <td>{produit.prixHT}</td>
                                    <td>{produit.TVA}</td>
                                    <td>{produit.prixTTC}</td>
                                    <td>{produit.quantite}</td>
                                </tr> ))}


            <label htmlFor="nom">Nom de la carte</label>
            <input type="text" id="nom" name="nom" />

            <label htmlFor="produit">Produits</label>
            <select id="produit" name="produit">
                <option value="">  
    
   </option>
            </select>

            <button type="submit">Ajouter</button>
            <button type="submit">Modifier</button>
            <button type="submit">Supprimé</button>
        </form>

        

            </div>
            <Footer />
        </div>
    )
}

export default Cartes;
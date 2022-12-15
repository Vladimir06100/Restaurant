import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Cartes.css';
import { useState, useEffect } from 'react';
import Cartes_props from '../Props/Cartes_props';


function Cartes() {

  const [cartes, setCartes] = useState([]);
  const [listproduits, setListproduits] = useState([]);

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
      const listproduits= data.db;
      setCartes(cartes);
      setListproduits(listproduits);
      console.log(listproduits,'testa');
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
  listproduits={listproduits}
  produit_id={carte.produit_id}  
  
  
  />
  ))}



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
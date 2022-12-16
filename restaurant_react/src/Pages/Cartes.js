import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
// import ''./Cartes.css';
import {useState,useEffect} from 'react';
import Cartes_props from '../Props/Cartes_props';


function Cartes() {

    const [cartes, setCartes] = useState ([]);
    const [listproduits, setListproduits] = useState ([]);

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
      const listproduits= data.liste_des_produits;
      setCartes(cartes);
      setListproduits(listproduits);
      console.log(listproduits,'affichage listes');
    }
 
    useEffect(() => {
      getCartes();
    }, []);
 

    async function createCarte(nom_carte, produit_id) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nom_carte:nom_carte,
            produit_id:produit_id
            // jajoute le produit produit_id:produit
           
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
            <h1>Créer Carte</h1>
    

            <form method="POST" action="" onSubmit={(event)=> {
                event.preventDefault();
                const nom_carte= event.target.nom_carte.value;
                const produit_id= event.target.produit_id.value
                //j'ajoute le prduit
                createCarte(nom_carte,produit_id);
                
            console.log(nom_carte, "nom" );
            }}>
            <label htmlFor="nom_carte">Nom de la carte</label>
            <input type="text" id="nom_carte" name="nom_carte" />
     


            <label htmlFor="produit">Produits</label>
            <select id="produit" name="produit_id">
  
         
            {listproduits.map(produit => 
					  <option key={produit.id} value={produit.id}> {produit.nom_produit} -
                     - {produit.categorie} -
                      {produit.description}</option>
				
		
    )};
            </select>

            <button type="submit">Ajouter</button>
        </form>


            <div>
       

<h2> Affichage </h2>
        {cartes.map((carte, index) => (
  <Cartes_props 
  key={index}
  nom_carte={carte.nom_carte} 
  listproduits={listproduits}
  produit_id={carte.produit_id}  
  />
  ))}

            </div>
            <Footer />
        </div>
    )
}

export default Cartes;
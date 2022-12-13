import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
// import ''./Cartes.css';
import {useState,useEffect} from 'react';

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
     console.log('useEffect');
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
                    <label htmlFor="name">Nom de la carte</label>
                    <input type="text" id="name" name="nom_carte" />

                    <label htmlFor="produit">Produits</label>
                    <select id="produit" name="produit">
                        <option value="produit_id">   {cartes.map((carte, index) => (
             <Cartes
               key={index}
               produit_id={carte.produit_id}
             />
           ))}</option>
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
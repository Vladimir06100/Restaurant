import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Qrcode from '../Components/Qrcode/Qrcode';
// import ''./Cartes.css';
import {useState,useEffect} from 'react';
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
      <div className="cartesPosition">
        <div className="cartesPositionBis">
          <div className="home_title">
            <span>
              Add or <br /><span id="home_title_color">modify</span><br /> your cards
            </span>

            <div className="restaurant_text">
              <p>
                Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
              </p>
            </div>

            <form method="POST" action="" onSubmit={(event)=> {
                event.preventDefault();
                const nom_carte= event.target.nom_carte.value;
                const produit= event.target.produit.value
                //jajoute le prduit
                createCarte(nom_carte, produit);
                
            console.log(nom_carte, "nom" );
            }}>
            <label htmlFor="nom_carte">Nom de la carte</label>
            <input type="text" id="nom_carte" name="nom_carte" />



            <label htmlFor="produit">Produits</label>
            <select id="produit" name="produit">
              <option value="">

              </option>
            </select>

                    <button type="submit">Ajouter</button>
                    <button type="submit">Modifier</button>
                    <button type="submit">Supprimé</button>
                    <Qrcode url="http://localhost:8000/api/" />
                </form>

        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Cartes;
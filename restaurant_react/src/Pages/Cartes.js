import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Qrcode from "../Components/Qrcode/Qrcode";
import "../Styles/Cartes.css";
import { useState, useEffect } from "react";
import Cartes_props from "../Props/Cartes_props";

function Cartes() {
  const [cartes, setCartes] = useState([]);
  const [listproduits, setListproduits] = useState([]);

  async function getCartes() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let response = await fetch("http://localhost:8000/api/cartes", options);
    const data = await response.json();
    const cartes = data.cartes;
    const listproduits = data.liste_des_produits;
    setCartes(cartes);
    console.log(cartes, "cartes");
    setListproduits(listproduits);
    console.log(listproduits, "affichage listes");
  }

  useEffect(() => {
    getCartes();
  }, []);

  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

 
  async function createCarte(nom_carte, produit_id) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom_carte: nom_carte,
        produit_id: produit_id,
        // jajoute le produit produit_id:produit
      }),
    };
    let response = await fetch("http://localhost:8000/api/cartes", options);

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

      <form
        method="POST"
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          const nom_carte = event.target.nom_carte.value;
          const produit_id = event.target.produit_id.value;
          console.log(getSelectValues(event.target.produit_id));
         
          //j'ajoute le prduit
          createCarte(nom_carte, produit_id);

          console.log(nom_carte, "nom");
        }}>
        <label htmlFor="nom_carte">Nom de la carte</label>

        <br/>

        <input type="text" id="nom_carte" name="nom_carte" />

        <br/>
        
        <label htmlFor="produit"> Choix produits de la carte</label>
        <br/>
  
      
    
  {/*   {
     listproduits.map((produit) => {
       return <label name="produit_id"><input type="checkbox"  value={produit.id}/>{produit.nom_produit}&nbsp;({produit.description}) <br/> </label>
     }) 
    } */}

        <select multiple id="produit" name="produit_id">
          {listproduits.map((produit) => (
            <option key={produit.id} value={produit.id}>

              {produit.nom_produit} -
              {produit.description}
            </option>
          ))}
          ;
        </select>
<br/>
        <button type="submit">Ajouter</button>
      </form>

      <div>
 <br/>
        <h2> Affichage des cartes </h2>
        {cartes.map((carte, index) => (
          <Cartes_props
            key={index}
            id={carte.id}
            nom_carte={carte.nom_carte}
            listproduits={listproduits}
            produit_id={carte.produit_id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cartes;

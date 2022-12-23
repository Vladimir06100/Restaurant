import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "../Components/Qrcode/Qrcode";

function Carte() {
  const [menu, setMenu] = useState({});

  const { id } = useParams();

  const getMenu = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/cartes/" + id,
        options
      );
      const data = await response.json();
      console.log(data, "data");

      if (response.status !== 200) {
        throw new Error(data);
      }
      const sortedProduits = data.produits.sort((a, b) => a.categorie_id - b.categorie_id);
      
      setMenu(data,sortedProduits);
    } catch (e) {
      console.log(e, "e");
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  function getCategorieNom(categorieId) {
    if (categorieId === 1) {
      return "Entrée";
    } else if (categorieId === 2) {
      return "Plat";
    }else if (categorieId === 3) {
      return "Dessert";
    } else if (categorieId === 4) {
      return "Boisson";
    }else {
      return "Inconnu";
    }
  }
  
  const [checkboxState, setCheckboxState] = useState({});
  
    const handleCheckboxChange =(prod) => (event) => {
      setCheckboxState({
        ...checkboxState,
        [prod.id]: event.target.checked,
      });
  
      if (event.target.checked) {
        // Envoyer une requête pour ajouter le produit au panier
        fetch("/api/add-to-cart", {
          method: "POST",
          body: JSON.stringify({
            productId: prod.id,
          }),
        });
      } else {
        // Envoyer une requête pour retirer le produit du panier
        fetch("/api/remove-from-cart", {
          method: "POST",
          body: JSON.stringify({
            productId: prod.id,
          }),
        });
      }
    };

  return (
    <div>
      <h1>{menu.nom_carte}</h1>
      <p>Produits</p>
      <ul>
      {menu.produits &&
            menu.produits.map((prod) => (
              <li key={prod.id}>
                <input
                  type="checkbox"
                  checked={checkboxState[prod.id] || false}
                  onChange={handleCheckboxChange(prod)}
                 
                />
                {prod.nom_produit} -
                {prod.description} - 
                {getCategorieNom(prod.categorie_id)} -
                {prod.prixTTC} €
              </li>
            ))}
            <br></br>
          <br></br>
        <li>
          <QRCode url="https://lebocal.academy" />
        </li>
      </ul>
    </div>
  );
}


export default Carte;

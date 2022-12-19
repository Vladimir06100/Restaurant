import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cartes_props(props) {
  const [listproduits, setListproduits] = useState([]);
  useEffect(() => {
    props.listproduits.filter((e) => e.id === props.produit_id);
    setListproduits(listproduits);
  }, []);

  return (
    <div>
      Nom Carte : {props.nom_carte}
      <br />
      <br />
      Produits :
      {props.listproduits.map(function (produit) {
        return (
          <li className="ACommenter">
            {produit.id}-{produit.nom_produit}-{produit.description}
          </li>
        );
      })}
     <button>
		<Link to={"/carte/" + props.id}>Voir la carte</Link>
		</button> 
      <br />
    </div>
  );
}
export default Cartes_props;

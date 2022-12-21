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
      Carte: {props.nom_carte}
      <br />
     <button>
		<Link to={"/carte/" + props.id}>Voir la carte</Link>
		</button> 
      <br />
    </div>
  );
}
export default Cartes_props;

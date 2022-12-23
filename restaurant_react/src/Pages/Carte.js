import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Qrcode from "../Components/Qrcode/Qrcode";

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

      setMenu(data);
    } catch (e) {
      console.log(e, "e");
    }
  };
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <h1>{menu.nom_carte}</h1>

      <p>Produits</p>
      <ul>
        {menu.produits &&
          menu.produits.map((prod) => (
            <li>  
              {prod.id}
              {prod.nom_produit} - - {prod.categorie} -{prod.description}
            </li>
          ))}
          <br></br>
          <br></br>
        <li>
          <Qrcode />
        </li>
      </ul>
    </div>
  );
}

export default Carte;

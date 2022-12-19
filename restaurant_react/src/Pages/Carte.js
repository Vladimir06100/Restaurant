import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Carte() {
  const [menu, setMenu] = useState({});
  const [produitsMenu, setProduitsMenu] = useState([]);

  const { id } = useParams();

  const getMenu = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/cartes/" + id,
        options
      );
      const data = await response.json();
  

      if (response.status !== 200) {
        throw new Error(data);
      }

      setMenu(data);
    } catch (e) {
      console.log(e);
    }
    
    setProduitsMenu(produitsMenu);
  };
console.log(menu, 'ok');
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <h1>{menu.nom_carte}</h1>

      <p>Produits</p>
      <ul>
        <li>....</li>
      </ul>
    </div>
  );
}

export default Carte;

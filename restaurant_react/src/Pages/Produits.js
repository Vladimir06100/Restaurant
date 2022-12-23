import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import "../Styles/Produits.css";
import Produit from "../Props/Produits_props";

function Produits() {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);

  function calculTTC() {
    const prixHT = document.querySelector("#prixHT").value;
    const TVA = document.querySelector("#TVA").value;
    const calcTTC = prixHT * (1 + TVA / 100);
    const TTC = calcTTC.toFixed(2);
    document.querySelector("#TTC").value = TTC;
  }

  async function destroy(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    let response = await fetch(
      "http://localhost:8000/api/produits/" + id,
      options
    );
    if (response.status !== 200) {
      return alert("Une erreur est survenue");
    }
    getProduits();
    alert("Produit supprimé");
  }

  async function getProduits() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    let response = await fetch("http://localhost:8000/api/produits", options);
    const data = await response.json();
    const produits = data.produits;
    const categories = data.categories;
    setCategories(categories);
    setProduits(produits, categories);
  }

  async function update(produit) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nom_produit: produit.nom_produit,
        categorie_id: produit.categorie_id,
        description: produit.description,
        prixHT: produit.prixHT,
        TVA: produit.TVA,
        prixTTC: produit.prixTTC,
        quantite: produit.quantite,
      }),
    };
    let response = await fetch(
      "http://localhost:8000/api/produits/update" + produit.id,
      options
    );
    if (response.status !== 200) {
      return alert("Une erreur est survenue");
    }
    const data = await response.json();
    const updatedProduit = data.produit;
    const updatedCategorie = data.categorie;
    setProduits([updatedProduit, ...produits, updatedCategorie, ...categories]);
    alert("Produit modifié");
  }


  async function createProduit(nom_produit, categorie_id, description, prixHT, TVA, prixTTC, quantite) {
    const restaurateur_id = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({
        nom_produit: nom_produit,
        categorie_id: categorie_id,
        description: description,
        prixHT: prixHT,
        TVA: TVA,
        prixTTC: prixTTC,
        quantite: quantite,
        restaurateur_id: restaurateur_id,
      }),
    };
    let response = await fetch('http://localhost:8000/api/produits', options);
    if (response.status !== 200) {
      return alert('Une erreur est survenue');
    }
   // const data = await response.json();
  //  const newProduit = data.produit;
   // setProduits([newProduit, ...produits]);
    getProduits();
  }

  const produitList = produits.map((produit, index) => {
    return (
      <Produit
        key={index}
        nom_produit={produit.nom_produit}
        categorie_id={produit.type}
        description={produit.description}
        prixHT={produit.prixHT}
        TVA={produit.TVA}
        prixTTC={produit.prixTTC}
        quantite={produit.quantite}
        destroy={destroy}
        update={update}
        id={produit.id}
      />
    );
  });

  useEffect(() => {
    getProduits();
  }, []);

  return (
    <div>
      <Menu />
      <div className="product_position">
        <div className="productPositionBis">
          <div className="product_title">
            <span>
              Add your <br />
              <span id="home_title_color">product</span>
            </span>
            <div className="restaurant_text">
              <p>
                Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis
                ratione qui sunt nulla eum adipisci corporis a rerum voluptas et
                doloremque nisi qui velit eligendi? Aut voluptatibus consequatur
                non laboriosam maxime ut ducimus dicta. Est quam asperiores aut
                ducimus veniam nam numquam necessitatibus ut consequatur quaerat
                qui fuga optio aut nihil laboriosam.
              </p>
            </div>
          </div>
          <div className="produits">
            <form
              method="POST"
              action=""
              id="formProduits"
              onSubmit={(event) => {
                event.preventDefault();
                const nom_produit = event.target.nom_produit.value;
                const categorie_id = event.target.categorie_id.value;
                const description = event.target.description.value;
                const prixHT = event.target.prixHT.value;
                const TVA = event.target.TVA.value;
                const prixTTC = event.target.prixTTC.value;
                const quantite = event.target.quantite.value;
                createProduit(
                  nom_produit,
                  categorie_id,
                  description,
                  prixHT,
                  TVA,
                  prixTTC,
                  quantite
                );
              }}
            >
              <label htmlFor="nom_produit">Nom</label>
              <input
                type="text"
                id="nom_produit"
                name="nom_produit"
                placeholder="Nom du produit"
                required
              />
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description du produit"
                required
              />
              <label htmlFor="prixHT">Prix HT</label>
              <input
                type="text"
                id="prixHT"
                name="prixHT"
                placeholder="Prix du produit"
                required
              />
              <div className="tvaPosition">
                <label htmlFor="TVA">TVA</label>
                <select id="TVA" name="TVA" required>
                  <option disabled>Choisir une TVA</option>
                  <option value="0">0%</option>
                  <option value="5.5">5.5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                </select>
                <button type="button" id="btn-calcul" onClick={calculTTC}>
                  Calculer
                </button>
              </div>
              <label htmlFor="TTC">TTC</label>
              <input
                type="text"
                id="TTC"
                name="prixTTC"
                placeholder="Clique sur Calculer pour savoir le prix avec TTC"
              />
              <div className="categoriePosition">
                <label htmlFor="categorie_id">Catégorie </label>
                <select id="categorie_id" name="categorie_id" defaultValue={'DEFAULT'} required>
                  <option value="DEFAULT" disabled>Choisir une catégorie</option>
                  <option value='1'>Entrée</option>
                  <option value='2'>Plat</option>
                  <option value='3'>Dessert</option>
                  <option value='4'>Boisson</option>
                </select>
              </div>
              <label htmlFor="quantite">Quantité</label>
              <input type="number" id="quantite" name="quantite" min="1" max="10000000" placeholder="Quantité du produit" required />
              <button type="submit" id="ajoutProduct">AJOUTER</button>
            </form>
          </div>
        </div>
      </div>
      <div className="position-result">
        <div className="product-box-taille">
          <div className="resultPositionBis">
            <div className="product_title">
              <span id="product_result_title_color">Products list</span>
            </div>
            <div className="product-list-result">
              {produitList}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Produits;

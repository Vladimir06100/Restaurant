import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import '../Styles/Produits.css';
import Produit from '../Props/Produits_props';

function Produits() {

    // function calcul tva sur onClick

    function tva() {
        // calcul TCC plus remplir le champ prixTTC

    }


    const [categories, setCategories] = useState([]);

    async function getProduits() {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('restaurateur_id'),
            },
        };
        let response = await fetch('http://localhost:8000/api/produits', options);
        const data = await response.json();
        const categories = data.categories;
        setCategories(categories);
    }
    useEffect(() => {
        getProduits();
    }, []);

    async function createProduit(nom_produit, categorie_id, description, prixHT, TVA, prixTTC, quantite) {
        const restaurateur_id = localStorage.getItem('restaurateur_id');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + restaurateur_id,
            },
            body: JSON.stringify({
                nom_produit: nom_produit,
                categorie_id: categorie_id,
                description: description,
                prixHT: prixHT,
                TVA: TVA,
                prixTTC: prixTTC,
                quantite: quantite,

            }),
        };
        let response = await fetch('http://localhost:8000/api/produits', options);
        if (response.status !== 200) {
            return;
        }
        getProduits();
        document.getElementById("form_position").reset();
    }

    return (
        <div>
            <Menu />
            <div className="product_position">
                <div className="product_title">
                    <span>
                        Add your <br /><span id="home_title_color">product</span>
                    </span>
                    <div className="restaurant_text">
                        <p>Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.</p>
                    </div>
                </div>
                <div className="produits">
                    <form method="POST" action="" id="form_position" onSubmit={(event) => {
                        event.preventDefault();
                        const nom_produit = event.target.nom_produit.value;
                        const categorie_id = event.target.categorie_id.value;
                        const description = event.target.description.value;
                        const prixHT = event.target.prixHT.value;
                        const TVA = event.target.TVA.value;
                        const prixTTC = event.target.prixTTC.value;
                        const quantite = event.target.quantite.value;
                        createProduit(nom_produit, categorie_id, description, prixHT, TVA, prixTTC, quantite);
                    }}>
                        <label htmlFor="nom_produit">Nom</label>
                        <input type="text" id="nom_produit" name="nom_produit" placeholder="Nom du produit" required />
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" placeholder="Description du produit" required />
                        <label htmlFor="prixHT">Prix HT</label>
                        <input type="text" id="prixHT" name="prixHT" placeholder="Prix du produit" required />
                        <label htmlFor="TVA">TVA</label>
                        <br />
                        <select id="TVA" name="TVA" defaultValue={'DEFAULT'} required>
                            <option value="DEFAULT" disabled>Choisir une TVA</option>
                            <option value='0' onClick={tva}>0</option>
                            <option value='5.5' onClick={tva}>5.5</option>
                            <option value='10' onClick={tva}>10</option>
                            <option value='20' onClick={tva}>20</option>
                        </select>
                        <br />

                        <label htmlFor="prixTTC">Prix TTC</label>
                        {/* set prix TTC */}

                        <input type="text" id="prixTTC" name="prixTTC" placeholder="Prix TTC du produit" required />
                        <label htmlFor="categorie_id">Catégorie </label>
                        <br />
                        <select id="categorie_id" name="categorie_id" defaultValue={'DEFAULT'} required>
                            <option value="DEFAULT" disabled>Choisir une catégorie</option>
                            <option value='1'>Entrée</option>
                            <option value='2'>Plat</option>
                            <option value='3'>Dessert</option>
                            <option value='4'>Boisson</option>
                        </select>
                        <br />
                        <label htmlFor="quantite"  >Quantité</label>
                        <input type="number" id="quantite" name="quantite" min="1" max="10000000" placeholder="Quantité du produit" required />
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </div>
            <div className="product_position">
                <div className="product_title">
                    <span id="home_title_color">Products list</span>
                </div>
                <div className="produits">
                    {categories.map((categorie, index) => (
                        <Produit key={index}
                            nom_produit={categorie.nom_produit}
                            type={categorie.type}
                            description={categorie.description}
                            prixHT={categorie.prixHT}
                            TVA={categorie.TVA}
                            prixTTC={categorie.prixTTC}
                            quantite={categorie.quantite}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Produits;
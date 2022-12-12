import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Produits.css';
import { useEffect, useState } from 'react';


function Produits() {
    // creation new produit
    const [produits, setProduits] = useState([]);

    async function getProduits() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch('http://localhost:8000/api/produits', options);
        const data = await response.json();
        console.log(data);
        const produits = data.produits;
        setProduits(produits);
    }

    useEffect(() => {
        console.log('useEffect');
        getProduits();
    }
        , []);
    
    async function createProduit(nom_produit, categorie, prixTTC, quantite) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom_produit: nom_produit,
                categorie: categorie,
                prixTTC: prixTTC,
                quantite: quantite,
            }),
        };
        let response = await fetch('http://localhost:8000/api/produits', options);

        if (response.status !== 201) {
            return;
        }
        const data = await response.json();
        const newProduit = data.produit;
        setProduits([newProduit, ...produits]);
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
                    const categorie = event.target.categorie.value;
                    const prix = event.target.prix.value;
                    const quantite = event.target.quantite.value;
                    createProduit(nom_produit, categorie,  prix, quantite);
                }}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom_produit" placeholder="Nom du produit" required />
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Description du produit" required />
                    <label htmlFor="prix">Prix</label>
                    <input type="text" id="prix" name="prixTTC" placeholder="Prix du produit" required />
                    <label htmlFor="categorie">Catégorie </label>
                    <select id="categorie" name="category" required>
                        <option selected>Choisir une catégorie</option>
                        <option value=''>Entrée</option>
                        <option value=''>Plat</option>
                        <option value=''>Dessert</option>
                    </select>
                    <label htmlFor="quantite">Quantité </label>
                    <input type="number" id="quantite" name="quantite" min="1" max="100" />
                    <button type="submit" id="submitProduct" value="Ajouter"> Ajouter </button>
                </form>
            </div>
        </div>
        {/* résultat produit du bd */}
        <div className="product_position">
            <div className="product_title">
                <span id="home_title_color">Products list</span>
            </div>
            <div className="produits">
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits.map((produit) => (
                            <tr key={produit.id}>
                                <td>{produit.nom_produit}</td>
                                <td>{produit.categorie_id}</td>
                                <td>{produit.prixTTC}</td>
                                <td>{produit.quantite}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        <Footer />
    </div>
)
}

export default Produits;
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
    
    async function createProduit(nom, description, prix, category, quantite) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: nom,
                description: description,
                prix: prix,
                category: category,
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
                    const nom = event.target.nom.value;
                    const description = event.target.description.value;
                    const prix = event.target.prix.value;
                    const category = event.target.category.value;
                    const quantite = event.target.quantite.value;
                    createProduit(nom, description, prix, category, quantite);
                }}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Nom du produit" required />
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Description du produit" required />
                    <label htmlFor="prix">Prix</label>
                    <input type="text" id="prix" name="prix" placeholder="Prix du produit" required />
                    <label htmlFor="categorie">Catégorie </label>
                    <select id="categorie" name="category">
                        <option>Entrée</option>
                        <option>Plat</option>
                        <option>Dessert</option>
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
                            <th>Description</th>
                            <th>Prix</th>
                            <th>Catégorie</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits.map((produit) => (
                            <tr key={produit.id}>
                                <td>{produit.nom}</td>
                                <td>{produit.description}</td>
                                <td>{produit.prix}</td>
                                <td>{produit.category}</td>
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
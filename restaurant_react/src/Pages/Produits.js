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

                <div class="signup">
                    <h2>Sign Up</h2>
                    <h3>It's quick & simple</h3>
                    <form class="form">
                        <div class="textbox">
                            <input type="text" required />
                            <label>Name</label>
                            <span class="material-symbols-outlined"> account_circle </span>
                        </div>
                        <div class="textbox">
                            <input type="text" required />
                            <label>Email</label>
                            <span class="material-symbols-outlined"> email </span>
                        </div>
                        <div class="textbox">
                            <input type="password" required />
                            <label>Password</label>
                            <span class="material-symbols-outlined"> key </span>
                        </div>
                        <p>
                            Signed up already?
                            <a href="#">Login here</a>
                        </p>

                        <button type="submit">
                            Join The Elitists
                            <span class="material-symbols-outlined"> arrow_forward </span>
                        </button>
                    </form>
                </div>

                {/* <div className="produits">
                    <form method="POST" action="" id="form_position">
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
                            <option>Déssert</option>
                        </select>

                        <label htmlFor="quantite">Quantité </label>
                        <input type="number" id="quantite" name="quantite"
                            min="1" max="100" />

                        <label htmlFor="file">Choose a profile picture:</label>
                        <input type="file"
                            id="file" name="fichier"
                            accept="image/png, image/jpeg" />

                        <button type="submit" id="submitProduct" value="Ajouter"> Ajouter </button>
                    </form>
                </div> */}
            </div>
            <Footer />
        </div>
    
    </div>
    )
}

export default Produits;
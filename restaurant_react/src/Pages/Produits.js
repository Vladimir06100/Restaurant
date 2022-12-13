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
//categorie_id,
    async function createProduit(nom_produit, description, prixHT, prixTTC,TVA, quantite) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                nom_produit: nom_produit,
                // categorie_id: categorie_id,
                description: description,
                prixHT: prixHT,
                prixTTC: prixTTC,
                TVA: TVA,
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
                        // const categorie_id = event.target.categorie_id.value;
                        const description = event.target.description.value;
                        const prixHT = event.target.prixHT.value;
                        const prixTTC = event.target.prixTTC.value;
                        const TVA = event.target.TVA.value;
                        const quantite = event.target.quantite.value;
                        //categorie_id,
                        createProduit(nom_produit, description, prixHT,prixTTC, TVA, quantite);
                    }}>
                        <label htmlFor="nom_produit">Nom</label>
                        <input type="text" id="nom_produit" name="nom_produit" placeholder="Nom du produit" required />
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" placeholder="Description du produit" required />
                        <label htmlFor="prixHT">Prix HT</label>
                        <input type="text" id="prixHT" name="prixHT" placeholder="Prix du produit" required />
                        <label htmlFor="TVA">TVA</label>
                        <select id="TVA" name="TVA" defaultValue={'DEFAULT'} required>
                            <option  value="DEFAULT" disabled>Choisir une TVA</option>
                            <option value='0'>0%</option>
                            <option value='5.5'>5.5%</option>
                            <option value='10'>10%</option>
                            <option value='20'>20%</option>
                        </select>
                        <label htmlFor="prixTTC">Prix TTC</label>
                        <input type="text" id="prixTTC" name="prixTTC" placeholder="Prix du produit" required />
                        {/* <label htmlFor="categorie_id">Catégorie </label>
                        <select id="categorie_id" name="categorie_id" defaultValue={'DEFAULT'} required>
                            <option value="DEFAULT" disabled>Choisir une catégorie</option>
                            <option value='1'>Entrée</option>
                            <option value='2'>Plat</option>
                            <option value='3'>Dessert</option>
                        </select> */}
                        <label htmlFor="quantite">Quantité</label>
                        <input type="number" id="quantite" name="quantite" min="1" max="10000" required/>
                        <button type="submit">Ajouter</button>
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
                                <th>Description</th>
                                <th>PrixHT</th>
                                <th>TVA</th>
                                <th>PrixTTC</th>
                                <th>Quantité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produits.map((produit) => (
                                <tr key={produit.id}>
                                    <td>{produit.nom_produit}</td>
                                    <td>{produit.categorie_id}</td>
                                    <td>{produit.description}</td>
                                    <td>{produit.prixHT}</td>
                                    <td>{produit.TVA}</td>
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
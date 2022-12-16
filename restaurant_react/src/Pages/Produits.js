import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import '../Styles/Produits.css';
import Produit from '../Props/Produits_props';

function Produits() {


    const [categories, setCategories] = useState([]);

    // fetch('http://localhost:8000/api/produits', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Autorization': 'Bearer ' + localStorage.getItem('ID'),
    //     },
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json()
    //         } else {
    //             return Promise.reject('something went wrong!')
                //ErrorException: Attempt to read property "id" on null in file /Users/vladimirsinkevitch/Desktop/Developpeur/Restaurant/restaurant_laravel/app/Http/Controllers/ProduitController.php on line 21

    //         }
    //     })
    //     .then(data => console.log('data is', data))
    //     .catch(error => console.log('error is', error));

    
    async function getProduits() {


        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch('http://localhost:8000/api/produits', options);
        const data = await response.json();
        const categories = data.categories;
        setCategories(categories);
    
    }

    //Illuminate\Database\QueryException: SQLSTATE[42S22]: Column not found: 1054 Unknown column 'produits.categories_id' in 'on clause'(SQL: select * from`categories` left join`produits` on`categories`.`id` = `produits`.`categories_id`) in file / Users / vladimirsinkevitch / Desktop / Developpeur / Restaurant / restaurant_laravel / vendor / laravel / framework / src / Illuminate / Database / Connection.php on line 760

    useEffect(() => {
        getProduits();
    }, []);

    async function createProduit(nom_produit, categorie_id, description, prixHT, TVA, prixTTC, quantite) {
        const restaurateur_id = localStorage.getItem('ID');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
            return;
        }
        const data = await response.json();
        const newCategorie = data.produit;
        setCategories([newCategorie, ...categories]);
        getProduits();
        document.getElementById("form_position").reset();
    }

    return (
        <div>
            <Menu />
            <div className="product_position">
                <div className="productPositionBis">
                    <div className="product_title">
                        <span>
                            Add your <br /><span id="home_title_color">product</span>
                        </span>
                        <div className="restaurant_text">
                            <p>Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.</p>
                        </div>
                    </div>
                    <div className="produits">
                        <form method="POST" action="" id="formProduits" onSubmit={(event) => {
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

                            <div className="tvaPosition">
                                <label htmlFor="TVA">TVA</label>
                                <select id="TVA" name="TVA" defaultValue={'DEFAULT'} required>
                                    <option value="DEFAULT" disabled>Choisir une TVA</option>
                                    <option value='0'>0</option>
                                    <option value='5.5'>5.5</option>
                                    <option value='10'>10</option>
                                    <option value='20'>20</option>
                                </select>
                            </div>

                            <label htmlFor="prixTTC">Prix TTC</label>
                            <input type="text" id="prixTTC" name="prixTTC" placeholder="Prix du produit" required />

                            <div className="categoriePosition">
                                <label htmlFor="categorie_id">Catégorie </label>
                                <select id="categorie_id" name="categorie_id" defaultValue={'DEFAULT'} required>
                                    <option value="DEFAULT" disabled>Choisir une catégorie</option>
                                    <option value='1'>Entrée</option>
                                    <option value='2'>Plat</option>
                                    <option value='3'>Dessert</option>
                                </select>
                            </div>

                            <label htmlFor="quantite"  >Quantité</label>
                            <input type="number" id="quantite" name="quantite" min="1" max="10000000" placeholder="Quantité du produit" required />
                            <button type="submit" id="ajoutProduct">AJOUTER</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="product_position result">
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
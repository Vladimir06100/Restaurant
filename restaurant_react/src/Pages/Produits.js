import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Produits.css';

function Produits() {
    return (
        <div>
            <Menu />
            <h1>Produits</h1>

            <div className="product_position">
                <div className="home_title">
                    <span>
                        Add your <br /><span id="home_title_color">product</span>
                    </span>

                    <div className="restaurant_text">
                        <p>
                            Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
                        </p>
                    </div>
                </div>

                <div className="produits">
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

                        <input type="submit" value="Ajouter" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Produits;
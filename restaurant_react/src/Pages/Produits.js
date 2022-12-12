import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
//import './Produits.css';

function Produits() {
    return (
        <div>
            <Menu />
            <h1>Produits</h1>

            <div>
                <div className="produits">
                    <form>
                        <label htmlfor="nom">Nom</label>
                        <input type="text" id="nom" name="nom" placeholder="Nom du produit" required />

                        <label htmlfor="description">Description</label>
                        <input type="text" id="description" name="description" placeholder="Description du produit" required />

                        <label htmlfor="prix">Prix</label>
                        <input type="text" id="prix" name="prix" placeholder="Prix du produit" required />

                        <label htmlfor="categorie">Catégorie </label>
                        <select id="categorie" name="category">
                            <option>Entrée</option>
                            <option>Plat</option>
                            <option>Déssert</option>
                        </select>

                        <label for="avatar">Choose a profile picture:</label>
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
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
// import ''./Cartes.css';

function Cartes() {
    return (
        <div>
            <Menu />
            <h1>Cartes</h1>

            <div>
                <form action="">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="produit">Produit</label>
                    <select id="produit" name="produit">
                        <option>test</option>
                    </select>

                    <button type="submit">Ajouter</button>
                    <button type="submit">Modifier</button>
                    <button type="submit">Supprimé</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Cartes;
import '../Styles/Menu.css';
import logo from '../Images/logo.png';

function Menu() {
    return (
        <div>
            <div className="navbar_logo">
                <img src={logo} alt='logo' />
            </div>
            <nav className="navbar">
                <a href="/">HOME </a>

                <a href="/restaurant">AJOUTER UN RESTAURANT </a>

                <a href="/produits">PRODUIT </a>

                <a href="/cartes">Cartes </a>

                <span id="navbar_style">
                    <a href="/connexion">CONNEXION </a>
                </span>

                <span id="navbar_style">
                    <a href="/inscription">INSCRIPTION </a>
                </span>

            </nav>

        </div>
    )
}

export default Menu; 
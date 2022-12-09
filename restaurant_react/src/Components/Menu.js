import '../Styles/Menu.css';
import logo from '../Images/logo.png';

function Menu() {
    return (
        <div>
            <div class="navbar_logo">
                <img src={logo} alt='logo' />
            </div>
            <nav class="navbar">
                <ul id="navabar_text">
                    <a href="/">HOME </a>
                    <a href="/restaurant">AJOUTER UN RESTAURANT </a>
                    <a href="/">AJOUTER UN PRODUIT </a>
                    <a href="/">VOS CARTES </a>
                    <span id="navbar_style">
                        <a href="/connexion">CONNEXION </a>
                    </span>
                    <span id="navbar_style">
                        <a href="/inscription">INSCRIPTION </a>
                    </span>
                </ul>
            </nav>

        </div>
    )
}

export default Menu; 
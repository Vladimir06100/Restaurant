import '../Styles/Menu.css';
import logo from '../Images/logo.png';

function Menu() {
    return (
        <div>
            <div className="navbar_logo">
                <img src={logo} alt='logo' />
            </div>
<<<<<<< HEAD
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
=======
            <nav className="navbar">
                <ul>
                    <li id="">
                        <a href="/">Home </a>
                    </li>

                    <li>
                        <a href="/">About </a>
                    </li>

                    <li>
                        <a href="/">Contact </a>
                    </li>

                    <li id="navbar_style">
                        <a href="/connexion">Connexion </a>
                    </li>

                    <li id="navbar_style">
                        <a href="/inscription">Inscription </a>
                    </li>

>>>>>>> main
                </ul>
            </nav>

        </div>
    )
}

export default Menu; 
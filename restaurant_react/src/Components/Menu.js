import '../Styles/Menu.css';
import logo from '../Images/logo.png';

function Menu() {
    return (
        <div>
            <div className="navbar_logo">
                <img src={logo} alt='logo' />
            </div>
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

                </ul>
            </nav>

        </div>
    )
}

export default Menu; 
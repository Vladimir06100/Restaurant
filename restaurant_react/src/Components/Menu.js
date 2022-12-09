import '../Styles/Menu.css';
import logo from '../Images/logo.png';

function Menu() {
    return (
        <div>
            <div class="navbar_logo">
                <img src={logo} alt='logo' />
            </div>
            <nav class="navbar">
                <ul>
                    <il id="">
                        <a href="/">Home </a>
                    </il>

                    <il>
                        <a href="/">About </a>
                    </il>

                    <il>
                        <a href="/">Contact </a>
                    </il>

                    <il id="navbar_style">
                        <a href="/connexion">Connexion </a>
                    </il>

                    <il id="navbar_style">
                        <a href="/inscription">Inscription </a>
                    </il>

                </ul>
            </nav>

        </div>
    )
}

export default Menu; 
import '../Styles/Menu.css';
import { useState } from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function Menu() {
    /*action ouverture et fermeture du menu burger, svp pas toucher*/
    const toggleMenuOpen = () => document.body.classList.toggle("open");
    const toggleMenuClose = () => document.body.classList.toggle("close");
    /*idem et pas fini*/
    const [isOpen, setIsOpen] = useState(false);
    // function close() {
    //     document.body.classList.toggle("close");
    // }

    const [connecte, setConnecte] = useState(localStorage.getItem('token') !== null);
    function handleLoginClick() {
        setConnecte(!connecte);
    }

    return (
        <div>

            <nav className="navbar">
                <div className="navbar-overlay" onclick="toggleMenuOpen()"></div>

                {/* <button type="button" className="navbar-burger" onClick={toggleMenuOpen}>
                    <span className="material-symbols-outlined">menu</span>
                </button> */}

                {isOpen ?
                    <button type="button" className="navbar-burger-close" onClick={toggleMenuClose}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                    : <button type="button" className="navbar-burger" onClick={toggleMenuOpen}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                }

                <div className="navbar-menu">

                    <li className="link"><a href="/">HOME </a></li>
                    {connecte &&
                        <>
                            <li className="link"><a href="/creation/restaurant">AJOUTER UN RESTAURANT </a></li>
                            <li className="link"><a href="/restaurants">MES RESTAURANTS </a></li>
                            <li className="link"><a href="/produits">PRODUIT </a></li>
                        <li className="link"><a href="/cartes">CARTES </a></li>
                        <li className="link"><a href="/formules">FORMULES</a></li>
                        </>
                    }
                    <li>
                        <span className="navbar_style">
                            <LoginButton connecte={connecte} onClick={handleLoginClick} />
                        </span>
                        <span className="navbar_style">
                            <RegisterButton connecte={connecte} onClick={handleLoginClick} />
                        </span>
                    </li>

                </div>

            </nav>

        </div>
    );

}

export default Menu;
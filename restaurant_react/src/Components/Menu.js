import '../Styles/Menu.css';
import { useState, useEffect } from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function Menu() {
    const toggleMenuOpen = () => document.body.classList.toggle("open");

    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => console.log(isOpen, "isopen"), [isOpen]);

  const [connecte, setConnecte] = useState(
    localStorage.getItem("token") !== null
  );

  function handleLoginClick() {
    setConnecte(!connecte);
  }

    const toggleMenuClose = () => document.body.classList.toggle("close");

    function close() {
        document.body.classList.toggle("close");
    }


    return (
        <div>

            <nav class="navbar">
                <div class="navbar-overlay" onclick="toggleMenuOpen()"></div>

                <button type="button" class="navbar-burger" onClick={toggleMenuOpen}>
                    <span class="material-symbols-outlined">menu</span>
                </button>

                {isOpen ?
                    <button type="button" class="navbar-burger-close" onClick={toggleMenuClose}>
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>
                    : <button type="button" class="navbar-burger" onClick={toggleMenuOpen}>
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                }

                <nav class="navbar-menu">

                    <li className="link"><a href="/">HOME </a></li>
                    {connecte &&
                        <>
                            <li className="link"><a href="/creation/restaurant">AJOUTER UN RESTAURANT </a></li>
                            <li className="link"><a href="/restaurants">MES RESTAURANTS </a></li>
                            <li className="link"><a href="/produits">PRODUIT </a></li>
                            <li className="link"><a href="/cartes">CARTES </a></li>
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

                </nav>

            </nav>

        </div>
    );

}

export default Menu;






{/* <section className="MainMenu">

                <nav className="navbar">
                    <ul className="links desktop-size">
                        <li className="link"><a href="/">HOME </a></li>
                        {connecte &&
                            <>
                                <li className="link"><a href="/creation/restaurant">AJOUTER UN RESTAURANT </a></li>
                                <li className="link"><a href="/restaurants">MES RESTAURANTS </a></li>
                                <li className="link"><a href="/produits">PRODUIT </a></li>
                                <li className="link"><a href="/cartes">CARTES </a></li>
                            </>
                        }
                        <li>
                            <span>
                                <LoginButton connecte={connecte} onClick={handleLoginClick} />
                            </span>
                            <span>
                                <RegisterButton connecte={connecte} onClick={handleLoginClick} />
                            </span>
                        </li>
                    </ul>
                </nav>

            </section> */}
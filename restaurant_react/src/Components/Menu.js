import logo from '../Images/logo.png';
import '../Styles/Menu.css';
import { useState, useEffect } from 'react';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log("isopen", isOpen)
    }, [isOpen]
    );

    return (
        <div>
            <section className="MainMenu">
                <div className="logoMenu">
                    <img src={logo} alt='logo' />
                </div>

                <nav className="navbar">
                    <ul className="links desktop-size">
                        <li className="link"><a href="/">HOME </a></li>
                        <li className="link"><a href="/restaurant">AJOUTER UN RESTAURANT </a></li>
                        <li className="link"><a href="/produits">PRODUIT </a></li>
                        <li className="link"><a href="/cartes">Cartes </a></li>
                    </ul>
                </nav>

                {/* rend le menu en burger */}
                <div className="navMenu">
                    {isOpen ?
                        <ul className="links mobile-size" onClick={() => setIsOpen(false)}>
                            <i class='bx bx-x menu'></i>

                            <div className="navLinksBurger">
                                <ul>
                                    <li className="link"><a href="/">HOME </a></li>
                                    <li className="link"><a href="/restaurant">AJOUTER UN RESTAURANT </a></li>
                                    <li className="link"><a href="/produits">PRODUIT </a></li>
                                    <li className="link"><a href="/cartes">Cartes </a></li>
                                </ul>
                            </div>
                        </ul> :

                        <a id="openButton" onClick={() => setIsOpen(true)}>
                            <i class='bx bx-menu-alt-right menu'></i>
                        </a>
                    }
                </div>

            </section>
        </div>


        // <div>
        //     <div className="navigation_espace">
        //         <div className="navbar_logo">
        //             <img src={logo} alt='logo' />
        //         </div>

        //         <nav className="navbar">
        //             <div className="navLinks">
        //                 <ul>
        //                     <li><a href="/">HOME </a></li>
        //                     <li><a href="/restaurant">AJOUTER UN RESTAURANT </a></li>
        //                     <li><a href="/produits">PRODUIT </a></li>
        //                     <li><a href="/cartes">Cartes </a></li>
        //                     <li>
        //                         <span id="navbar_style">
        //                             <a href="/connexion">CONNEXION </a>
        //                         </span>
        //                     </li>
        //                     <li>
        //                         <span id="navbar_style">
        //                             <a href="/inscription">INSCRIPTION </a>
        //                         </span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>

        //         {/* rend le menu en burger pour les portables */}
        //         <div className="navMenu">
        //             {isOpen ?
        //                 <a id="closeButton" onClick={() => setIsOpen(false)}>
        //                     <span className="material-symbols-outlined">
        //                         close
        //                     </span>

        //                     <div className="navLinksBurger">
        //                         <ul>
        //                             <li><a href="/">HOME </a></li>
        //                             <li><a href="/restaurant">AJOUTER UN RESTAURANT </a></li>
        //                             <li><a href="/produits">PRODUIT </a></li>
        //                             <li><a href="/cartes">Cartes </a></li>
        //                             <li>
        //                                 <span id="navbar_style">
        //                                     <a href="/connexion">CONNEXION </a>
        //                                 </span>
        //                             </li>
        //                             <li>
        //                                 <span id="navbar_style">
        //                                     <a href="/inscription">INSCRIPTION </a>
        //                                 </span>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </a> :

        //                 <a id="openButton" onClick={() => setIsOpen(true)}>
        //                     <span className="material-symbols-outlined">
        //                         menu
        //                     </span>

        //                 </a>
        //             }
        //         </div>
        //     </div>
        // </div>
    )
}

export default Menu;

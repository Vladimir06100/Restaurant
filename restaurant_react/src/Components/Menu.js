import "../Styles/Menu.css";
import { useState } from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const [connecte, setConnecte] = useState(
    localStorage.getItem("token") !== null
  );

  function handleLoginClick() {
    setConnecte(!connecte);
  }

  // useEffect(() => {
  //     console.log("isopen", isOpen)
  // }, [isOpen]
  // );

  return (
    <div>
      <section className="MainMenu">
        {/* <div className="logoMenu">
                    <img src={logo} alt='logo' />
                </div> */}

        <nav className="navbar">
          <ul className="links desktop-size">
            <li className="link">
              <a href="/">HOME </a>
            </li>
            {connecte && (
              <>
                <li className="link">
                  <a href="/creation/restaurant">AJOUTER UN RESTAURANT </a>
                </li>
                <li className="link">
                  <a href="/restaurants">MES RESTAURANTS </a>
                </li>
                <li className="link">
                  <a href="/produits">PRODUIT </a>
                </li>
                <li className="link">
                  <a href="/cartes">CARTES </a>
                </li>
              </>
            )}
            <li>
              <span>
                <LoginButton connecte={connecte} onClick={handleLoginClick} />
              </span>
              <span>
                <RegisterButton
                  connecte={connecte}
                  onClick={handleLoginClick}
                />
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Menu;

// const [isOpen, setIsOpen] = useState(false);

// useEffect(() => {
//     console.log("isopen", isOpen)
// }, [isOpen]
// );

// return (
//     <div>
//         <section className="MainMenu">
//             <div className="logoMenu">
//                 <img src={logo} alt='logo' />
//             </div>

//             <nav className="navbar">
//                 <ul className="links desktop-size">
//                     <li className="link"><a href="/">HOME </a></li>
//                     <li className="link"><a href="/creation/restaurant">AJOUTER UN RESTAURANT </a></li>
//                     <li className="link"><a href="/restaurants">MES RESTAURANTS </a></li>
//                     <li className="link"><a href="/produits">PRODUIT </a></li>
//                     <li className="link"><a href="/cartes">CARTES </a></li>
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
//             </nav>

//             <div className="navMenu">
//                 {isOpen ?
//                     <ul className="links mobile-size" onClick={() => setIsOpen(false)}>
//                         <i className='bx bx-x menu'></i>

//                         <div className="navLinksBurger">
//                             <ul>
//                                 <li className="link"><a href="/">HOME </a></li>
//                                 <li className="link"><a href="/restaurant">AJOUTER UN RESTAURANT </a></li>
//                                 <li className="link"><a href="/produits">PRODUITS </a></li>
//                                 <li className="link"><a href="/cartes">CARTES </a></li>
//                                 <li>
//                                     <span id="navbar_style">
//                                         <a href="/connexion">CONNEXION </a>
//                                     </span>
//                                 </li>
//                                 <li>
//                                     <span id="navbar_style">
//                                         <a href="/inscription">INSCRIPTION </a>
//                                     </span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </ul> :

//                     <a id="openButton" onClick={() => setIsOpen(true)}>
//                         <i className='bx bx-menu-alt-right menu'></i>
//                     </a>
//                 }
//             </div>

//         </section>
//     </div>

import React from "react";
import "../Styles/Menu.css";

function LoginButton(props) {

  function logout() {
    localStorage.clear();
    alert("Vous êtes déconnecté !");
  }

  return (
    <button onClick={props.onClick} className="btnLog">
      {props.connecte ? (
        <a id="navbar_style" className="log" href="/connexion" onClick={logout}>
          DECONNEXION
        </a>
      ) : (
        <a id="navbar_style" className="log" href="/">
          CONNEXION
        </a>
      )}
    </button>
  );
}

export default LoginButton;

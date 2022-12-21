import React from 'react';
import '../Styles/Menu.css';

function LoginButton(props) {
    console.log(props.connecte)
    function logout() {
        localStorage.removeItem('token');
    }
    return (
        <button onClick={props.onClick} className="btnLog">
            { props.connecte ? <a id="navbar_style" className="log" href="/connexion" onClick={logout}>DECONNEXION</a> : <a id="navbar_style" className="log" href="/">CONNEXION</a> }
        </button>
    );
}

export default LoginButton;
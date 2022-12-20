import React from 'react';
import '../Styles/Menu.css';

function LoginButton(props) {
    console.log(props.connecte)
    function logout() {
        localStorage.removeItem('token');
    }
    return (
        <button onClick={props.onClick} id="navbar_style" className="log">
            { props.connecte ? <a href="/connexion" onClick={logout}>DECONNEXION</a> : <a href="/">CONNEXION</a> }
        </button>
    );
}

export default LoginButton;
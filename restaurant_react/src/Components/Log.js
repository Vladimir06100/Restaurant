import React from 'react';
import '../Styles/Log.css';

function LoginButton(props) {

    function logout() {
        localStorage.removeItem('token');
    }
    return (
        <button onClick={props.onClick} className="log">
            { props.connecte ? <a href="/connexion">CONNEXION</a> : <a href="/connexion" onClick={logout}>DECONNEXION</a> }
        </button>
    );
}

export default LoginButton;
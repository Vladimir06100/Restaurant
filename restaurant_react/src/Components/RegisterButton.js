import React from 'react';
import '../Styles/Menu.css';

function RegisterButton(props) {
    console.log(props.connecte)
    function logout() {
        localStorage.removeItem('token');
    }
    return (
        <button onClick={props.onClick} id="navbar_style" className="log">
            { props.connecte ?  'RED BOULE' : <a href="/inscription" onClick={logout}>INSCRIPTION</a> }
        </button>
    );
}

export default RegisterButton;
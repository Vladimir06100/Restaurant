import React from 'react';
import '../Styles/Menu.css';

function RegisterButton(props) {

    function user() {

    }

    return (
        <button onClick={props.onClick} className="btnLog">
            { props.connecte ? <a id="navbar_style" className="log" href="/inscription" onClick={user}>RED BOULE</a> : <a id="navbar_style" className="log" href="/">INSCRIPTION</a> }
        </button>
    );
}

export default RegisterButton;
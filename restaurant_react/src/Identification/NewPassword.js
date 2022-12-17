import Menu from '../Components/Menu';
import { useState } from "react";
import '../Styles/NewPassword.css';

function NewPassword() {
    //Création d'une variable contenant un objet avec les données de l'utilistateur
    const [restaurateur, setrestaurateur] = useState({ password: "" });
    const [email, setEmail] = useState({ email: "" });

    /**
     * Création de la fonction async pour modifier les données utilisateur connecté
     */
    async function Modifier(){

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const token = urlParams.get('token');

        const optionsModif = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `bearer ${token}`
            },

            body: JSON.stringify ({
                token,
                email: restaurateur.email,
                password: restaurateur.password
            }),
        }

        const response = await fetch("http://127.0.0.1:8000/api/reset-password", optionsModif);

        const data = await response.json();
        const newMember = data.success;

        console.log('Mot de passe modifié');
        alert("Mot de passe modifié");

        if ( newMember === true ) {
            alert("Clasheur modifié");
        }
    }

    /**
     * Création d'une fonction qui va permettre d'écouter un event. On pourra changer la valeur des inputs
     * @param {*} e 
     */
    function emailChange(e){
        e.preventDefault();
        setEmail({//MAJ de la variable restaurateur
            ...email, //permet de décomposer l'objet pour modifier la propriété password
            email: e.target.value
        });
    }

    function passwordChange(e){
        e.preventDefault();
        setrestaurateur({//MAJ de la variable restaurateur
            ...restaurateur, //permet de décomposer l'objet pour modifier la propriété password
            password: e.target.value
        });
    }

    /**
     * Création d'une fonction qui va permettre d'écouter un event. Au click sur le bouton modifier la function modifier sera appeler
     * @param {} e 
     */
    function submitInfo(e){
        Modifier();
    }

    return (
        <div>
            <Menu />

            <div className="info">

                <label id="inputProfilText" htmlFor="email">Renseigner votre email</label>
                <input id="inputProfilStyle"
                    name="email" 
                    value={email.email}
                    onChange={emailChange}
                />

                <label id="inputProfilText2" htmlFor="password">Renseigner votre nouveau mot de passe</label>
                <input id="inputProfilStyle2"
                    type="password"
                    name="password" 
                    value={restaurateur.password}
                    onChange={passwordChange}
                />

            </div>
            <button id="buttonProfil" onClick={submitInfo}>Confirmer</button>
        </div>
    )
}

export default NewPassword;
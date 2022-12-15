import Menu from '../Components/Menu';
import { useState, useEffect } from "react";
import '../Styles/Maj.css';

function Maj() {
    //Création d'une variable contenant un objet avec les données de l'utilistateur
    const [restaurateur, setRestaurateur] = useState({ email: "" });

    /**
     * Création de la fonction async pour modifier les données utilisateur connecté
     */
    async function Modifier(){
        let token = JSON.parse(localStorage.getItem("token"));

        const optionsModif = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },

            body: JSON.stringify ({
                email: restaurateur.email
            }),
        }

        const response = await fetch("http://127.0.0.1:8000/api/forgot-password", optionsModif);

        const data = await response.json();
        const newMember = data.success;

        console.log('email envoyé');
        alert("email envoyé");

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
        setRestaurateur({//MAJ de la variable restaurateur
            ...restaurateur, //permet de décomposer l'objet pour modifier la propriété email
            email: e.target.value
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

                <label id="inputProfilText" htmlFor="email">Renseigner votre email :</label>
                <input id="inputProfilStyle"
                    name="email" 
                    value={restaurateur.email}
                    onChange={emailChange}
                />

            </div>
            <button id="buttonProfil" onClick={submitInfo}>Confirmer</button>
        </div>
    )
}

export default Maj;
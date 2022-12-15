import Menu from '../Components/Menu';
import { useState, useEffect } from "react";
import '../Styles/Maj.css';

function Maj() {
    //Création d'une variable contenant un objet avec les données de l’utilisateur
    const [restaurateur, setRestaurateur] = useState({ password: "" });

    /**
     * Création d'une fonction async avec une method get pour récupérer les données de l'utilisateur connecté
     */
    async function getInfo() {
        // On récupéré le token enregistré préalablement dans le localStorage
        let token = JSON.parse(localStorage.getItem("token"));

        const optionsInfo = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }

        const responseInfo = await fetch("http://127.0.0.1:8000/api/restaurateurs/login", optionsInfo);

        const dataInfo = await responseInfo.json();

        //On récupère les données qui vont nous servir
        const password = dataInfo.password;

        //Mise à jour de la variable restaurateur avec sa fonction setrestaurateur, les propriétés prennent la valeur des données
        setRestaurateur({password: password})
    }

    useEffect(()=>{getInfo()},[])

    /**
     * Création de la fonction async pour modifier les données utilisateur connecté
     */
    async function Modifier(){
        let token = JSON.parse(localStorage.getItem("token"));

        const optionsModif = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },

            body: JSON.stringify ({
                password: restaurateur.password
            }),
        }

        const response = await fetch("http://127.0.0.1:8000/api/restaurateurs/login", optionsModif);

        const data = await response.json();
        const newMember = data.success;

        if ( newMember === true ) {
            alert("Compte modifié");
        }
    }

    /**
     * Création d'une fonction qui va permettre d'écouter un event. On pourra changer la valeur des inputs
     * @param {*} e 
     */
    function passwordChange(e){
        e.preventDefault();
        setRestaurateur({//MAJ de la variable password
            ...restaurateur, //permet de décomposer l'objet pour modifier la propriété email
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
                <label id="inputProfilText" htmlFor="password">Nouveau mot de passe</label>
                <input id="inputProfilStyle"
                    type="password"
                    name="password" 
                    value={restaurateur.password}
                    onChange={passwordChange}
                />

            </div>
            <button id="buttonProfil" onClick={submitInfo}>Modifier</button>
        </div>
    )
}

export default Maj;
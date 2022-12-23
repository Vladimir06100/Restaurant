import Menu from '../Components/Menu';
import { useState } from "react";
import '../Styles/PasswordResetLink.css';

function PasswordResetLink() {
    const [restaurateur, setRestaurateur] = useState({ email: "" });

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
        alert("Email envoyé");
        if ( newMember === true ) {
            alert("Utilisateur modifié");
        }
    }

    function emailChange(e){
        e.preventDefault();
        setRestaurateur({
            ...restaurateur,
            email: e.target.value
        });
    }

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
                    value={restaurateur.email}
                    onChange={emailChange}
                />
            </div>
            <button id="buttonProfil" onClick={submitInfo}>Confirmer</button>
        </div>
    )
}

export default PasswordResetLink;
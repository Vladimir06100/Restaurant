import Menu from '../Components/Menu';
import '../Styles/Connexion.css';
import Footer from '../Components/Footer';
import header_img from '../Images/header_login.png';
import '../Styles/Home.css';
import { useState } from 'react';

function Connexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    function submit(e) {
        e.preventDefault();
        connect();
    }

    async function connect() {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        const response = await fetch(`http://localhost:8000/api/restaurateurs/login`, options);
        const data = await response.json();
        console.log("Data : ", data);
        const token = data.token;
        const success = data.success;

        if (success === false) {
            alert("Veuillez remplir tous les champs de connexion.");
        }
        if (success === true) {
            alert("Vous êtes connecté");
        }
        console.log("Token : ", token);
        localStorage.setItem("token", JSON.stringify(token));
        getID();
    }

    async function getID() {
        let token = JSON.parse(localStorage.getItem("token"));
        const optionsID = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }

        const response = await fetch(`http://localhost:8000/api/restaurateurs/login`, optionsID);
        const dataID = await response.json();
        const ID = dataID._id;
        localStorage.setItem("userID", JSON.stringify(ID));
        console.log("Key user : ", ID);
    }

    return (
        <div>
            <Menu />
            <div className='connexion_title'>
                <span>
                    Connectez-vous pour <br /><span id="home_title_color">accéder</span> à votre compte
                </span>
            </div>
            <div className='connexion_position'>

                <div >
                    <img id="imgco" src={header_img} alt='img' />
                </div>

                <div>
                    <form method="POST" action="" id="form_position" onSubmit={submit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <span>MOT DE PASSE OUBLIÉ ?</span>

                        <input id="submitCo" type="submit" value="Login" disabled={!validateForm()} />

                        <span>VOUS N'AVEZ PAS DE COMPTE ? INSCRIPTION</span>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Connexion;
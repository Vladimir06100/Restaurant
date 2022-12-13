import Menu from '../Components/Menu';
import header_register from '../Images/header_register.png';
import Footer from '../Components/Footer';
import { useState } from 'react';
import '../Styles/Inscription.css';


function Inscription() {
    const [nom, setNom] = useState ("");
    const [prenom, setPrenom] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nom, prenom, email, password);
        addUser();
    }

    async function addUser() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ 
                nom: nom,
                prenom: prenom,
                email: email,
                password: password
            }),
        };

        const response = await fetch(`http://127.0.0.1:8000/api/restaurateurs/register`, options);
        const data = await response.json();
        const message = data.message;
        
        if (message === 'Restaurateur created.') {
            alert('Votre compte a bien été créé !')
        }
        if (message !== 'Restaurateur created.') {
            alert('Champs manquants.')
        }

        console.log('création de compte : ', data);
    }

    return (
        <div>
            <Menu />
            <h1>Inscription</h1>
            <div className="register_position">

                <div>
                    <img src={header_register} alt="header_register" />
                </div>

                <div>
                    <form id="register_form" onSubmit={handleSubmit}>

                        <div className="textRegister">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" required />
                            <span className="material-symbols-outlined">
                                person
                            </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" id="firstname" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prénom" required />
                            <span className="material-symbols-outlined">
                                person
                            </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Votre email" required />
                            <span className="material-symbols-outlined"> email </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" placeholder="Votre mot de passe" required />
                            <span className="material-symbols-outlined">
                                key
                            </span>
                        </div>

                        <button type="submit" id="submit" onClick={handleSubmit}>S'inscrire</button>

                        <span>Vous avez déjà un compte ?</span>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Inscription;
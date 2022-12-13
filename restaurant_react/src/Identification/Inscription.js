import Menu from '../Components/Menu';
import header_register from '../Images/header_register.png';
import Footer from '../Components/Footer';
import { useState } from 'react';
import '../Styles/Inscription.css';


function Inscription() {
    const [nom, setNom] = useState ('');
    const [prenom, setPrenom] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const { id, value } = e.target;
        if (id === 'nom') {
            setNom(value);
        }
        if (id === 'prenom') {
            setPrenom(value);
        }
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nom, prenom, email, password);
        addUser();
    }

    async function addUser() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                firstname: prenom,
                lastname: nom,
                email: email,
                password: password
            })
        };

        const response = await fetch(`http://localhost:8000/api/restaurateurs/register`, options);
        const data = await response.json();
        console.log('data : ', data);
        // const message = data.message;

        // if (message === 'Firstname, lastname, email and password are required') {
        //     alert('Veuillez remplir tous les champs');
        // } else {
        //     alert('Votre compte a bien été créé !')
        // }
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
                        <label htmlFor="nom">Nom</label>
                        <input type="text" id="nom" onChange={handleChange} value={nom} placeholder="Nom" required />

                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" id="prenom" onChange={handleChange} value={prenom} placeholder="Prénom" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={handleChange} value={email} placeholder="Votre email" required />

                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" onChange={handleChange} value={password} placeholder="Votre mot de passe" required />

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
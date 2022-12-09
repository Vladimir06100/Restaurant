import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import { useState } from 'react';
// import''; ici css


function Inscription() {
    /** composant inscription qui va permettre de créer un compte
     * @returns un formulaire d'inscription
    */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    /**
     * fonction qui va permettre de récupérer les données du formulaire
     * @param {*} e  permet de récupérer les données du formulaire
    */

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password);
        addUser();
    }

    async function addUser() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        };

        let response = await fetch('http://localhost:8000/api/inscription', options);
        const data = await response.json();
        const message = data.message;

        if (message === 'email, password are required') {
            alert('Veuillez remplir tous les champs');
        } else if (message === 'email already exists') {
            alert('Cet email est déjà utilisé');
        } else if (message === 'user created') {
            alert('Votre compte a bien été créé');
        }
    }

    return (
        <div>
            <Menu />
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" id="email" onChange={handleChange} name="email" placeholder="Votre email" required />

                <label for="password">Mot de passe</label>
                <input type="password" id="password" onChange={handleChange} name="password" placeholder="Votre mot de passe" required />

                <button type="submit" id="submit" onClick={handleChange}>S'inscrire</button>

                <span>Vous avez déjà un compte ?</span>

            </form>
            <Footer />
        </div>
    )
}

export default Inscription;
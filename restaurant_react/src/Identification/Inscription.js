import Menu from '../Components/Menu';
import header_register from '../Images/header_register.png';
import Footer from '../Components/Footer';
import { useState } from 'react';
import '../Styles/Inscription.css';


function Inscription() {
    const [lastname, setLastName] = useState ('');
    const [firstname, setFirstName] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const { id, value } = e.target;
        if (id === 'lastname') {
            setLastName(value);
        }
        if (id === 'firstname') {
            setFirstName(value);
        }
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(lastname, firstname, email, password);
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
                lastname: lastname,
                firstname: firstname,
                email: email,
                password: password
            })
        };

        const response = await fetch(`http://localhost:8000/api/restaurateurs/register`, options);
        const data = await response.json();
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
                        <input type="text" id="nom" onChange={handleChange} placeholder="Nom" required />

                        <label htmlFor="prenom">Prenom</label>
                        <input type="text" id="prenom" onChange={handleChange} placeholder="Prénom" required />


                        <div className="textRegister">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" onChange={handleChange} name="name" placeholder="Votre nom" required />
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" id="firstname" onChange={handleChange} name="firstname" placeholder="Votre prénom" required />
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={handleChange} placeholder="Votre email" required />
                            <span className="material-symbols-outlined"> email </span>
                        </div>

                        <div className="textRegister">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" onChange={handleChange} name="password" placeholder="Votre mot de passe" required />
                            <span class="material-symbols-outlined">
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
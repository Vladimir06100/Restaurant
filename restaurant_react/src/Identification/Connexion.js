import Menu from '../Components/Menu';
import '../Styles/Connexion.css';
import Footer from '../Components/Footer';
import '../Styles/Home.css';


function Connexion() {
    return (
        <div>
            <Menu />
            <div class="connexion_title">
                <span>
                    Connectez-vous pour <br /><span id="home_title_color">accéder</span> à votre compte
                </span>
            </div>
            <div class="connexion_position">
                <form method="POST" action="" id="form_position">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" required />

                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="Votre mot de passe" required />

                    <button type="submit">Se Connecter</button>

                    <span>MOT DE PASSE OUBLIÉ ?</span>
                    <span>VOUS N'AVEZ PAS DE COMPTE ? INSCRIPTION</span>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Connexion;
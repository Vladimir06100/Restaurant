import Menu from "../Components/Menu";
import "../Styles/Connexion.css";
import Footer from "../Components/Footer";
import header_img from "../Images/header_login.png";
import "../Styles/Home.css";
import { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    connect();
  }

  async function connect() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const response = await fetch(
      `http://127.0.0.1:8000/api/restaurateurs/login`,
      options
    );
    const data = await response.json();
    const token = data.token;
    const message = data.message;
    const prenom = data.prenom;
    const role = data.role;

    if (message === "Connexion réussi.") {
      localStorage.setItem("token", token);
      localStorage.setItem("prenom", prenom);
      localStorage.setItem("role", role);
      alert("Vous êtes connecté");
      return (window.location.href = "/creation/restaurant");
    }
    if (message !== "Connexion réussi.") {
      alert("Email ou mot de passe incorrect !");
    }
  }

  return (
    <div>
      <Menu />
      <div className="connexion_position">
        <div className="connexionPositionBis">
          <div className="connexion_title">
            <span>
              Connectez-vous pour <br />
              <span id="home_title_color">accéder</span> à votre compte
            </span>
          </div>
          <div className="login">
            <form method="POST" action="" id="formConnexion" onSubmit={submit}>
              <div className="textbox connexion">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required
                />
                <span className="material-symbols-outlined">email</span>
              </div>
              <div className="textbox connexion">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
                <span className="material-symbols-outlined">key</span>
              </div>

              <p>
                <a href="/PasswordResetLink">Mot de passe oublié ?</a>
              </p>

              <button type="submit" id="submitLog" value="Login">
                Connexion
                <span className="material-symbols-outlined">
                  {" "}
                  arrow_forward{" "}
                </span>
              </button>

              <p>
                Vous n'avez pas de compte ?
                <a href="/inscription"> Inscrivez-vous</a>
              </p>
            </form>
          </div>
        </div>
        <img src={header_img} alt="header_img" className="imageLogin" />
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;

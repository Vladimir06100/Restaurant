import Menu from "../Components/Menu";
import header_register from "../Images/header_register.png";
import Footer from "../Components/Footer";
import { useState } from "react";
import "../Styles/Inscription.css";

function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nom, prenom, email, password, role);
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
        password: password,
        role: role,
      }),
    };

    const response = await fetch(
      `http://127.0.0.1:8000/api/restaurateurs/register`,
      options
    );

    const data = await response.json();
    const message = data.message;

    if (message === "Restaurateur created.") {
      alert("Votre compte a bien été créé !");
      return (window.location.href = "/connexion");
    }

    if (message !== "Restaurateur created.") {
      alert("Champs manquants.");
    }
  }

  return (
    <div>
      <Menu />
      <div className="register_position">
        <div className="registerPositionBis">
          <div className="register_title">
            <span>
              Inscrivez-vous et <br />
              <span id="home_title_color">rejoignez-nous</span> !
            </span>
          </div>

          <div className="register">
            <form id="register_form" onSubmit={handleSubmit}>
              <div className="textRegister">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre nom"
                  required
                />
                <span className="material-symbols-outlined">person</span>
              </div>

              <div className="textRegister">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  id="firstname"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Votre prénom"
                  required
                />
                <span className="material-symbols-outlined">person</span>
              </div>

              <div className="textRegister">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Votre email"
                  required
                />
                <span className="material-symbols-outlined"> email </span>
              </div>

              <div className="textRegister">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  placeholder="Votre mot de passe"
                  required
                />
                <span className="material-symbols-outlined">key</span>
              </div>

              <div className="textRegister">
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="-- Choose your role --">
                    -- Choose your role --
                  </option>
                  <option value="Standard">Standard</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <button type="submit" id="submitRegister" onClick={handleSubmit}>
                S'inscrire
              </button>

              <p>
                Déjà inscrit ? <a href="/connexion">Connectez-vous</a>
              </p>
            </form>
          </div>
        </div>

        <img id="registerImg" src={header_register} alt="header_register" />
      </div>
      <Footer />
    </div>
  );
}

export default Inscription;

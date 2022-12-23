import Menu from "../Components/Menu";
import { useState } from "react";
import "../Styles/NewPassword.css";

function NewPassword() {
  const [password, setPassword] = useState({ password: "" });
  const [email, setEmail] = useState({ email: "" });

  async function Modifier() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("token");

    const optionsModif = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({
        email: email.email,
        password: password.password,
      }),
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/reset-password",
      optionsModif
    );
    const data = await response.json();
    const newMember = data.success;
    alert("Mot de passe modifié");

    if (newMember === true) {
      alert("Compte modifié");
    }
  }

  function emailChange(e) {
    e.preventDefault();
    setEmail({
      ...email,
      email: e.target.value,
    });
  }

  function passwordChange(e) {
    e.preventDefault();
    setPassword({
      ...password,
      password: e.target.value,
    });
  }

  function submitInfo(e) {
    Modifier();
  }

  return (
    <div>
      <Menu />
      <div className="info">
        <label id="inputProfilText" htmlFor="email">
          Renseignez votre email
        </label>
        <input
          id="inputProfilStyle"
          name="email"
          value={email.email}
          onChange={emailChange}
        />
        <label id="inputProfilText2" htmlFor="password">
          Renseignez votre nouveau mot de passe
        </label>
        <input
          id="inputProfilStyle2"
          type="password"
          name="password"
          value={password.password}
          onChange={passwordChange}
        />
      </div>
      <button id="buttonProfil" onClick={submitInfo}>
        Confirmer
      </button>
    </div>
  );
}

export default NewPassword;

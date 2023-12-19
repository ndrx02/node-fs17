import { useState } from "react";
import { Link } from "react-router-dom";

import "./loginAndSignUp.css";
// Component login pronto, aspettiamo node.js
export function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="loginAndSignUpContainer">
      <div className="loginAndSignUp">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} action="">
          <input
            className="loginAndSignUp-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
          <input
            className="loginAndSignUp-input"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            //pattern per password, 1 carattere maiuscolo, miniscolo e un numero richiesto
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <button className="loginAndSignUp-button-login">Login</button>
          <Link to={"/signup"}>
            <h6>Non sei registrato?</h6>
          </Link>
        </form>
      </div>
    </div>
  );
}

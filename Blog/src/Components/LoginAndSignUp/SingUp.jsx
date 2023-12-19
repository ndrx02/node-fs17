import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginAndSignUp.css";

// Component login pronto, aspettiamo node.js
export function SignUp() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    job: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="loginAndSignUpContainer">
      <div className="loginAndSignUp">
        <h1>Sign-up</h1>
        <form onSubmit={handleSubmit} action="">
          <input
            className="loginAndSignUp-input"
            name="name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            type="text"
            placeholder="Name"
          />
          <input
            className="loginAndSignUp-input"
            name="surname"
            onChange={(e) => setData({ ...data, surname: e.target.value })}
            value={data.surname}
            type="text"
            placeholder="Surname"
          />
          <input
            className="loginAndSignUp-input"
            name="job"
            onChange={(e) => setData({ ...data, job: e.target.value })}
            value={data.job}
            type="text"
            placeholder="Job"
          />
          <input
            className="loginAndSignUp-input"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            type="email"
            placeholder="Email"
          />
          <input
            className="loginAndSignUp-input"
            name="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
            type="password"
            placeholder="Password"
            //pattern per password, 1 carattere maiuscolo, miniscolo e un numero richiesto
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <button className="loginAndSignUp-button-login">Sign Up</button>
          <Link to={"/login"}>
            <h6>Sei già registrato?</h6>
          </Link>
        </form>
      </div>
    </div>
  );
}

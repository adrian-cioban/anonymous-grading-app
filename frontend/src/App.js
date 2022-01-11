import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [numeReg, setNumeReg] = useState("");
  const [prenumeReg, setPrenumeReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [parolaReg, setParolaReg] = useState("");

  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/api/students", {
      nume: numeReg,
      prenume: prenumeReg,
      email: emailReg,
      parola: parolaReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:8080/api/students/login", {
      email: email,
      parola: parola,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Salut " + response.data.prenume);
      }
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Nume</label>
        <input
          type="text"
          onChange={(e) => {
            setNumeReg(e.target.value);
          }}
        />
        <label>Prenume</label>
        <input
          type="text"
          onChange={(e) => {
            setPrenumeReg(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Parola</label>
        <input
          type="text"
          onChange={(e) => {
            setParolaReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Parola..."
          onChange={(e) => {
            setParola(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;

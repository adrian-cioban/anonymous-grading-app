import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

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
    <div className="containerLogin">
      <div className="top-header">
        <h3>Welcome back</h3>
        <p>Enter your credentials to access your account</p>
      </div>
      <div className="user">
        <input
          className="loginInput"
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="pass">
        <input
          className="loginInput"
          type="password"
          placeholder="parola"
          onChange={(e) => {
            setParola(e.target.value);
          }}
        />
      </div>
      <div className="btn">
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Axios from "axios";
import "./Register.css";

const Register = () => {
  const [numeReg, setNumeReg] = useState("");
  const [prenumeReg, setPrenumeReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [parolaReg, setParolaReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/api/students", {
      nume: numeReg,
      prenume: prenumeReg,
      email: emailReg,
      parola: parolaReg,
    }).then((response) => {
      console.log(response.data);
      setNumeReg("");
      setPrenumeReg("");
      setEmailReg("");
      setParolaReg("");
    });
  };

  return (
    <div className="container">
      <div className="top-header">
        <h3>Register</h3>
        <p>Enter your details to create your account</p>
      </div>
      <div className="user">
        <input
          className="registerInput"
          placeholder="Nume"
          value={numeReg}
          type="text"
          onChange={(e) => {
            setNumeReg(e.target.value);
          }}
        />
      </div>
      <div className="user">
        <input
          className="registerInput"
          placeholder="Prenume"
          value={prenumeReg}
          type="text"
          onChange={(e) => {
            setPrenumeReg(e.target.value);
          }}
        />
      </div>
      <div className="user">
        <input
          className="registerInput"
          placeholder="Email"
          value={emailReg}
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
      </div>
      <div className="pass">
        <input
          className="registerInput"
          placeholder="Parola"
          value={parolaReg}
          type="password"
          onChange={(e) => {
            setParolaReg(e.target.value);
          }}
        />
      </div>
      <div className="btn">
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useNavigate } from "react-router";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <button id="news">News</button>
        </li>
        <li>
          <button id="contact">Contact</button>
        </li>
        <li className="right">
          <button
            id="login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </li>
        <li className="right">
          <button
            id="register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;

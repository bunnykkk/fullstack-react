import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();

  const navigate = useNavigate();

  function createUser() {
    if (!email || !password || !passwordConfirm || !username) {
      alert("You have empty inputs!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("email", email);
    register(formData, navigate);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4vmax",
        }}>
        <div className="regBlock">
          <h2 style={{ color: "white" }}>Register User</h2>
          <input
            type="email"
            placeholder="Email"
            className="inputReg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="inputReg"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="inputReg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password Confirm"
            className="inputReg"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button className="btnReg" onClick={createUser}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;

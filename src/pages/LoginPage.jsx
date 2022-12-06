import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  function loginUser() {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    login(formData, navigate, username);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4vmax",
        }}>
        <div className="logBlock">
          <h2 style={{ color: "white" }}>Login User</h2>
          <input
            type="text"
            placeholder="Username"
            className="inputLog"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Password"
            className="inputLog"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btnLog" onClick={loginUser}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

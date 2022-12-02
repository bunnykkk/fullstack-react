import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

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
      <h2>Register User</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password Confirm"
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <button onClick={createUser}>Register</button>
    </>
  );
};

export default RegistrationPage;

import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  const [eye, setEye] = useState(false);

  const handleLogin = () => {
    setAuth({
      login: true,
      register: false,
      reset: false,
    });
  };
  const handleRegister = () => {
    setAuth({
      login: false,
      register: true,
      reset: false,
    });
  };

  const handleReset = () => {
    setAuth({
      login: false,
      register: false,
      reset: true,
    });
  };

  const handleEye = () => {
    setEye(!eye);
  };

  return (
    <div className="  min-h-screen py-4 overflow-hidden bg-slate-700 text-slate-300 flex justify-center">
      {auth.login && <Login onRegister={handleRegister} onReset={handleReset} />}
      {auth.register && <Register onLogin={handleLogin} onEye={handleEye} eye={eye} />}
      {auth.reset && <Reset onLogin={handleLogin} />}
    </div>
  );
};

export default AuthContainer;

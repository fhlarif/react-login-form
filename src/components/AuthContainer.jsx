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

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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

  return (
    <div className="  min-h-screen py-4 overflow-hidden bg-slate-700 text-slate-300 flex justify-center">
      {auth.login && (
        <Login
          onRegister={handleRegister}
          onReset={handleReset}
          onShowPassword={showPassword}
          onTogglePassword={handleTogglePassword}
        />
      )}
      {auth.register && (
        <Register onLogin={handleLogin} onShowPassword={showPassword} onTogglePassword={handleTogglePassword} />
      )}
      {auth.reset && <Reset onLogin={handleLogin} />}
    </div>
  );
};

export default AuthContainer;

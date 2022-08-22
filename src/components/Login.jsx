import React from "react";

const Login = ({ onRegister, onReset }) => {
  return (
    <div className="grid lg:grid-cols-2   bg-slate-800 w-full mx-4  lg:my-24 p-10 rounded-3xl ">
      <div className=" animate-slidedown hidden lg:flex items-center justify-center bg-violet-900 m-10 rounded-2xl">
        <svg
          className="w-72 h-72"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
        </svg>
      </div>
      <div className="animate-slideup text-gray-900 flex-col flex justify-center">
        <h1 className="text-4xl text-amber-500 my-5 text-center">Login</h1>
        <div className="mb-6 flex flex-col">
          <label htmlFor="username" className="label">
            User Name
          </label>
          <input type="text" id="username" className="input" placeholder="fath@990" required />
        </div>
        <div className="mb-12 flex flex-col">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" placeholder="****" id="password" className="input" required />
        </div>

        <button type="button" className="login-button">
          Login
        </button>
        <div className="mt-12 flex flex-col gap-5 text-lg tracking-wider text-gray-100 ">
          <a href="#" rel="noopener noreferrer" onClick={onReset}>
            <p className="text-sky-500">Forgot Password</p>
          </a>
          <a href="#" rel="noopener noreferrer" onClick={onRegister}>
            <p>
              Don't have an account? <span className="text-sky-400">Register</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

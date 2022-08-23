import React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = ({ onLogin, onShowPassword, showPassword }) => {
  return (
    <div className="grid lg:grid-cols-2 relative bg-slate-800  w-full mx-4 lg:my-24 p-10 rounded-3xl ">
      <svg
        onClick={onLogin}
        className="border rounded-full border-red-300 p-2 cursor-pointer m-10 absolute w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <div className="animate-slideup text-gray-900 flex-col flex justify-center">
        <h1 className="text-4xl text-amber-500 my-5 text-center">Register</h1>
        <div className="mb-6 flex flex-col">
          <label htmlFor="username" className="label">
            User Name
          </label>
          <input type="text" id="username" className="input" placeholder="fath@990" required />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" placeholder="****" id="email" className="input" required />
        </div>
        <div className="mb-12 flex flex-col">
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="relative cursor-pointer">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="****"
              id="password"
              className="input "
              required
            />
            {showPassword ? (
              <HiEyeOff className="absolute text-white right-0 inset-y-0 mt-3 mr-4" onClick={onShowPassword} />
            ) : (
              <HiEye className="absolute text-white right-0 inset-y-0 mt-3 mr-4" onClick={onShowPassword} />
            )}
          </div>
        </div>
        <button type="button" className="login-button">
          Register
        </button>
        <div className="mt-3 flex flex-col gap-5 text-lg tracking-wider text-gray-100 ">
          <a href="#" rel="noopener noreferrer" onClick={onLogin}>
            <p>
              Already have an account? <span className="text-sky-400">Login</span>
            </p>
          </a>
        </div>
      </div>
      <div className=" animate-slidedown hidden lg:flex items-center justify-center bg-sky-900 m-10 rounded-2xl">
        <svg
          className=" w-72 h-72"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Register;

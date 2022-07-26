import React from "react";

const Reset = ({ onLogin }) => {
  return (
    <div className="grid lg:grid-cols-2  bg-slate-800 w-5/6 h-[45rem] mt-28 lg:mt-32 p-20 rounded-3xl relative ">
      <svg onClick={onLogin} className="border rounded-full border-red-300 p-2 cursor-pointer m-10 absolute w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      <div className="animate-slideup text-gray-900 flex-col flex justify-center">
        <h1 className="text-4xl text-amber-500 my-5 text-center">Reset Password</h1>
        <div className="mb-12 flex flex-col">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" placeholder="****" id="password" className="input" required />
        </div>
        <button type="button" className="login-button">Reset Password</button>
      </div>
      <div className=" animate-slidedown hidden lg:flex items-center justify-center bg-red-900 m-10 rounded-2xl">
        <svg className="w-56 h-56" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
    </div >
  );
};

export default Reset;

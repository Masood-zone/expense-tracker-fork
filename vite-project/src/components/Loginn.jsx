import React from "react";
import Google from "../assets/353423_google_logo_plus_icon.png";
import Facebook from "../assets/287739_facebook_icon.png";
import { Link, useNavigate } from "react-router-dom";

const Loginn = () => {
  const naviagate = useNavigate();
  const handleSubmit = () => {
    naviagate("/home");
  };
  return (
    <div className="flex  w-[100%] h-screen rounded-lg  ml-5  mt-5">
      <div
        className="w-[50%] h-screen bg-white
       items-center object-center text-center justify-center pt-24 text-black "
      >
        <h1 className="text-3xl font-bold">Sign in </h1>

        <div className="flex  justify-center items-center object-center  pt-6">
          <img
            src={Google}
            alt="googleicon"
            className="w-8 h-8  mx-5 bg-white rounded-full border border-black p-1"
          />
          <img
            src={Facebook}
            alt="facebookicon"
            className="w-8 h-8  mx-5 rounded-full border border-black p-1"
          />
        </div>
        <p className="p-3 text-slate-400 mt-3">or use your account details</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="p-3 text-slate-800 font-bold border rounded-full   bg-slate-200 w-80 h-10 mt-5"
            required
          />
          <input
            type="password"
            placeholder="password "
            name=""
            className="p-3 text-slate-800 font-bold border rounded-full   bg-slate-200 w-80 h-10 mt-5"
            required
          />
          <p className="text-lg text-slate-400 mt-10">Forgot Your Password </p>
          <button
            className="w-40 mt-2 h-10 rounded-full text-white font-bold text-lg  bg-red-500"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
      <div
        className="w-[50%] h-screen bg-red-500 top-0
       items-center object-center text-center justify-center pt-24 text-white "
      >
        <h1 className="text-4xl mt-32 font-bold"> Hello dear !</h1>
        <p className="m-auto text-lg mt-5 font-bold text-slate-300">
          Register now and have an amazing experience <br />
          with us{" "}
        </p>
        <button className="w-40 mt-5 h-10 rounded-full text-white font-bold text-lg border boreder-white">
          {" "}
          <Link to="/signup"> Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Loginn;

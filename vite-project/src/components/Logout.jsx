import React from "react";
import Log from "../assets/8725805_exit_icon.png";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="bg-red-100 border-8  border-white  w-[100%] h-screen rounded-lg  ml-5  mt-5 text-black    flex items-center text-center object-center mx-auto ">
      <div className="mx-auto justify-center  mt-5 items-center object-center text-center w-[40%] h-[60%] bg-white">
        <img src={Log} alt="" className="w-24  mt-10 h-24 mx-auto" />
        <h1 className="text-lg px-5 mt-5 pt-3"> oh no! You are leaving.....</h1>
        <p className="mx-auto my-2">Are You sure?</p>
        <button className="w-40 mt-2 p-2  h-10 rounded-full  text-lg bg-blue-300     ">
          <Link to="/"> No just kidding</Link>
        </button>
        <button className="w-40 mt-2  h-10 rounded-full  text-blue-400  border-sky-300 text-lg  border-2 ">
          <Link to="/loginn">Yes Log Me out</Link>
        </button>
      </div>
    </div>
  );
};

export default Logout;

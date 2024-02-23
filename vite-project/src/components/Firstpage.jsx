import React from "react";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <div className="border-white  w-[100%] h-screen rounded-lg  ml-5  mt-5 text-black bg-gradient-to-r from-slate-400 to-red-300 ">
      <nav className="justify-end">
        <ul className="flex justify-end mx-8 pt-2">
          <li className="mx-8">
            <button className="w-32 h-12 rounded-full border-double border-2 border-sky-400">
              <Link to="/loginn">login</Link>
            </button>
          </li>
          <li>
            <button className="w-32 h-12 bg-black text-white rounded-full">
              <Link to="/signup">Sign up</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="items-center justify-between content-center pt-40  text-center container mx-auto object-center">
        <h1 className="pt-32 font-bold text-3xl">
          WELCOME TO STUDENTS EXPENSES TRACKER
        </h1>
        <p className="p-4 text-lg">Know your daily Expenses 😊</p>
        <p></p>
      </div>

      <div className="flex">
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;

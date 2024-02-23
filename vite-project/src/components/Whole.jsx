import React from "react";
import { Link } from "react-router-dom";
import Smile from "../assets/pexels-george-milton-6954030 (2).jpg";

const Whole = () => {
  return (
    <div className="bg-slate-100 border-8  border-white  w-[100%] h-screen rounded-lg  ml-5  mt-5 text-black    flex">
      <div className="w-[50%] h-screen mt-40 ml-10">
        <h1 className="font-bold text-5xl justify-start  items-start  leading-12">
          Experience a <br />
          fresh way to <br />
          <span className="text-emerald-300 text-4xl ">manage your money</span>
        </h1>
        <p className=" text-sm  justify-start items-start mt-3">
          {" "}
          Start your journey now and you will never regret <br />
          it an amazing lifestyle Experience . You can not miss <br />
          now get started
        </p>
        <button className="w-32 h-12 bg-black text-white rounded-full mt-5">
          <Link to="./Expense"> Start now</Link>
        </button>
      </div>
      <div className="w-[50%] h-screen shadow-inner drop-shadow-2xl ">
        <img
          src={Smile}
          alt=""
          className="w-full h-screen drop-shadow-2xl shadow-inner"
        />
      </div>
    </div>
  );
};

export default Whole;

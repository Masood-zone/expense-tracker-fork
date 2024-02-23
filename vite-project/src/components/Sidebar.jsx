import React from "react";
import { Link } from "react-router-dom";
import Expenses from "../assets/11019415_wallet_accounting_expense_income_dollar_icon.png";
import Homme from "../assets/326656_home_icon.png";
import Dash from "../assets/9165749_dashboard_graph_icon.png";
import Log from "../assets/8725805_exit_icon.png";
import xxpense from "../assets/expenses-signing-report-icon-simple-style-2A3FTTJ-removebg-preview.png";
const Sidebar = () => {
  return (
    <div className="bg-pink-50 w-[22%] h-screen mt-5 rounded-lg border-8  border-white   pt-12 text-black">
      <div className="">
        <img src={xxpense} alt="" className=" w-14 h-16 " />
        <div className="ml-1 mt-2">
          <h1 className="text-lg  font-bold">Daily Expense tracker</h1>
          <a href="adwoaboakyewaaa1234@gmail.com" className="text-xs pr-2">
            adwoaboakyewaaa1234@gmail.com
          </a>
        </div>
      </div>
      <ul className="p-3  ml-5  mt-8 pl-2 ">
        <li className=" p-1 flex font-mono text-lg my-8">
          <img src={Homme} alt="" className=" w-8 h-8 " />
          <p className="text-lg pt-1 mx-1 pl-2">
            <Link to="/"> HOME</Link>
          </p>
        </li>
        <li className=" p-2 flex font-mono text-xl my-8">
          {" "}
          <img src={Dash} alt="" className=" w-8 h-8 " />{" "}
          <p className="text-lg pt-1 mx-1 pl-2">
            <Link to="/dashboard"> DASHBOARD</Link>
          </p>
        </li>
        <li className=" p-2 flex font-mono text-lg my-5">
          {" "}
          <img src={Expenses} alt="" className=" w-8 h-8 " />{" "}
          <p className="text-lg pt-1 mx-1 pl-2">
            {" "}
            <Link to="/expense"> EXPENSES</Link>
          </p>
        </li>
        <li className=" p-2 flex font-mono text-lg my-5">
          {" "}
          <img src={Log} alt="" className=" w-8 h-8 " />
          <p className="text-lg pt-1 mx-1 pl-2">
            <Link to="/logout"> LOG OUT</Link>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

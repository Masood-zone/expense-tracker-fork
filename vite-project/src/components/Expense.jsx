import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const Expense = () => {
  //Formik
  const formik = useFormik({
    initialValues: {
      itermName: "",
      quantity: "",
      amount: "",
    },
    onSubmit: (values, { resetForm }) => {
      const expense = {
        itermName: values.name,
        quantity: values.quantity,
        amount: values.amount,
        userId: "",
      };
      try {
        const response = axios.post(
          "https://studentexpenseapp2.onrender.com/api/expenses",
          expense
        );
        resetForm();

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-slate-100  flex bg-gradient-to-r from-slate-100 to-pink-100  pl-3 border-8  border-white  w-[100%] h-screen rounded-lg  ml-5  mt-5 text-black    ">
      <div className=" w-[50%] h-screen mt-10">
        <h2>Expenses</h2>
        <div>{/* api call to data of expenses vite */}</div>
      </div>
      <div className=" w-[50%] h-screen mt-32 items-center  text-center justify-between object-center content-centers">
        <h1 className="text-lg font-bold mx-auto  text-center">Add Expenses</h1>

        <form className="mt-3" onSubmit={formik.handleSubmit}>
          <select
            name="itermName"
            id="itermName"
            className="p-2 text-slate-600 border font-bold   bg-slate-300 w-80 h-10 mt-5 rounded-full"
          >
            <option value="">select item</option>
            <option value="Transport">Transport</option>
            <option value=" Food"> Food</option>
            <option value="Pen">Pen</option>
            <option value="Book">Book</option>
            <option value="Drink">Drink</option>
            <option value="Airtime">Airtime</option>
            <option value="Bundule">Bundule</option>
            <option value="Miscellaneous"> Miscellaneous</option>
          </select>

          <input
            type="number"
            placeholder="Amount of expense"
            className="p-2 text-slate-800  border   font-bold  bg-slate-200 w-80 h-10 mt-5 rounded-full"
            id="amount"
            name="amount"
            value={formik.number}
            onChange={formik.handleChange}
            required
          />
          <input
            type="quantity"
            placeholder="Quantity"
            className="p-2 text-slate-800  border   font-bold  bg-slate-200 w-80 h-10 mt-5 rounded-full"
            id="number"
            value={formik.number}
            onChange={formik.handleChange}
            required
          />

          <button
            type="submit"
            className="w-40 mt-5  h-10 rounded-full text-slate-300 font-bold text-lg  border-4 border-white"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Expense;

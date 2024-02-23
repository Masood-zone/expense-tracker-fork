import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import Welcome from "../assets/pexels-nataliya-vaitkevich-6863515.jpg";
import Create from "../assets/5340287_man_people_person_user_users_icon.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const userData = {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      };
      try {
        const response = axios.post(
          `https://studentexpenseapp2.onrender.com/api/user/signUp/`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
      resetForm();
    },
  });

  return (
    <div className="flex    w-[100%] h-screen rounded-lg  ml-5  mt-5">
      <div className="w-[50%] h-screen">
        <img src={Welcome} alt="sign up" className="w-full h-screen" />
      </div>
      <div
        className="w-[50%] h-screen  bg-white
       items-center object-center text-center justify-center pt-24 text-black"
      >
        <div className="flex  justify-center">
          <img
            src={Create}
            alt=""
            className="w-8 h-8  mx-2 bg-white  p-1 mt-5"
          />
          <h1 className="text-xl font-bold my-5 p-1">Create Your Account</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            className="p-3 text-800 slate- border  font-bold  bg-slate-200 w-80 h-10 mt-2 rounded-full"
            required
          />

          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="p-3 text-slate-800 border  font-bold bg-slate-200 w-80 h-10 mt-5 rounded-full"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="p-3 text-slate-800 font-bold border rounded-full   bg-slate-200 w-80 h-10 mt-5"
            required
          />
          <p className="text-lg text-red-600  mt-10">
            Have An Account?{" "}
            <Link to="/loginn" className="text-sky-500">
              {" "}
              Log in
            </Link>
          </p>

          <button
            type="submit"
            className="w-40 mt-5 h-10 rounded-full text-white font-bold text-lg  bg-red-500"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

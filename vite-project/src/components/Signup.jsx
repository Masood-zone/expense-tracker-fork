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
          `https://studentexpenseapp2.onrender.com/api/user/signUp/`,
          userData
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
    <div className="flex items-center justify-center">
      {/* Image section */}
      <div className="w-full h-screen max-md:hidden">
        <img src={Welcome} alt="sign up" className="w-full h-full" />
      </div>
      {/* Form and header */}
      <div
        className="flex flex-col
       items-center justify-center w-full pt-24 text-black"
      >
        {/* Header */}
        <div className="flex">
          <img src={Create} alt="" className="w-8 h-8" />
          <h1 className="text-xl font-bold">Create Your Account</h1>
        </div>
        {/* Form */}
        <div className="my-8">
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={formik.handleSubmit}
          >
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
    </div>
  );
};

export default Signup;

import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className=" flex bg-gradient-to-r from-purple-500 to-pink-500  pl-3">
      {/*navbar and the main page*/}
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Layout;

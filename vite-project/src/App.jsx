import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Loginn from "./components/Loginn";
import Firstpage from "./components/Firstpage";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Expense from "./components/Expense";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Firstpage />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Expense" element={<Expense />} />

            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Loginn" element={<Loginn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

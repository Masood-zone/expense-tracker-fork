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
            <Route path="/home" exact element={<Home />} />

            <Route path="/" exact element={<Firstpage />} />
            <Route path="/Logout" exact element={<Logout />} />
            <Route path="/Expense" exact element={<Expense />} />

            <Route path="/dashboard" exact element={<Dashboard />} />
          </Route>
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/Loginn" exact element={<Loginn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

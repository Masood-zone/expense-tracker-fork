import React from "react";
import { AppProvider } from "../Context/AppContext";
import Expense from "./Expense";

const Appexpenses = () => {
  return (
    <AppProvider>
      <Expense />
    </AppProvider>
  );
};

export default Appexpenses;

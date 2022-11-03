import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import Data from "./data";
import "./App.css";

const App = () => {
  const [currentExchangeRate, setCurrentExchangeRate] = useState("3");

  const handleExchangeRate = (e) => {
    setCurrentExchangeRate(e.target.value * 1.5);
  };

  const changeCurrency = () => {
    let result = document.getElementById("amount").value;
    result = result * 1.5;
    return result;
  };

  console.log(currentExchangeRate);
  return (
    <>
      <Currency
        currentExchangeRate={currentExchangeRate}
        Data={Data}
        handleExchangeRate={handleExchangeRate}
      />
    </>
  );
};

export default App;

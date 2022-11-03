import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import Data from "./data";
import "./App.css";

const App = () => {
  const [currentExchangeRate, setCurrentExchangeRate] = useState("0");

  const handleExchangeRate = (e) => {
    let rate = document.getElementById("rate").value;
    if (rate === "") {
      setCurrentExchangeRate("0");
    } else {
      setCurrentExchangeRate(e.target.value * rate);
    }
  };

  const changeCurrency = () => {
    document.getElementById("amount").value = "";
    document.getElementById("exchangeContainer").value = "";
  };

  return (
    <>
      <Currency
        currentExchangeRate={currentExchangeRate}
        // Data={Data}
        handleExchangeRate={handleExchangeRate}
        changeCurrency={changeCurrency}
      />
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Currency from "./Currency";
// import Data from "./data";
import "./App.css";

const App = () => {
  const [currentCurrency, setCurrentCurrency] = useState(
    {
      currency: "GBP",
      exchangeRate: "2",
    },
    {
      currency: "USD",
      exchangeRate: "1.15",
    },

    {
      currency: "CNY",
      exchangeRate: "25",
    },
    {
      currency: "Yen",
      exchangeRate: "1.2",
    },
    {
      currency: "RS",
      exchangeRate: "0.99",
    }
  );

  const [input, setInput] = useState(1);

  const [output, setOutput] = useState();

  // create a function that updates the stateOBJ input when the user inputs data in either field
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSelectOption = () => {};

  // function that gets triggered to run the caclulation and ouput it
  // look at input.selectedCurrency * input.toExchange
  // store that in a new state var
  const calculation = () => {
    setOutput(input * currentCurrency.exchangeRate);
  };

  //useEffect --->
  useEffect(() => {
    // this block of code will run when input is changed
    // calls the function that runs the caclulation
    calculation();
  }, [input]);

  return (
    <>
      <Currency
        currentCurrency={currentCurrency}
        exchangeRate={currentCurrency.exchangeRate}
        handleInput={handleInput}
        handleSelectOption={handleSelectOption}
        input={input}
        output={output}
      />
    </>
  );
};

export default App;

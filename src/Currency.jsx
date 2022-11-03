import React from "react";
import "./App.css";

const Currency = (props) => {
  return (
    <>
      <div id="container">
        <h1> Currency Converter </h1>
        {/* <ul> */}
        {/* {props.Data.map((item, index) => {
            return (
              <li key={index}>
                {item.currency} {item.exchangeRate}
              </li>
            );
          })} */}
        {/* </ul> */}
        <select onChange={props.handleExchangeRate} id="rate">
          <option value="1">GBP</option>
          <option value="1.15">USD</option>
          <option value="2">CNY</option>
          <option value="1.20">YEN</option>
          <option value="0.99">RS</option>
        </select>
        <input
          id="amount"
          onChange={props.handleExchangeRate}
          {...props.changeCurrency}
        />
        <div id="exchangeContainer">{props.currentExchangeRate}</div>
      </div>
    </>
  );
};

export default Currency;

import React, { useState } from "react";
import "./App.css";

const Currency = (props) => {
  console.log(props.exchangeRate);
  return (
    <>
      <div id="container">
        <h1> Currency Converter </h1>
        <select onSelect={props.handleSelectOption} id="rate">
          <option value="2">GBP</option>
          <option value="1.15">USD</option>
          <option value="1.2">CNY</option>
          <option value="1.5">YEN</option>
          <option value="0.99">RS</option>
        </select>
        <input id="amount" onChange={props.handleInput} />
        <div id="exchangeContainer">{props.output}</div>
      </div>
    </>
  );
};

export default Currency;

{
  /* <ul> */
}
{
  /* {props.Data.map((item, index) => {
            return (
              <li key={index}>
                {item.currency} {item.exchangeRate}
              </li>
            );
          })} */
}
{
  /* </ul> */
}

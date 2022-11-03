import React from "react";

const Currency = (props) => {
  console.log(props.currentExchangeRate);
  return (
    <>
      <ul>
        {props.Data.map((item, index) => {
          return (
            <li key={index}>
              {item.currency} {item.exchangeRate}
            </li>
          );
        })}
      </ul>
      <div>{props.currentExchangeRate}</div>
      <input id="amount" onChange={props.handleExchangeRate} />
    </>
  );
};

export default Currency;

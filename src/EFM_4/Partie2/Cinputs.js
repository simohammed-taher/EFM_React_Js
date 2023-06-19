import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./Action";

export default function Cinputs() {
  const dispatch = useDispatch();
  const [nb1, setNb1] = useState(0);
  const [nb2, setNb2] = useState(0);
  const addition = () => {
    dispatch(add(nb1, nb2));
  };
  const soustraction = () => {
    dispatch(add(nb1, nb2));
  };
  const multiply = () => {
    dispatch(add(nb1, nb2));
  };
  const divition = () => {
    dispatch(add(nb1, nb2));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number 1"
        value={nb1}
        onChange={setNb1((e) => e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter number 2"
        value={nb2}
        onChange={setNb2((e) => e.target.value)}
      ></input>
      <button onClick={addition}>+</button>
      <button onClick={soustraction}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divition}>/</button>
    </div>
  );
}

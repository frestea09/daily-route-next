"use client";
import React from "react";
import { useState } from "react";

export const BelajarState = () => {
  const [age, setNumber] = useState(0);
  const handlingValue = () => setNumber(age + 1);
  return (
    <>
      <p>Age : {age}</p>
      <button onClick={handlingValue}>Add Value</button>
    </>
  );
};

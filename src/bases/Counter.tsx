import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 4 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>CounterBy: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

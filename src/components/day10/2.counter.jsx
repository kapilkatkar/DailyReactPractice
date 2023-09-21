import { useState } from "react";

const CounterFun = () => {
  const [counter, setCounter] = useState(0);
  const onIncreament = () => {
    setCounter(counter + 2);
    // if (counter > 100) {
    //   const btnElem = document.getElementById("btn-increament");
    //   btnElem.disabled = true;
    // }
  };

  const onDecreament = () => {
    setCounter(counter - 2);
    // if (counter > 100) {
    //   document.getElementById("btn-decreament").disabled = true;
    // }
  };
  return (
    <div>
      <div>Counter :{counter}</div>
      <button
        id="btn-increament"
        onClick={onIncreament}
        disabled={counter >= 100}
      >
        Increament
      </button>
      <button
        id="btn-decreament"
        onClick={onDecreament}
        disabled={counter <= 0}
      >
        Decreament
      </button>
    </div>
  );
};

export default CounterFun;

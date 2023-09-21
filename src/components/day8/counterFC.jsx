import { useState } from "react";

const CounterFC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>InCrement</button>
      <button onClick={() => setCounter(counter - 1)}>DeCrement</button>

      <p>Counter: {counter}</p>
    </div>
  );
};

export default CounterFC;

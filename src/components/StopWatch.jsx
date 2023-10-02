import { useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(0);

  const onStartbtn = () => {
    setInterval(() => {
      const currentTime = new Date().getTime();
    }, 100);
  };
  const onStopbtn = () => {};
  return (
    <div>
      <p>StopWatch</p>
      <button onClick={onStartbtn}>Start</button>
      <button onClick={onStopbtn}>Stop</button>
    </div>
  );
};
export default StopWatch;

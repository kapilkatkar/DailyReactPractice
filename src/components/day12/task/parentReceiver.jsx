import { useState } from "react";
import ChildSender from "./childSender";

const ParentReceiver = () => {
  const [uInput, setUInput] = useState({ uName: "", uSurname: "" });

  const onUserInput = (value, name) => {
    setUInput({ ...uInput, [name]: value });
  };

  return (
    <div>
      <p>
        Welcome to the team {uInput.uName} {uInput.uSurname}!
      </p>
      <button>Click me</button>
      <ChildSender onUserInput={onUserInput}></ChildSender>
    </div>
  );
};
export default ParentReceiver;

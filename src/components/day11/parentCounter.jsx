import { useState } from "react";
import ChildCompo from "./childCounter";
const ParentCompo = () => {
  const [name, setName] = useState("");
  const nameInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <ChildCompo name={name}></ChildCompo>
      <input type="text" name="name" id="name" onKeyUp={nameInput} />
    </div>
  );
};

export default ParentCompo;

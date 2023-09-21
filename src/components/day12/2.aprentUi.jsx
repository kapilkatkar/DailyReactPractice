import { useState } from "react";
import ChildUI from "./1.chilsUI";

const ParentUI = () => {
  const [showMessange, setShowMessage] = useState(false);
  const toggleMessange = () => {
    setShowMessage(!showMessange);
  };
  return (
    <div>
      <>{showMessange ? <p>i am visible</p> : <p>i am not visible</p>}</>
      <ChildUI onToggle={toggleMessange}></ChildUI>
    </div>
  );
};
export default ParentUI;

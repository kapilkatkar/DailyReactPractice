import { useState } from "react";
import DialogBox from "./2.model";

const ParentForModel = () => {
  const [userInput, setUInput] = useState({ userName: "", userSurname: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div>
      <p>
        Welcome to the team {userInput.userName} {userInput.userSurname}!
      </p>
      <button onClick={openDialog}>Click me</button>
      <DialogBox isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};
export default ParentForModel;

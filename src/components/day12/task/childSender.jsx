// eslint-disable-next-line react/prop-types
const ChildSender = ({ onUserInput }) => {
  console.log({ onUserInput });
  return (
    <div>
      <input
        type="text"
        name="uName"
        placeholder="enter your name"
        onChange={(e) =>
          onUserInput(e.target.value.toUpperCase(), e.target.name)
        }
      />
      <input
        type="text"
        name="uSurname"
        placeholder="enter your surname"
        onChange={(e) =>
          onUserInput(e.target.value.toUpperCase(), e.target.name)
        }
      />
    </div>
  );
};
export default ChildSender;

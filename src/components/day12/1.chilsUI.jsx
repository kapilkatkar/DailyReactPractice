/* eslint-disable react/prop-types */
const ChildUI = (props) => {
  console.log(props);
  return (
    <div>
      <p>i am a child component</p>
      <button onClick={props.onToggle}>toggle button</button>
    </div>
  );
};
export default ChildUI;

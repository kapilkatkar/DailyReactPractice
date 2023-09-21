import { useEffect, useState } from "react";

const SearchExample = () => {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    console.log("Search value changed", search);
  }, [search]);

  useEffect(() => {
    console.log("Search value changed", counter);
  }, [counter]);

  return (
    <div>
      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
      </div>
    </div>
  );
};
export default SearchExample;

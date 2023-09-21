import { useEffect, useState } from "react";

const APIWithUseEffect = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    fetch(`https://api.github.com/users/${search}`)
      .then((data) => data.json())
      .then((data) => console.log("data: ", data))
      .catch((err) => console.log("err: ", err));
  }, [search]);

  return (
    <div>
      <p>Searching for {search}</p>
      <input
        type="searc"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default APIWithUseEffect;

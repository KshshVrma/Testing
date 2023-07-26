import { useState } from "react";

const One = ({ f }) => {
  const [two, setTwo] = useState("");
  const wow = (event) => {
    setTwo(event.target.value);
    f(two);
  };

  return (
    <div>
      <input type="text" onChange={wow}></input>
    </div>
  );
};
export default One;

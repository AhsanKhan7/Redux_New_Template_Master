import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectName, setName } from "./nameSlice";

function Name() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const handleClick = () => {
    dispatch(setName(input));
  };

  return (
    <div>
      <h1>my name</h1>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
      />
      <button disabled={!input.trim()} onClick={handleClick}>
        Update my name state
      </button>
      <h1> Name is {name}</h1>
    </div>
  );
}

export default Name;

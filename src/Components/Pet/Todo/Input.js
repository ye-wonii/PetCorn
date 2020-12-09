import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Input;

import React from "react";

const TodoItem = ({ id, text, date, is_checked }) => {
  return (
    <div>
      <div>{text}</div>
      <div>{date} 까지</div>
      <div onClick={handleCheck}>
        <span>{is_checked ? "✅" : "⬛"}</span>
      </div>
    </div>
  );
};

export default TodoItem;

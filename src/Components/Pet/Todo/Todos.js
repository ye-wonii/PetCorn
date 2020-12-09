import React, { useState } from "react";
import Input from "./Input";

const Todos = () => {
  const [todoList, setList] = useState({ id: 1, text: "asdasdas" });
  return (
    <div>
      <div>
        <span>⏰ 일정관리</span>
      </div>
      <div>ㅁㄴㅇㅁㄴㅇㄴ</div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Todos;

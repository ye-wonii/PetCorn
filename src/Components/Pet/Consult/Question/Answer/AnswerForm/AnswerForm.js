import Axios from "axios";
import React, { useState } from "react";

const AnswerForm = ({ id, handleEnrollAnswer }) => {
  const [input, onChange] = useState("");
  const formCheck = () => {
    if (input) {
      handleEnrollAnswer(id, input);
      onChange("");
    } else {
      alert("답변을 입력하세요");
    }
  };
  const handleEnroll = (id) => (id) => handleEnrollAnswer(id, input);
  return (
    <div>
      <div>답변하기</div>
      <div>
        <textarea
          rows="20"
          cols="50"
          value={input}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={formCheck}>등록</button>
      </div>
    </div>
  );
};

export default AnswerForm;

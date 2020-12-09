import React from "react";

const AnswerItem = ({ name, answer, date }) => {
  return (
    <div className="answer">
      <div>
        <span>{name}님</span>
        <p>{date}</p>
      </div>
      <div>{answer}</div>
    </div>
  );
};

export default AnswerItem;

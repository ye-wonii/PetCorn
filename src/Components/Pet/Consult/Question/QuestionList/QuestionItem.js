import React from "react";

const QuestionItem = ({ id, title, date, is_answer }) => {
  return (
    <div>
      <div>
        {title} | {date} | {is_answer ? "답변완료" : "답변 대기중"}
      </div>
    </div>
  );
};

export default QuestionItem;

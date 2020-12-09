import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuestionItemWrapper = styled.div`
  margin: 5px;
  border: 2px solid black;
`;

const Questionitem = ({ id, name, title, date, is_answer }) => {
  return (
    <QuestionItemWrapper>
      <div>
        <span>질문자 : {name}</span>
        <p>{is_answer ? "답변완료" : "답변 대기중"}</p>
      </div>
      <div>{title}</div>
      <div>
        <span>{date}</span>
      </div>
      <Link to={`/DetailQuestion/${id}`}>답변하기 ▶</Link>
    </QuestionItemWrapper>
  );
};

export default Questionitem;

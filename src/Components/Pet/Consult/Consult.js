import React from "react";
import { Link } from "react-router-dom";
import QuestionList from "./Question/QuestionList/QuestionList";

const Consult = () => {
  return (
    <div>
      <div>전문가 상담 페이지</div>
      <div>
        <Link to="/Question">질문 하러가기</Link>
        <span>|||</span>
        <Link to="/Answer">질문 답변하기</Link>
      </div>
      <div>
        <span>강아지에게 질문 하고 싶은건 무엇인가요?</span>
      </div>
      <div>
        <div>내 질문</div>
        <hr />
        <QuestionList />
      </div>
    </div>
  );
};

export default Consult;

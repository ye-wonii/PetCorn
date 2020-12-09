import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Questionitem from "./Question/Questionitem";
const QuestionItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;
const Answer = () => {
  const [qList, setQ] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      const response = await Axios.get("/consult/question");
      console.log(response);
      setQ(...qList, response.data);
    };
    getQuestion();
  }, []);
  const questionList = qList.map(({ id, name, title, is_answer, date }) => (
    <Questionitem
      key={id}
      id={id}
      name={name}
      title={title}
      date={date}
      is_answer={is_answer}
    />
  ));
  return (
    <QuestionItemListWrapper>
      <div>질문 목록</div>
      <div>{questionList}</div>
    </QuestionItemListWrapper>
  );
};

export default Answer;

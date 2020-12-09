import Axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = () => {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getQuestion = async () => {
      const response = await Axios.get("/consult/");
      console.log(response);
      setQuestion(...question, response.data);
    };
    getQuestion();
  }, []);

  const questionList = question.map((item) => (
    <QuestionItem
      key={item.id}
      title={item.title}
      date={item.date}
      is_answer={item.is_answer}
    />
  ));

  return (
    <div>
      {console.log(question)}
      <div>{questionList}</div>
    </div>
  );
};

export default QuestionList;

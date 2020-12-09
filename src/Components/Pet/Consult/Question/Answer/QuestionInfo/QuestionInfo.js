import Axios from "axios";
import React, { useEffect, useState } from "react";
import AnswerForm from "../AnswerForm/AnswerForm";
import AnswerItem from "../AnswerItem";

const QuestionInfo = ({ location }) => {
  const [info, setinfo] = useState({});
  const [answerList, setAnswer] = useState([]);
  const { name, title, maintext, is_answer, date } = info;
  const id = location.pathname.split("/")[2];
  const GetQuestionInfo = async () => {
    await Axios.get(`/consult/detailInfo?id=${id}`).then((res) => {
      Axios.get(`/consult/detailAnswer?id=${id}`).then((response) => {
        console.log(response.data);
        setinfo(res.data);
        setAnswer(response.data);
      });
    });
  };
  useEffect(() => {
    GetQuestionInfo();
  }, [id]);
  const handleEnrollAnswer = async (id, input) => {
    await Axios.post("/consult/answer", { id, input }).then((res) => {
      alert("답변이 등록되었습니다!");
      console.log(res.data);
      GetQuestionInfo();
    });
  };
  const answers = answerList.map(({ id, name, answer, date }) => (
    <AnswerItem key={id} name={name} date={date} answer={answer} />
  ));
  return (
    <div>
      <div>
        <p>질문자 : {name}</p>
        <span>{is_answer ? "답변 완료" : "답변 대기중"}</span>
      </div>
      <div>
        <span>Q. {title}</span>
        <p>{date}</p>
      </div>
      <hr />
      <div>{maintext}</div>
      <hr />
      {answers}
      <hr />
      <AnswerForm id={id} handleEnrollAnswer={handleEnrollAnswer} />
    </div>
  );
};

export default QuestionInfo;

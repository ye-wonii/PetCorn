import Axios from "axios";
import React, { useState } from "react";

const SetQuestion = ({ history }) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const checkForm = () => {
    if (title && article) {
      handleAddQuestion();
    } else {
      alert("모두 입력해주세요");
    }
  };
  const handleAddQuestion = async () => {
    const response = await Axios.post("/consult/enroll", {
      title,
      article,
    });
    alert(response.data.success);
    history.push("/Consult");
  };
  return (
    <div>
      <div>
        <span>질문하고 싶은 것은 무엇인가요??</span>
      </div>
      <div>
        제목 :
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목을 입력해주세요"
        />
        본문 :
        <textarea
          type="text"
          value={article}
          rows={30}
          cols={30}
          onChange={(e) => {
            setArticle(e.target.value);
          }}
          placeholder="본문을 입력해주세요"
        />
      </div>
      <div>
        <button onClick={checkForm}>등록하기</button>
      </div>
    </div>
  );
};

export default SetQuestion;

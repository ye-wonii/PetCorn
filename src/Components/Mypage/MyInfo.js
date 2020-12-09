import React from "react";
import { dog1 } from "../Main/asset/index";

const MyInfo = ({ name, petname, date, kind }) => {
  const countDate = (date) => {
    const today = new Date(Date.now()).getTime();
    const birth = new Date(date).getTime();
    return Math.round(Math.abs(today - birth) / (1000 * 60 * 60 * 24));
  };
  return (
    <div>
      <img src={dog1} alt="dog1" />
      <p>
        {name}님의 반려견 : {petname} ({kind})
      </p>
      <div>우리가 함께한지 {countDate(date)}일</div>
    </div>
  );
};

export default MyInfo;

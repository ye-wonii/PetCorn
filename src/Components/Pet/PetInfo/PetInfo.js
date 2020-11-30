import React from "react";

const PetInfo = () => {
  return (
    <div>
      <div>
        <span>
          내 애완동물 이름 : {}(품종 : {})
        </span>
      </div>
      <div>
        <p>나이 : {}</p>
        <p>성별 : {}</p>
        <p>중성화 : {}</p>
      </div>
    </div>
  );
};

export default PetInfo;

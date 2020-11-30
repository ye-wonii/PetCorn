import React from "react";

const PetEnroll = () => {
  return (
    <div>
      나의 애완동물은?
      <div>
        <label>강아지</label>
        <input type="radio" />
      </div>
      <div>
        <label>고양이</label>
        <input type="radio" />
      </div>
      이름 : <input type="text" />
      나이 : <input type="number" />
      <div>
        <span>중성화 유무</span>
        <div>
          <label>O</label>
          <input type="radio" />
        </div>
        <div>
          <label>X</label>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};

export default PetEnroll;

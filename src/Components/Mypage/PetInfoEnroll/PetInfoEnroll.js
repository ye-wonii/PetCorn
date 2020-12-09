import React from "react";

const PetInfoEnroll = ({ name }) => {
  const kinds = [
    "시베리아 허스키",
    "푸들",
    "저먼 셰퍼드",
    "알래스칸 멜러뮤트",
    "도베르만 핀셔",
    "골든 리트리버",
    "래브라도 레트리버",
    "베들링턴 테리어",
    "이탈리안 그레이 하운드",
    "웰시코기",
    "사모예드",
    "시바 이누",
    "재페니스 스피츠",
    "미니어처 슈나우저",
    "비숑프리제",
    "시추",
    "잭 러셀 테리어",
    "포메라니안",
    "미니어처 핀셔",
    "파피용",
    "요크셔테리어",
    "말티즈",
    "닥스훈트",
    "치와와",
    "퍼그",
    "프렌치 불독",
  ];
  const kindList = kinds.map((item) => <div>{item}</div>);
  return (
    <div>
      <div>
        <span>{name}님의 강아지 정보 등록하기</span>
      </div>
      <div>
        <div>
          이름 : <input type="text" />
        </div>
        <div>
          나이 : <input type="number" />
        </div>
        <div>
          <span>성별</span>
          <label>
            남자
            <input type="radio" />
          </label>
          <label>
            여자
            <input type="radio" />
          </label>
        </div>
        <div>
          <span>품종</span>
          {kindList}
        </div>
        <div>
          <span>중성화 유무</span>
          <label>
            O
            <input type="radio" />
          </label>
          <label>
            X
            <input type="radio" />
          </label>
        </div>
      </div>
      <div>
        <button>등록하기</button>
      </div>
    </div>
  );
};

export default PetInfoEnroll;

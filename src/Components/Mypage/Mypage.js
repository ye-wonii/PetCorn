import Axios from "axios";
import React, { useEffect, useState } from "react";
import MyInfo from "./MyInfo";
import PetInfoEnroll from "./PetInfoEnroll/PetInfoEnroll";

const Mypage = () => {
  const [petInfo, setInfo] = useState({});
  const [is_pet, setPet] = useState(false);
  const isPetCheck = async () => {
    const response = await Axios.post("/pet");
    console.log(response.data.is_pet);
    if (response.data.is_pet === 1) {
      setPet(true);
    } else {
      setPet(false);
    }
  };
  useEffect(() => {
    const getPetInfo = async () => {
      const response = await Axios.post("/pet/info");
      console.log(response);
      setInfo(response.data);
    };
    isPetCheck();
    if (is_pet) {
      getPetInfo();
    }
  }, []);
  const { name, petname, sex, kind, age, birthday, is_neu } = petInfo;
  return (
    <div>
      <div>마이페이지</div>
      <hr />
      {is_pet ? (
        <MyInfo name={name} petname={petname} date={birthday} kind={kind} />
      ) : (
        <PetInfoEnroll />
      )}
    </div>
  );
};

export default Mypage;

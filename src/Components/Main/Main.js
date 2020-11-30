import Axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const checkCookie = async () => {
      const response = await Axios.post("/");
      console.log(response);
      setName(response.data);
    };
    checkCookie();
  }, []);
  return (
    <div>
      <div>Main 페이지</div>
      {console.log(name)}
      <span>Token : {name}</span>
      <div></div>
    </div>
  );
};
export default Main;

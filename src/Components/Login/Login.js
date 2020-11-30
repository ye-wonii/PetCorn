import Axios from "axios";
import React from "react";
import { useState } from "react";

const Login = ({ history }) => {
  const [email, setemail] = useState("");
  const [pw, setPw] = useState("");
  const handleFormSetting = () => {
    if (email && pw) {
      handleLogin();
    } else {
      alert("모두 입력해주세요");
    }
  };
  const handleLogin = async () => {
    await Axios.post("/user/login", {
      data: {
        email,
        pw,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          alert(res.data.error);
        } else {
          alert(res.data);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        email{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        password{" "}
        <input
          type="password"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <button onClick={handleFormSetting}>로그인</button>
      </div>
    </div>
  );
};
export default Login;

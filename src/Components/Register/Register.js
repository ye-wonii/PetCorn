import Axios from "axios";
import React from "react";
import { useState } from "react";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRepw] = useState("");
  const handleFormSetting = () => {
    var pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{5,19}$/;
    if (name && pw && email && repw) {
      if (pwReg.test(pw)) {
        if (pw === repw) {
          handleRegister();
        } else {
          alert("비밀번호가 같지 않습니다.");
        }
      } else {
        alert("패스워드는 영문, 숫자, 특수문자 조합 5 ~19자리입니다 ");
      }
    } else {
      alert("모두 입력해주세요");
    }
  };
  const handleRegister = () => {
    console.log("asd");
    Axios.post("/user/register", {
      name,
      email,
      pw,
    })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          alert("회원가입이 가능합니다");
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        이름
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        email{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
        re-password{" "}
        <input
          type="password"
          value={repw}
          onChange={(e) => {
            setRepw(e.target.value);
          }}
        />
        <button onClick={handleFormSetting}>회원가입</button>
      </div>
    </div>
  );
};
export default Register;

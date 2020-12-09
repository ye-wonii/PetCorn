import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Logo } from "../Main/asset/index";
import { Link } from "react-router-dom";
const Header = () => {
  const [is_login, setLogin] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      const response = await Axios.post("/");
      console.log("check", response);
      if (response.data) {
        setLogin(true);
      }
    };
    console.log(is_login);
    checkLogin();
  }, []);
  const logout = async () => {
    Axios.post("/user/logout").then((res) => {
      alert("로그아웃 되었습니다!");
      setLogin(false);
    });
  };
  const NotLogin = () => {
    return (
      <div id="header">
        <div class="Main-top">
          <Link to="/" class="logo">
            <img src={Logo} width="115px" height="50px" alt="img" />
          </Link>
          <Link to="/Login" class="signinBtn">
            <h6>Sign In</h6>
          </Link>
          <Link to="/Register" class="signupBtn">
            <h6>Sign Up</h6>
          </Link>
        </div>
      </div>
    );
  };
  const IsLogin = () => {
    return (
      <div id="header">
        <div class="Main-top">
          <Link to="/" class="logo">
            <img src={Logo} width="115px" height="50px" alt="img" />
          </Link>
          <Link to="/Consult" class="Consult">
            <h6>전문가 상담</h6>
          </Link>
          <Link to="/Todos" class="Calender">
            <h6>일정 관리</h6>
          </Link>
          <Link to="/Adobt" class="Adobt">
            <h6>입양/실종</h6>
          </Link>
          <Link to="/Mypage" class="Mypage">
            <h6>마이페이지</h6>
          </Link>
          <div class="logout" onClick={logout}>
            <h6>Logout</h6>
          </div>
        </div>
      </div>
    );
  };
  return <>{is_login ? <IsLogin /> : <NotLogin />}</>;
};

export default Header;

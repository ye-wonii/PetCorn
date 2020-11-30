import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [is_login, setLogin] = useState(false);
  const NotLogin = () => {
    return (
      <div>
        <div>
          <Link to="/Register">Sign In</Link>
        </div>
        <div>
          <Link to="/Login">Sign Up</Link>
        </div>
      </div>
    );
  };
  const IsLogin = () => {
    return (
      <div>
        <div>
          <Link to="/Consult">전문가 상담</Link>
        </div>
        <div>
          <Link to="/Calender">일정 관리</Link>
        </div>
        <div>
          <Link to="/Adobt">입양/실종</Link>
        </div>
        <div>
          <Link to="/Mypage">마이페이지</Link>
        </div>
        <div>
          <span>Logout</span>
        </div>
      </div>
    );
  };
  return <>{is_login ? <IsLogin /> : <NotLogin />}</>;
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {
  dog1,
  dog2,
  dog3,
  FaceBook,
  GitHub,
  Instagram,
  MainImg,
  MiniLogo,
} from "./asset/index";
import "./main.css";

const Main = () => {
  return (
    <>
      <div class="Main-wrap">
        <Header />
        <main>
          <div class="Main-middle">
            <div class="biglogo">
              <h1>PET</h1>
              <h1>CORN</h1>
            </div>
            <div class="maintext">
              <h1>반려동물을 위해서 시작하세요!</h1>
            </div>
            <element id="rectangle1"></element>
            <element id="rectangle2"></element>
            <element id="rectangle3"></element>
            <element id="rectangle4"></element>
            <div class="mainimage">
              <img src={MainImg} alt="img" />
            </div>
          </div>
          <div class="Main-about">
            <h1 id="about">ABOUT</h1>
            <div class="schedule">
              z
              <img class="dog1" src={dog1} alt="img" />
              <h3 id="title1">반려동물의 일정관리</h3>
              <h3 id="content1">산책주기, 예방접종 등 일정관리까지</h3>
              <button id="btn1">GO</button>
            </div>
            <div class="adoption">
              <img class="dog2" src={dog2} alt="img" />
              <h3 id="title2">입양 및 실종 정보제공</h3>
              <h3 id="content2">반려동물의 입양 / 실종신고까지</h3>
              <button id="btn2">GO</button>
            </div>
            <div class="ask">
              <img class="dog3" src={dog3} alt="img" />
              <h3 id="title3">전문가와의 상담 !</h3>
              <h3 id="content3">반려동물에 대한 전문가의 상담까지</h3>
              <button id="btn3">GO</button>
            </div>
          </div>
        </main>
        <footer>
          <div class="Main-footer">
            <img class="minilogo" src={MiniLogo} alt="img" />
            <div class="footer-description">
              <h6 id="company">(주) PETCORN</h6>
              <h6 id="number">연락처: 010-8888-9999</h6>
              <h6 id="email">이메일: s19020@gsm.hs.kr</h6>
              <h6 id="developer">개발자: 신이삭, 진예원</h6>
              <element id="line"></element>
            </div>
            <div class="footer-menu">
              <Link href="#">
                <h6 id="footer-ask">전문가 상담</h6>
              </Link>
              <Link href="#">
                <h6 id="footer-schedule">일정 관리</h6>
              </Link>
              <Link href="#">
                <h6 id="footer-adoption">입양 / 실종</h6>
              </Link>
              <Link href="#">
                <h6 id="footer-mypage">마이페이지</h6>
              </Link>
            </div>
            <div class="footer-sns">
              <Link href="#">
                <img id="instagram" src={Instagram} alt="img" />
              </Link>
              <Link href="#">
                <img id="facebook" src={FaceBook} alt="img" />
              </Link>
              <Link href="#">
                <img id="github" src={GitHub} alt="img" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Main;

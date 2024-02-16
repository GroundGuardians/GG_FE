import styled from "@emotion/styled";
import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";
import MyPageCarousel from "./mypageCarousel/mypageCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./mypageCarousel/embla.css";
import "./mypageCarousel/sandbox.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Username>Hello! Eunbi Hwang</Username>
      <Email>pintotoro123@ajou.ac.kr</Email>
      <main className="sandbox">
        <section className="sandbox__carousel mypage">
          <MyPageCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </main>
      <ButtonRowWrapper>
        <CommonButton
          isGreen={false}
          isSurvey={false}
          onClick={() => navigate("/mypage")}
        >
          My Page
        </CommonButton>
        <CommonButton
          isGreen={true}
          isSurvey={false}
          onClick={() => navigate("/survey/1")}
        >
          Try Again
        </CommonButton>
      </ButtonRowWrapper>
    </>
  );
};

export default MyPage;

const Username = styled.div`
  margin-top: 20px;
  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #000;

  font-size: 30px;
`;

const Email = styled.div`
  margin-bottom: 12px;

  font-size: 16px;
`;

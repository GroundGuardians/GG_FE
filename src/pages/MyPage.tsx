import styled from "@emotion/styled";
import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";
import MyPageCarousel from "./mypageCarousel/mypageCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./mypageCarousel/embla.css";
import "./mypageCarousel/sandbox.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const MyPage = () => {
  interface myDataPropType {
    name: string;
    email: string;
    cardImage: string[];
  }
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [myData, setMyData] = useState<myDataPropType>();

  useEffect(() => {
    const handleFetchQuizData = async () => {
      try {
        const response = await axios.get(
          `http://3.38.77.109:8081/mypage`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response, "res");

        console.log(token, "token");
        setMyData(response.data);

        return response.data;
      } catch (error) {
        console.log(token, "token");
        console.log("에러:", error);
        throw error;
      }
    };
    handleFetchQuizData();
  }, []);

  const imageArray = myData?.cardImage.map((imageBase64, index) => {
    return `data:image/png;base64,${imageBase64}`;
  });

  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  console.log(imageArray, "ff");

  return (
    <>
      <Username>Hello! {myData?.name}</Username>
      <Email>{myData?.email}</Email>
      <main className="sandbox">
        <section className="sandbox__carousel mypage">
          <MyPageCarousel
            slides={SLIDES}
            options={OPTIONS}
            image={imageArray}
          />
        </section>
      </main>
      <ButtonRowWrapper>
        <CommonButton
          isGreen={false}
          isSurvey={false}
          onClick={() => navigate("/")}
        >
          Home
        </CommonButton>
        <CommonButton
          isGreen={true}
          isSurvey={false}
          onClick={() => navigate("/survey/1")}
        >
          Try Again
        </CommonButton>
      </ButtonRowWrapper>
      {/* {myData?.cardImage && (
        <div>
          {myData.cardImage.map((imageBase64, index) => (
            <img
              key={index}
              src={`data:image/png;base64,${imageBase64}`}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      )} */}
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

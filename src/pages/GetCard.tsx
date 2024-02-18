import styled from "@emotion/styled";

import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetCard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [imageSrc, setImageSrc] = useState("");

  console.log(token);

  const { animalId } = useParams();

  useEffect(() => {
    const handleFetchQuizData = async () => {
      try {
        const response = await axios.post(
          `http://3.38.77.109:8081/mypage/${animalId}`,
          {},

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "arraybuffer",
          }
        );
        const blob = new Blob([response.data], { type: "image/png" });
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
        console.log(response, "res");

        console.log(token, "token");

        return response.data;
      } catch (error) {
        console.log(token, "token");
        console.log("에러:", error);
        throw error;
      }
    };
    handleFetchQuizData();
  }, []);
  return (
    <>
      <Title>
        If I were to turn
        <br />
        into an animal...
      </Title>
      <UnknownCardWrapper>
        <img src={imageSrc} />
      </UnknownCardWrapper>
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

export default GetCard;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 29px;
  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #000;

  font-size: 30px;
`;

const UnknownCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 290px;
  height: 434px;
  margin-bottom: 28px;
`;

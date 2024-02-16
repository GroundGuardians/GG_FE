import styled from "@emotion/styled";
import CardIc from "../assets/unknownCard.svg";
import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const UnknownCard = () => {
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    setResult("ooxx");
    const fetchUnknownCardData = async () => {
      try {
        const response = await axios.get(
          `http://3.38.77.109:8081/animal/${result}`
        );
        console.log(response, "res");
        return response.data;
      } catch (error) {
        console.log("에러:", error);
        throw error;
      }
    };
    fetchUnknownCardData();
  }, [result]);
  const navigate = useNavigate();
  return (
    <>
      <Title>
        If I were to turn
        <br />
        into an animal...
      </Title>
      <UnknownCardWrapper>
        <img src={CardIc} />
        <AnimalNameText>Pouch Voyager</AnimalNameText>
      </UnknownCardWrapper>
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
          onClick={() => navigate("/quiz")}
        >
          Get a Card
        </CommonButton>
      </ButtonRowWrapper>
    </>
  );
};

export default UnknownCard;

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

const AnimalNameText = styled.p`
  position: absolute;
  bottom: 160px;

  color: #898989;
  font-size: 24px;
  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #898989;
`;

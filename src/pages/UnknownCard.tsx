import styled from "@emotion/styled";
import CardIc from "../assets/unknownCard.svg";
import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";

const UnknownCard = () => {
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
          onClick={() => navigate("../")}
        >
          Home
        </CommonButton>
        <CommonButton
          isGreen={true}
          isSurvey={false}
          onClick={() => navigate("../quiz")}
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
  margin-bottom: 28px;
  width: 290px;
  height: 434px;
  display: flex;
  justify-content: center;
`;

const AnimalNameText = styled.p`
  position: absolute;
  bottom: 160px;
  color: #898989;
  font-size: 24px;
  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #898989;
`;

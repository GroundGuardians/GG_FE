import styled from "@emotion/styled";
import CardIc from "../assets/unknownCard.svg";
import { CommonButton, ButtonRowWrapper } from "../commons/Button";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Username>Hello! Eunbi Hwang</Username>
      <Email>pintotoro123@ajou.ac.kr</Email>
      <UnknownCardWrapper>
        <img src={CardIc} />
        <AnimalNameText>Pouch Voyager</AnimalNameText>
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

import styled from "@emotion/styled";
import CardIc from "../assets/unknownCard.svg";

const UnknownCard = () => {
  return (
    <>
      <Title>
        If I were to turn
        <br />
        into an animal...
      </Title>
      <img src={CardIc} />
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

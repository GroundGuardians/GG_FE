import InfoIc from "../assets/info.svg";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderWrapper>
      GroundGuardians
      <InfoIcon src={InfoIc} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;

  color: #25c35c;
  font-size: 16px;
  font-family: Pretendard;

  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
`;

const InfoIcon = styled.img`
  position: absolute;
  right: 30px;
`;

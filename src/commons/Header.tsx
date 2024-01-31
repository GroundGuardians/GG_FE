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
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  width: 100vw;
  height: 60px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  color: #25c35c;
  font-size: 16px;
  font-weight: 900; //적용 안되는거처럼 보임
`;

const InfoIcon = styled.img`
  position: relative;
  left: 30px;
`;

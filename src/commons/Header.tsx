import React from "react";
import InfoIc from "../assets/info.svg";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderLayout>
      GroundGuardians
      <img src={InfoIc} />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center; //유무에 따라 아이콘 크기 바뀜
`;

import InfoIc from "../assets/info.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import Info from "../pages/Info";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <HeaderWrapper>
        GroundGuardians
        <InfoIcon src={InfoIc} onClick={toggleModal} />
      </HeaderWrapper>
      {modalOpen && (
        <ModalBackdrop onClick={toggleModal}>
          <Info />
        </ModalBackdrop>
      )}
    </>
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

  cursor: pointer; /* 마우스를 가져다 대면 포인터 모양이 됨 */
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(0 0 0 / 50%); /* 어두운 배경 */
`;

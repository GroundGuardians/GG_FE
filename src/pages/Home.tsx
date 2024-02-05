import styled from "@emotion/styled";
import HomeImg from "../assets/home.svg";
import GoogleLogin from "../assets/GoogleLogin.svg";

const Home = () => {
  return (
    <>
      <Title>
        "If I were to turn
        <br /> into an animal?"
      </Title>
      <img src={HomeImg} />
      <GoogleLoginIcon src={GoogleLogin} />
    </>
  );
};

export default Home;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 248px;
  height: 100px;
  margin-top: 60px;

  color: #20a74f;
  font-size: 36px;
  text-align: center;
  -webkit-text-stroke-width: 1pt;
  -webkit-text-stroke-color: #20a74f;
`;

const GoogleLoginIcon = styled.img`
  margin-top: 39px;

  cursor: pointer;
`;

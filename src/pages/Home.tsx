import styled from "@emotion/styled";
import HomeImg from "../assets/home.svg";
import GoogleLogin from "../assets/GoogleLogin.svg";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(`http://3.38.77.109:8081/api/auth`);
    console.log(response, "res");
    window.location.href = response.data;
    return response.data;
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};

const Home = () => {
  return (
    <>
      <Title>
        "If I were to turn
        <br /> into an animal?"
      </Title>
      <img src={HomeImg} />
      <GoogleLoginIcon src={GoogleLogin} onClick={fetchData} />
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

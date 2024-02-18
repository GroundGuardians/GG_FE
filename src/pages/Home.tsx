import styled from "@emotion/styled";
import HomeImg from "../assets/home.svg";
import GoogleLogin from "../assets/GoogleLogin.svg";
import axios from "axios";
import { CommonButton } from "../commons/Button";
import FindAnimalIc from "../assets/findAnimalIc.svg";
import MyPageIc from "../assets/myPageIc.svg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      <Title>
        "If I were to turn
        <br /> into an animal?"
      </Title>
      <img src={HomeImg} />
      {localStorage.getItem("accessToken") &&
      localStorage.getItem("jwtToken") ? (
        <Wrapper>
          <CommonButton
            isGreen={true}
            isSurvey={false}
            onClick={() => navigate("/survey/1")}
          >
            <img src={FindAnimalIc} /> Find my animal
          </CommonButton>
          <CommonButton
            isGreen={false}
            isSurvey={false}
            onClick={() => navigate("/mypage")}
          >
            <img src={MyPageIc} /> Go to Mypage
          </CommonButton>
        </Wrapper>
      ) : (
        <GoogleLoginIcon src={GoogleLogin} onClick={fetchData} />
      )}
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

const Wrapper = styled.div`
  margin-top: 30px;
`;

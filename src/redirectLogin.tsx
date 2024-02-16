import axios from "axios";
import { useEffect } from "react";

const RedirectLogin = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const code: string =
          new URL(window.location.href).searchParams.get("code") || "";
        console.log(code);
        const response = await axios.get(
          `http://3.38.77.109:8081/api/auth/callback`,
          {
            params: {
              code: code,
            },
          }
        );
        console.log(response.data, "성공이용");
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("jwtToken", response.data.jwtToken);
        window.location.href = "/mypage";
      } catch (error) {
        console.error("에러:", error);
        throw error;
      }
    };

    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 설정

  // RedirectLogin은 JSX를 반환하지 않음
  return null;
};

export default RedirectLogin;

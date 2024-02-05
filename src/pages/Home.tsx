import styled from "@emotion/styled";

const Home = () => {
  return (
    <Title>
      "If I were to turn
      <br /> into an animal?"
    </Title>
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
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #20a74f;
`;

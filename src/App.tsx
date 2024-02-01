import Header from "./commons/Header";
import Layout from "./commons/Layout";
import styled from "@emotion/styled";

function App() {
  //develop
  //test
  return (
    <Wrapper>
      <Header />
      <Layout />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

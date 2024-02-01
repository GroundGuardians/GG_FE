import Header from "./commons/Header";
import { CommonButton } from "./commons/Button";

function App() {
  //develop
  //test
  return (
    <div>
      <Header />
      <CommonButton isGreen={true}>
        I wake up on a bright sunny day
      </CommonButton>
      <CommonButton isGreen={false}>I wake up on a moonlit night</CommonButton>
    </div>
  );
}

export default App;

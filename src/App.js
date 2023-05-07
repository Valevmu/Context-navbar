import "./styles/styles.scss";
import { FormWrapper } from "./components/FormWrapper";
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";


function App() {
  return (
    <div>
      <Wrapper>
        <Navbar className="nav" />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;

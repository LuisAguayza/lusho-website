import { Button, Main, Container } from "components-styled";
import { HeaderLayout } from "components/header/header.component";
import { Home } from "components/home";
import { useTheme } from "./theme";
import { About } from "components/about";

function App() {

  const { toggleTheme } = useTheme();
  // const { changeLanguage } = useLanguage();

  return (
    <Main>
      <HeaderLayout />
      <Container>
        <Home />
        <About />
        {/* <Button onClick={toggleTheme}>Change theme</Button> */}
      </Container>
    </Main>
  )
}

export default App

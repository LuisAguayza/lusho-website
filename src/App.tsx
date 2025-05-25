import { Main, Container, Button } from "components-styled";
import { HeaderLayout } from "components/header/header.component";
import { Home } from "components/home";
import { useTheme } from "./theme";
import { About } from "components/about";
import { Skills } from "components/skills";

function App() {

  const { toggleTheme } = useTheme();
  // const { changeLanguage } = useLanguage();

  return (
    <Main>
      <HeaderLayout />
      <Container>
        <Home />
        <About />
        <Skills />
        <Button onClick={toggleTheme}>Change theme</Button>
      </Container>
    </Main>
  )
}

export default App

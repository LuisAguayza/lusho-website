import { Button, Container } from "components-styled";
import { HeaderLayout } from "components/header/header.component";
import { Home } from "components/home";
import { Main } from "components/home/home.styled";
import { useTheme } from "./theme";

function App() {

  const { toggleTheme } = useTheme();
  // const { changeLanguage } = useLanguage();

  return (
    <Container>
      <HeaderLayout />
      <Main>
        <Home />
        <Button onClick={toggleTheme}>Change theme</Button>
      </Main>
    </Container>
  )
}

export default App

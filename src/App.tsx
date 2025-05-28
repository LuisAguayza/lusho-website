import { Container, LoadingButton, Main, Modal } from "components-styled";
import { About } from "components/about";
import { ContactComponent } from "components/contact";
import { HeaderLayout } from "components/header";
import { Home } from "components/home";
import { Skills } from "components/skills";
import { useTheme } from "./theme";

function App() {

  const { toggleTheme } = useTheme();

  return (
    <Main>
      <HeaderLayout />
      <Container>
        <Home />
        <About />
        <Skills />
        <ContactComponent />
        <LoadingButton
          onClick={toggleTheme}
          label='Toggle Theme'
          fullwidth
        />
      </Container>
    </Main>
  )
}

export default App

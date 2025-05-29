import { Container, Main } from "components-styled";
import { About } from "components/about";
import { ContactComponent } from "components/contact";
import { Footer } from "components/footer";
import { HeaderLayout } from "components/header";
import { Home } from "components/home";
import { Skills } from "components/skills";

function App() {
  return (
    <Main>
      <HeaderLayout />
      <Container>
        <Home />
        <About />
        <Skills />
        <ContactComponent />
        <Footer />
      </Container>
    </Main>
  )
}

export default App

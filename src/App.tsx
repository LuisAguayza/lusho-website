import { Container } from "components-styled";
import { HeaderLayout } from "components/header/header.component";
import { Home } from "components/home";
import { useLanguage } from "language";
import { useTheme } from "./theme";

function App() {

  const { toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();

  return (
    <Container>
      <HeaderLayout />
      <Home />
    </Container>
  )
}

export default App

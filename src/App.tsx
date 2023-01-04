import { Container, Typography } from "components-styled";
import { useLanguage } from "language";
import { FormattedMessage } from "react-intl";
import { useTheme } from "./theme";
import { HeaderLayout } from "components/header";

function App() {

  const { toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();

  return (
    <Container>
      <HeaderLayout />
    </Container>
  )
}

export default App

import { Container } from "components-styled";
import { useLanguage } from "language";
import { FormattedMessage } from "react-intl";
import { useTheme } from "./theme";

function App() {
  
  const { toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();
  
  return (
    <Container>
      <h1>
      <FormattedMessage id='hello' />

      </h1>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={changeLanguage}>intl</button>
    </Container>
  )
}

export default App

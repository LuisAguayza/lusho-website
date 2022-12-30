import { Container, Typography } from "components-styled";
import { useLanguage } from "language";
import { FormattedMessage } from "react-intl";
import { useTheme } from "./theme";

function App() {

  const { toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();

  return (
    <Container>
      <Typography>
        <FormattedMessage id='hello' />
      </Typography>
      <Typography as='h2'>
        <FormattedMessage id='hello' />
      </Typography>
      <Typography as='h3'>
        <FormattedMessage id='hello' />
      </Typography>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={changeLanguage}>intl</button>
    </Container>
  )
}

export default App

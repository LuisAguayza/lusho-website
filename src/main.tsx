import { FeedbackProvider } from 'context/feedback';
import { LanguageProvider } from 'context/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomThemeProvider } from 'theme';
import GlobalStyles from 'theme/global-styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <GlobalStyles />
      <LanguageProvider>
        <FeedbackProvider>
          <App />
        </FeedbackProvider>
      </LanguageProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
)

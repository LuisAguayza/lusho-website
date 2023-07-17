import { LanguageProvider } from 'language';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomThemeProvider } from 'theme';
import GlobalStyles from 'theme/global-styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <CustomThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
)

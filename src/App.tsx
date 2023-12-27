import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';

import defaultTheme from './assets/styles/themes/default';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <p>Teste</p>
      </ThemeProvider>
    </>
  );
};

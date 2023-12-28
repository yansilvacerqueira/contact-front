import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';

import defaultTheme from './assets/styles/themes/default';

import { Container } from './styles';

import { Header } from './components/Header/Header';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

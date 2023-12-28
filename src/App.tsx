import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';

import defaultTheme from './assets/styles/themes/default';

import { Container } from './styles';

import { Header } from './components/Header/Header';
export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
};

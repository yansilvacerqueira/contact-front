import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../assets/styles/themes/default';

import { Home } from '../Home';
describe('Home component', () => {
  it('should render the counter of contacts correct', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
    );
    const contatosCount = screen.getByText('3 Contatos');

    expect(contatosCount).toBeInTheDocument();
  });

  it('should render the link "New Contact" with href correct', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
    );
    const newContactLink = screen.getByRole('link', { name: /Novo Contato/i });

    expect(newContactLink).toHaveProperty('href', 'http://localhost/');
  });

  it('should render the card with data correct', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
    );
    const name = screen.getByText('Yan Cerqueira');
    const category = screen.getByText('Instagram');

    const email = screen.getByText('yansilvacerqueira@outlook.com');
    const cellPhone = screen.getByText('(24)99924-2321');

    const editButton = screen.getByRole('link', { name: /Edit Icon/i });
    const deleteButton = screen.getByRole('button', { name: /Delete Icon/i });

    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(cellPhone).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});

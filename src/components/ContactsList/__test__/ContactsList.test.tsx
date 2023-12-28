import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../assets/styles/themes/default';
import userEvent from '@testing-library/user-event';

import { ContactsList } from '../ContactsList'; // Import the component to be tested

describe('Header component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <ContactsList />
      </ThemeProvider>,
    );
  });
  it('should render the logo and search input', () => {
    const headerElement = screen.getByText(/3 Contatos/i);
    const novoContatoLink = screen.getByRole('link', { name: /Novo Contato/i });

    expect(headerElement).toBeInTheDocument;
    expect(novoContatoLink).toHaveProperty('href', 'http://localhost/');
    expect(novoContatoLink).toBeInTheDocument;
  });

  it('should render the counter of contacts correct', () => {
    const contatosCount = screen.getByText('3 Contatos');

    expect(contatosCount).toBeInTheDocument;
  });

  it('should render the link "New Contact" with href correct', () => {
    const novoContatoLink = screen.getByRole('link', { name: /Novo Contato/i });

    expect(novoContatoLink).toHaveProperty('href', 'http://localhost/');
  });

  it('should render the card with data correct', () => {
    const name = screen.getByText('Yan Cerqueira');
    const category = screen.getByText('Instagram');
    const email = screen.getByText('yansilvacerqueira@outlook.com');
    const cellPhone = screen.getByText('(24)99924-2321');

    const editButton = screen.getByAltText('Edit Icon');
    const deleteButton = screen.getByAltText('Delete Icon');

    expect(name).toBeInTheDocument;
    expect(category).toBeInTheDocument;
    expect(email).toBeInTheDocument;
    expect(cellPhone).toBeInTheDocument;
    expect(editButton).toBeInTheDocument;
    expect(deleteButton).toBeInTheDocument;
  });
});

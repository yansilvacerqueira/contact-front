import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { Header } from '../Header'; // Import the component to be tested

describe('Header component', () => {
  it('should render the logo and search input', () => {
    render(<Header />);

    // Check for logo
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument;

    // Check for input
    const searchInput = screen.getByPlaceholderText('Pesquisar contato');
    expect(searchInput).toBeInTheDocument;
  });
});

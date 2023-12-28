import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from '../Header';

describe('Header component', () => {
  it('should render the logo', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });
});

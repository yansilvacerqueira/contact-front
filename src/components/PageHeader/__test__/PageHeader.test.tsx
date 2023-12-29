import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../assets/styles/themes/default';

import { PageHeader } from '../PageHeader';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from '../../../Views/Home/Home';
import { NewContact } from '../../../Views/NewContact/NewContact';
import userEvent from '@testing-library/user-event';

describe('PageHeader component', () => {
  it('should render title passed by prop', () => {
    const title = 'Meu título';
    render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <PageHeader title={title} />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const titleRender = screen.getByText(title);
    expect(titleRender).toBeInTheDocument();
  });

  it('should render link with one arrow icon', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <PageHeader title={'Meu título'} />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const link = screen.getByRole('link', { name: /Voltar/i });
    expect(link).toHaveAttribute('href', '/');

    const arrowIcon = screen.getByAltText('Back link');
    expect(arrowIcon).toBeInTheDocument();
  });

  it('should send to the correct route when click on link', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: (
            <ThemeProvider theme={defaultTheme}>
              <Home />
            </ThemeProvider>
          ),
        },
        {
          path: '/new',
          element: (
            <ThemeProvider theme={defaultTheme}>
              <NewContact />,
            </ThemeProvider>
          ),
        },
      ],
      {
        initialEntries: ['/new'],
      },
    );

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toEqual('/new');

    userEvent.click(screen.getByRole('link', { name: /Voltar/i }));

    expect(router.state.location.pathname).toEqual('/');
  });
});

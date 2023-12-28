import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.primary.main};
    border: 2px solid ${({ theme }) => theme.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: #fff;
    }
  }

  strong {
    color: #222;
    font-size: 24px;
  }
`;

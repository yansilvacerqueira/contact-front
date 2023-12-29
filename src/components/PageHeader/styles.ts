import styled from 'styled-components';

export const Container = styled.header`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 24px;

    span {
      color: ${({ theme }) => theme.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }
`;

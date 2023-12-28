import styled from 'styled-components';

export const Container = styled.div`
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

export const ListContainer = styled.div`
  margin-top: 24px;

  .sort-button {
    display: flex;
    align-items: center;
    padding: 8px;

    border: none;
    background: none;

    color: ${({ theme }) => theme.primary.main};
    font-weight: bold;

    margin-bottom: 16px;

    img {
      margin-left: 8px;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .about {
    display: flex;
    flex-direction: column;

    span {
      color: #ccc;
      margin-top: 8px;
    }
  }

  .about .contact-name-category {
    margin-bottom: 16px;
    strong {
      margin-right: 8px;
    }
    span {
      background: ${({ theme }) => theme.primary.lighter};
      color: ${({ theme }) => theme.primary.dark};
      font-weight: bold;
      padding: 6px;
      border-radius: 8px;
    }
  }

  .actions .delete {
    border: none;
    background: none;
    margin-left: 8px;
  }
`;

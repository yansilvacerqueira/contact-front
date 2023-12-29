import { FC } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  danger?: boolean;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = styled.button`
  height: 48px;

  background: ${({ theme }) => theme.primary.main};
  color: #fff;

  border-radius: 8px;
  border: none;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.danger.light};

      &:hover {
        background: ${theme.danger.light};
      }

      &:active {
        background: ${theme.danger.dark};
      }
    `}
`;

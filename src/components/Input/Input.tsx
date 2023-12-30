import { FC } from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
  error?: boolean;
};

export const Input: FC<InputProps | any> = styled.input`
  width: 100%;
  background: #fff;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 48px;

  border-radius: 8px;
  border: 2px solid #fff;

  outline: none;
  padding: 0 16px;

  &:focus {
    border-color: 2px solid ${({ theme }) => theme.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.danger.light};
      border-color: 2px solid ${({ theme }) => theme.primary.main};
    `}
`;

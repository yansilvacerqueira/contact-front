import { FC } from 'react';
import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);

  position: absolute;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

type ContainerProps = {
  danger?: boolean;
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;

  h1 {
    color: ${({ theme, danger }) =>
      danger ? theme.danger.main : theme.primary.main};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: end;

  .cancel-button {
    margin-right: 8px;
    border: none;
    background: none;
    color: #ccc;
  }
`;

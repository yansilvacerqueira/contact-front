import { ReactElement } from 'react';
import { Container } from './styles';

type FormGroupProps = {
  children: ReactElement;
};

export const FormGroup = ({ children }: FormGroupProps) => {
  return <Container>{children}</Container>;
};

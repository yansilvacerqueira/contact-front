import { ReactElement } from 'react';
import { Container } from './styles';

type FormGroupProps = {
  children: ReactElement;
  errorMessage?: string;
};

export const FormGroup = ({ children, errorMessage }: FormGroupProps) => {
  return (
    <Container>
      {children}
      {errorMessage && <small>{errorMessage}</small>}
    </Container>
  );
};

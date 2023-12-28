import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
};

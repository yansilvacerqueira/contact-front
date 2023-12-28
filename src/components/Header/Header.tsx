import { Container, InputContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <InputContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputContainer>
    </Container>
  );
};

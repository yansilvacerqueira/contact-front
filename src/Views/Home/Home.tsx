import {
  InputContainer,
  Container,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/arrowIcon.svg';
import edit from '../../assets/images/editIcon.svg';
import trash from '../../assets/images/deleteIcon.svg';
import { Modal } from '../../components/Modal/Modal';

export const Home = () => {
  return (
    <>
      <Modal danger />
      <InputContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputContainer>
      <Container>
        <Header>
          <strong>3 Contatos</strong>
          <a href="/">Novo Contato</a>
        </Header>

        <ListContainer>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow to order by name" />
          </button>

          <Card>
            <div className="about">
              <div className="contact-name-category">
                <strong>Yan Cerqueira</strong>
                <span>Instagram</span>
              </div>

              <span>yansilvacerqueira@outlook.com</span>
              <span>(24)99924-2321</span>
            </div>

            <div className="actions">
              <a href="/edit">
                <img src={edit} alt="Edit Icon" />
              </a>

              <button type="button" className="delete">
                <img src={trash} alt="Delete Icon" />
              </button>
            </div>
          </Card>
        </ListContainer>
      </Container>
    </>
  );
};

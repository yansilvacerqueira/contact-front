import { Button } from '../Button/Button';
import { Overlay, Container, Footer } from './styles';

type ModalProps = {
  danger: boolean;
};

export const Modal = ({ danger }: ModalProps) => {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Modal title</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            cancelar
          </button>

          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
};

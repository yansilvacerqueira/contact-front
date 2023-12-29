import { Button } from '../Button/Button';
import { FormGroup } from '../FormGroup/FormGroup';
import Input from '../Input/Input';
import InputSelect from '../InputSelect/InputSelect';

import { Form } from './styles';

type ContactFormProps = {
  buttonLabel: string;
};

export const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="nome" />
      </FormGroup>
      <FormGroup>
        <InputSelect>
          <option value="Instagram">Instagram</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Tinder">Tinder</option>
        </InputSelect>
      </FormGroup>
      <Button>{buttonLabel}</Button>
    </Form>
  );
};

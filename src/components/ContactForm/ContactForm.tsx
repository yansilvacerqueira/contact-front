import { useState } from 'react';
import { Button } from '../Button/Button';
import { FormGroup } from '../FormGroup/FormGroup';
import { Input } from '../Input/Input';
import InputSelect from '../InputSelect/InputSelect';

import { Form } from './styles';
import { isEmailValid } from '../../helpers/isValidEmail';
import { useErrors } from '../../hooks/useErrors';
import { handleChange } from '../../helpers/handleChange';

type ContactFormProps = {
  buttonLabel: string;
};

export const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { getErrorMessageByFieldName, removeError, setError } = useErrors();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, phone, category });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <FormGroup errorMessage={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(e: React.FormEvent<HTMLFormElement>) =>
            handleChange({
              event: e,
              field: 'name',
              setValue: setName,
              validate: (value: string) => (!value ? 'Name is required' : null),
              removeError: removeError,
              setError: setError,
            })
          }
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup errorMessage={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          placeholder="Email"
          onChange={(e: React.FormEvent<HTMLFormElement>) =>
            handleChange({
              event: e,
              field: 'email',
              setValue: setEmail,
              validate: (value: string) =>
                value && !isEmailValid(value) ? 'Invalid email' : null,
              removeError: removeError,
              setError: setError,
            })
          }
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
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

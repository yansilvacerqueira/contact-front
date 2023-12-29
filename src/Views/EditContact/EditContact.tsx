import { ContactForm } from '../../components/ContactForm/ContactForm';
import { PageHeader } from '../../components/PageHeader/PageHeader';

export const EditContact = () => {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Alterar contato" />
    </>
  );
};

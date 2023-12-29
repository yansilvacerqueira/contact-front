import { ContactForm } from '../../components/ContactForm/ContactForm';

import { PageHeader } from '../../components/PageHeader/PageHeader';

export const NewContact = () => {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Criar contato" />
    </>
  );
};

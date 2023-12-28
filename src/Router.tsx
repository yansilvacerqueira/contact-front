import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Views/home/Home';
import { EditContact } from './Views/editContact/EditContact';
import { NewContact } from './Views/newContact/NewContact';

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/new" Component={NewContact} />
      <Route path="/edit/:id" Component={EditContact} />
    </Routes>
  );
};

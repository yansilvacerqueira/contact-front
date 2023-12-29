import { Routes, Route } from 'react-router-dom';

import { Home } from './Views/Home/Home';
import { EditContact } from './Views/EditContact/EditContact';
import { NewContact } from './Views/NewContact/NewContact';

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/new" Component={NewContact} />
      <Route path="/edit/:id" Component={EditContact} />
    </Routes>
  );
};

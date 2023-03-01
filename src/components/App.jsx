import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddPhoneNumberPage } from 'pages/AddPhoneNumberPage/AddPhoneNumberPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddPhoneNumberPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

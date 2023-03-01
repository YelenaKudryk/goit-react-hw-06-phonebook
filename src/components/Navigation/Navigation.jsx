import { HeaderLink, HeaderList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <HeaderList>
        <li>
          <HeaderLink to="/">Add contact</HeaderLink>
        </li>
        <li>
          <HeaderLink to="contacts">Contacts</HeaderLink>
        </li>
      </HeaderList>
    </nav>
  );
};

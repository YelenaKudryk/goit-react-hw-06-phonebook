import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Container, HeaderStyles, MainStyles } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <HeaderStyles>
        <Navigation />
      </HeaderStyles>
      <MainStyles>
        <Outlet />
      </MainStyles>
    </Container>
  );
};

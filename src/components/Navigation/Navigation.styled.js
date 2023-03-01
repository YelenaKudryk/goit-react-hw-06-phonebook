import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const HeaderLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primaryText};
  outline: none;
  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.hoverColor};
    text-decoration: underline;
    text-decoration-color: #303f9f;
  }
`;

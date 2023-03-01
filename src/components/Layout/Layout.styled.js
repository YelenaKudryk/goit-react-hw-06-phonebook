import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderStyles = styled.header`
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MainStyles = styled.main`
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
`;

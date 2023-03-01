import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.secondaryText};
  width: 200px;
  padding: ${p => p.theme.spacing(2)};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  :focus,
  :hover {
    border-color: ${p => p.theme.colors.hoverColor};
    outline: none;
  }
`;

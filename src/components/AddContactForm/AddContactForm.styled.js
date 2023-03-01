import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
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

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
  border-radius: ${p => p.theme.radius.normal};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;

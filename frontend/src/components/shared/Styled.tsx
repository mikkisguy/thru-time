import styled, { css } from "styled-components";

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FormElementBaseStyles = css`
  font: ${({ theme }) => theme.fonts.body};
  border: none;
  padding: ${({ theme }) => theme.spacing.l};
  border-radius: 1rem;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.outline}80;
  }
`;

export const Input = styled.input`
  ${FormElementBaseStyles}

  color: ${({ theme }) => theme.colors.bodyText};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.3rem 0 inset;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Button = styled.button`
  ${FormElementBaseStyles}

  color: ${({ theme }) => theme.colors.bodyText};
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: background-color 0.25s;
  margin-top: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}90;
  }
`;

export const Label = styled.label`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
`;

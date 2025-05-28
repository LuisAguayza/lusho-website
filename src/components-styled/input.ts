import styled, { css } from 'styled-components';

interface InputStyledProps {
  error?: boolean;
}

const sharedFieldStyles = css<InputStyledProps>`
  width: 100%;
  padding: 10px 40px 10px 12px;
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: ${({ theme }) => theme.typography.normal};
  color: ${({ theme }) => theme.color.title};
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.card}; // nunca rojo
  border-radius: 8px;
  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.title};
  }
`;

export const StyledInput = styled.input
.withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})<InputStyledProps>`
  ${sharedFieldStyles}
`;

export const StyledTextarea = styled.textarea
.withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})<InputStyledProps>`
  ${sharedFieldStyles}
  resize: none;
  min-height: 100px;
`;

export const FieldWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})<InputStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xs};

  &:focus-within label {
    color: ${({ theme }) => theme.color.title};
  }

  &:focus-within i {
    color: ${({ error, theme }) => (error ? theme.color.error : theme.color.title)};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.normal};
  color: ${({ theme }) => theme.color.card}; // nunca rojo
  text-align: left;
`;

export const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})<InputStyledProps>`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  i {
    width: 18px;
    height: 18px;
    color: ${({ error, theme }) => (error ? theme.color.error : theme.color.card)};
    transition: color 0.2s ease;
  }

  // override si tiene focus
  ${FieldWrapper}:focus-within & i {
    color: ${({ error, theme }) => (error ? theme.color.error : theme.color.title)};
  }
`;

import styled, { BreakpointBoolean, css, keyframes } from 'styled-components';
import { responsiveBooleanStyle } from 'theme';

interface ButtonProps {
  fullwidth?: boolean | BreakpointBoolean;
}

type ButtonPropKey = keyof ButtonProps;
const buttonProps: ButtonPropKey[] = [
  'fullwidth'
];

export const Button = styled.button.withConfig({
  shouldForwardProp: prop => !buttonProps.includes(prop as ButtonPropKey)
})<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.titleAlternative};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  border-style: none;
  font-size: 14px;
  height: 37px;
  margin: 0;
  padding: 10px 16px;
  transition: color 100ms;

  i {
    margin-left: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.title};
  }

  ${({ fullwidth, theme }) =>
    typeof fullwidth === 'boolean'
      ? fullwidth &&
        css`
          width: 100%;
        `
      : Array.isArray(fullwidth)
      ? null
      : fullwidth &&
        responsiveBooleanStyle('width', fullwidth, theme)}
`;
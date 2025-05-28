import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { Body2, Button, Icon } from ".";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullwidth?: boolean;
  label?: ReactNode;
  children?: ReactNode;
  icon?: string;
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-right: 10px;
`;

const StyledLoadingButton = styled(Button)`
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  > div {
    display: flex;
    align-items: center;
  }
`;

export const LoadingButton = ({ loading = false, label, icon, children, ...props }: LoadingButtonProps) => (
  <StyledLoadingButton disabled={loading} {...props}>
    {loading && <Spinner />}
    <Body2 style={{ opacity: loading ? 0.5 : 1 }}>
      {label ?? children}
    </Body2>
    {icon && <Icon style={{ marginLeft: '10px' }} className={icon}/ >}
  </StyledLoadingButton>
);
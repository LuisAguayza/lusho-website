import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`

export const ModalOverlay = styled.div
.withConfig({
  shouldForwardProp: prop => prop !== 'isClosing'
})<{ isClosing: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.25s ease-out forwards;
`

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
`

export const ModalHeader = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.title};
  }
`;

export const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.color.text};
`;

export const ModalIcon = styled.i
.withConfig({
  shouldForwardProp: prop => prop !== 'type'
})
<{ type: 'success' | 'info' | 'error'}>`
  color: ${({ type, theme }) => theme.color[type]};
  font-size: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;

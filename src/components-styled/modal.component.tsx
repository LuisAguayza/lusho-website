import { ReactNode, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '.'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const keydown = 'keydown';
const mousedown = 'mousedown';

export const Modal = ({ open, onClose, children }: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(open)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (open) setIsVisible(true);
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }

    if (isVisible) {
      window.addEventListener(keydown, handleKeyDown)
      window.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener(keydown, handleKeyDown)
      window.removeEventListener(mousedown, handleClickOutside)
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsVisible(false);
      onClose()
    }, 250)
  }

  if (!isVisible) return null

  return ReactDOM.createPortal(
    <ModalOverlay isClosing={isClosing}>
      <ModalContent ref={contentRef}>
        <ModalHeader>
          <CloseButton onClick={handleClose} aria-label="Close modal">×</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>,
    document.body
  )
}

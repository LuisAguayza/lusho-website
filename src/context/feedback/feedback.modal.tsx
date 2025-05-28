import { Body1, Content, Modal, ModalIcon, Title } from "components-styled";
import { IFeedbackModalProps } from ".";

const ModalTypes = {
  success: {
    label: 'success',
    icon: 'uil uil-check-circle',
  },
  error: {
    label: 'error',
    icon: 'uil uil-times-circle',
  },
  info: {
    label: 'info',
    icon: 'uil uil-info-circle',
  },
}

export const FeedbackModal = ({ message, open, type, onClose, title }: IFeedbackModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Content>
        <ModalIcon className={ModalTypes[type].icon} type={type}/>
        <Title>{title ?? ModalTypes[type].label}</Title>
        <Body1>{message}</Body1>
      </Content>
    </Modal>
  )
};

import { Body1, Content, Modal, ModalIcon, Title } from "components-styled";
import { IFeedbackModalProps } from ".";
import { useI18n } from "context/i18n";

const ModalTypes = {
  success: {
    label: 'utils.success',
    icon: 'uil uil-check-circle',
  },
  error: {
    label: 'utils.error',
    icon: 'uil uil-times-circle',
  },
  info: {
    label: 'Info',
    icon: 'uil uil-info-circle',
  },
}

export const FeedbackModal = ({ message, open, type, onClose, title }: IFeedbackModalProps) => {
  
  const { translate } = useI18n();
  
  return (
    <Modal open={open} onClose={onClose}>
      <Content>
        <ModalIcon className={ModalTypes[type].icon} type={type}/>
        <Title>{title ?? translate(ModalTypes[type].label)}</Title>
        <Body1>{message}</Body1>
      </Content>
    </Modal>
  )
};

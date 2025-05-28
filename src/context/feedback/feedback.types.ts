export type AlertType = 'success' | 'info' | 'error';

export type FeedbackContextType = {
  showErrorModal: (message: string) => void;
  showSuccessModal: (message: string) => void;
}

export interface IModalState extends IModalOptions {
  open: boolean;
}

export interface IModalOptions {
  message: string;
  title?: string
  type: AlertType;
}


export interface IFeedbackModalProps extends IModalState {
  onClose: () => void;
}
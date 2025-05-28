import { createContext, ReactNode, useContext, useState } from "react";
import { FeedbackContextType, FeedbackModal, IModalState } from ".";

const FeedbackContext = createContext({} as FeedbackContextType);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<IModalState>({
    message: '',
    open: false,
    type: 'success',
  });

  const showSuccessModal = (message: string) => setModal({
    open: true,
    message,
    type: 'success',
  });
  
  const showErrorModal = (message: string) => setModal({
    open: true,
    message,
    type: 'error',
  });

  const handleCloseModal = () => setModal(prev => ({ ...prev, open: false}));

  return (
    <FeedbackContext.Provider
      value={{
        showSuccessModal,
        showErrorModal,
      }}
    >
      {children}
      <FeedbackModal onClose={handleCloseModal} {...modal}/>
    </FeedbackContext.Provider>
  )
};

export const useFeedback = () => useContext(FeedbackContext);

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (!document.getElementById('modal-root')) {
      const modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !showModal) return null;

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${showModal ? 'enter' : 'leave'}`}>
      <div className={`modal-content ${showModal ? 'enter' : 'leave'}`}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;

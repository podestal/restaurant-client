import React, { ReactNode, useEffect } from 'react';

const styles = {
  modalAnimation: `
    @keyframes scaleIn {
      0% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }
    .scale-transition {
      animation: scaleIn 0.3s ease-in-out forwards;
    }
  `
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 sm:mx-6 pt-10"
      style={{marginLeft: 0, marginRight:0}}
      onClick={onClose}
    >
      {/* Apply inline styles here */}
      <style dangerouslySetInnerHTML={{ __html: styles.modalAnimation }} />

      <div
        className="relative dark:bg-slate-950 bg-white rounded-lg shadow-lg p-6 max-w-lg w-full scale-transition overflow-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-2xl absolute top-8 md:top-2 right-2 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="modal-content">
          <h2 className='text-center text-4xl mt-4 mb-8'>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
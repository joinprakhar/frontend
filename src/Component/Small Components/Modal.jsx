// Modal.js
import React from "react";
import "../CSS/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="close" onClick={onClose}>
            <i class="fa fa-close"></i>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

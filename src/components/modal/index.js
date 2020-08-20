import React from "react";
// import { Container, Nav, Input } from "./styles";

const Modal = ({ children, onClose, show }) => {
  const onCloseF = (e) => {
    onClose && onClose(e);
  };
  if (!show) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <h2>Obrigado pela compra, volte sempre!</h2>
      <div className="content">
        {children}
        <div className="actions">
          <button
            className="toggle-button"
            onClick={() => {
              onCloseF();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

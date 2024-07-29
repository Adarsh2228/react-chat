import React from 'react';

const LinkInputModal = ({ show, onClose, onSubmit, value, onChange }) => {
  if (!show) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter Zoom or Google Meet link"
          style={styles.input}
        />
        <button
          style={{ ...styles.btn, ...styles.btnPrimary }}
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          style={{ ...styles.btn, ...styles.btnSecondary }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  btn: {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  btnPrimary: {
    background: '#007bff',
    color: 'white',
  },
  btnSecondary: {
    background: '#6c757d',
    color: 'white',
  },
};

export default LinkInputModal;

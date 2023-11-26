// StatusPopup.jsx

import React from "react";

const StatusPopup = ({ message, onClose }) => {
  return (
    <div className="status-popup">
      <div className="status-popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default StatusPopup;

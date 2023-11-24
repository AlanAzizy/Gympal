import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentOptions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="list-group">
        <button onClick={() => navigate("/payment")}>
          <li className="list-group-item">Verification</li>
        </button>
        <button onClick={() => navigate("/payment")}>
          <li className="list-group-item">Membership</li>
        </button>
      </ul>
    </div>
  );
};

export default PaymentOptions;

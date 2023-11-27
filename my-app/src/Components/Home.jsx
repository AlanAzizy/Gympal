import React, { useState } from "react";
import { FaHome, FaUser, FaCreditCard, FaCog } from "react-icons/fa";
import Sidebar from "../Components/payment/Sidebar";

const PaymentOptions = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Verification</li>
        <li className="list-group-item">Membership</li>
      </ul>
    </div>
  );
};

const HomeAdmin = () => {
  const [isPaymentHovered, setPaymentHovered] = useState(false);
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);

  const handlePaymentHover = () => {
    setPaymentHovered(true);
  };

  const handlePaymentLeave = () => {
    setPaymentHovered(false);
  };

  const toggleSidebar = () => {
    setSidebarMinimized(!isSidebarMinimized);
  };

  const gradientStyle = {
    background:
      "linear-gradient(180deg, #113D76 0%, rgba(217, 217, 217, 0.00) 100%)",
    height: "100vh",
    display: "flex",
  };

  const sidebarWidth = isSidebarMinimized ? "90px" : "250px";
  const sidebarToggleButton = isSidebarMinimized ? (
    <button onClick={toggleSidebar}>+</button>
  ) : (
    <button onClick={toggleSidebar}>-</button>
  );

  const sidebarStyle = {
    width: sidebarWidth,
    padding: "20px 0px 0px ",
    background: "#343a40", // Bootstrap dark background color
    color: "white",
    transition: "width 0.3s ease, padding 0.3s ease",
  };

const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const welcomeStyle = {
  color: "#ffffff",
  fontFamily: "Inter-Bold, Helvetica",
  fontSize: "128px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: "normal",
  textDecoration: "underline",
};

  return (
    <div style={gradientStyle}>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div style={contentStyle} className="d-flex justify-content-center align-items-center w-100">
        <h1 style={welcomeStyle} className="">Welcome</h1>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default HomeAdmin;

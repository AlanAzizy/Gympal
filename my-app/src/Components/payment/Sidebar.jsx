import React, { useState } from "react";
import { FaHome, FaUser, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import PaymentOptions from "./PaymentOptions";

const Sidebar = () => {
  const [isPaymentHovered, setPaymentHovered] = useState(false);
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);
  const realData = useState([]);
  const navigate = useNavigate();
  const groupSidebar = {
    background: "grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    color: "white",
    borderRadius: "0px 20px 20px 0px",
    padding: "20px 20px 20px 20px"
  }
  // const handlePaymentHover = () => {
  //   setPaymentHovered(true);
  // };

  // const handlePaymentLeave = () => {
  //   setPaymentHovered(false);
  // };

  // const toggleSidebar = () => {
  //   setSidebarMinimized(!isSidebarMinimized);
  // };

  const gradientStyle = {
    background:
      "linear-gradient(180deg, #113D76 0%, rgba(217, 217, 217, 0.00) 100%)",
    height: "100vh",
    display: "flex",
  };

  // const sidebarWidth = isSidebarMinimized ? "90px" : "250px";
  // const sidebarToggleButton = isSidebarMinimized ? (
  //   <button onClick={toggleSidebar}>+</button>
  // ) : (
  //   <button onClick={toggleSidebar}>-</button>
  // );
  const faHomeStyle = {
    cursor: "pointer",  // Add right margin to FaHome icon
  };
  const sidebarStyle = {
    width: "fit-content",
    display: "flex",
    padding: "68px 40px 0px 0px",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    color: "white",
    position: "fixed",
  };
  const iconStyle = {
    cursor: "pointer",
  };
  return (
    <>
      <div style={sidebarStyle}>
        <FaHome size={50} onClick={() => navigate("/")} style={faHomeStyle} />
        <div style={groupSidebar}>
          <FaUser size={40} onClick={() => navigate("/daftarkelas")} style={iconStyle} />
          <FaCreditCard size={40} onClick={() => navigate("/payment2")} style={iconStyle} />
          <FaPeopleGroup size={40} onClick={() => navigate("/payment")} style={iconStyle} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
import React, { useState } from "react";
import { FaHome, FaUser, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import PaymentOptions from "./PaymentOptions";
import Cookies from "js-cookies";

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
    cursor: "pointer",
    top : "70px",
    marginBottom : "20px",
    marginLeft :"15px" // Add right margin to FaHome icon
  };
  const sidebarStyle = {
    position : "fixed",
    left : "0px",
    width: "fit-content",
    display: "flex",
    padding: "0 40px 0px 0px",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    color: "white",
    zIndex : "1",
    height : "90vh",
    fontFamily : "poppins"
  };
  const iconStyle = {
    cursor: "pointer",
  };

  const handleLogout = () => {
    Cookies.removeItem('jwt');
    localStorage.removeItem('pengguna');
    navigate("/");
  }

  return (
    <>
      <div style={sidebarStyle}>
        <div className="position-relative h-100 d-flex flex-column justify-content-center" >
        <div onClick={()=> handleLogout()} style={{width:"100px",height:"fit-content", marginLeft:"14px", fontSize:"20px"}} className="btn p-0 btn-danger position-absolute top-0 mt-4 p-2">
          Logout
        </div>
        <FaHome size={50} onClick={() => navigate("/adminhome")} style={faHomeStyle} />
        <div style={groupSidebar}>
          <FaUser size={40} onClick={() => navigate("/adminkelas")} style={iconStyle} />
          <FaCreditCard size={40} onClick={() => navigate("/adminpayment")} style={iconStyle} />
          <FaPeopleGroup size={40} onClick={() => navigate("/adminmembership")} style={iconStyle} />  
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
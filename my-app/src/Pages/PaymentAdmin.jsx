// Payment.jsx
import React, { useState } from "react";
import { FaHome, FaUser, FaCreditCard, FaCog } from "react-icons/fa";
import Table from "../Components/payment/RowTable";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/payment/Sidebar"

const dummydata = [
  {
    no: 1,
    id: "0001",
    nama: "gonjoi",
    expdate: "03-02-2023",
    payment: true,
    verification: false,
  },
  {
    no: 2,
    id: "0002",
    nama: "joi",
    expdate: "03-02-2023",
    payment: true,
    verification: false,
  },
  {
    no: 3,
    id: "0003",
    nama: "gon",
    expdate: "03-02-2023",
    payment: true,
    verification: true,
  },
];

const Membership = () => {
  const [isPaymentHovered, setPaymentHovered] = useState(false);
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);
  const realData = useState([]);
  const navigate = useNavigate();

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
    fontFamily: "poppins",
  };

  const sidebarWidth = isSidebarMinimized ? "90px" : "250px";
  const sidebarToggleButton = isSidebarMinimized ? (
    <button onClick={toggleSidebar}>+</button>
  ) : (
    <button onClick={toggleSidebar}>-</button>
  );

  const sidebarStyle = {
    width: sidebarWidth,
    padding: "20px",
    background: "#343a40", // Bootstrap dark background color
    color: "white",
    transition: "width 0.3s ease, padding 0.3s ease",
  };

  const contentStyle = {
    width: "100%",
    flexDirection: "column",
    padding: "20px",
    display: "flex",
  };

  const welcomeStyle = {
    color: "#ffffff",
    fontFamily: "Inter-Bold, Helvetica",
    fontSize: "72px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    textAlign: "left",
    textDecoration: "underline",
    alignSelf: "self-start",
    justifySelf: "self-start",
    margin: "20px",
  };

  return (
    <div style={gradientStyle}>
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <div style={contentStyle}>
        <h1 style={welcomeStyle}>Membership</h1>
        <Table datas={dummydata}/>
        {/* Add more content as needed */}
        <button
          type="button"
          className="btn btn-success mx-auto"
          style={{ width: "40%", borderRadius: "94.5px", marginTop: "20px" }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Membership;

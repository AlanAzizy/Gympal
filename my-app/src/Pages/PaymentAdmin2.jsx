// Payment.jsx
import React, { useState,useEffect } from "react";
import { FaHome, FaUser, FaCreditCard, FaCog } from "react-icons/fa";
import RowTable2 from "../Components/payment/RowTable2"
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/payment/Sidebar";
import axios from "axios";
import Cookies from "js-cookies";

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

const Pembayaran = () => {

  const apiUrl = 'https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/pembayaran/getAllPembayaran'
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasDaftar, setHasDaftar] = useState(false);
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.getItem('jwt');
        const response = await axios.get(apiUrl, {
          headers: {
              'cookies' : token,
              'Access-Control-Allow-Origin': '*', 
              'Content-Type': 'application/json'
          }
      });
          setData(response.data.data);
          setIsloading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or set error state
      } finally {
        setIsloading(false);
      }
    };
    
    fetchData();
  }, []);


  const fetchDatafromChild = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error or set error state
    } finally {
      setIsloading(false);
    }
  };


  const [isPaymentHovered, setPaymentHovered] = useState(false);
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);
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
    width: "90%",
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
    <div style={gradientStyle} className="d-flex ">
      {/* Sidebar */}
      <div className="col-1 h-100"></div>
      <div style={contentStyle} className="col-11">
        <h1 style={welcomeStyle}>Payment Verification</h1>
        <RowTable2 datas={data} isLoading={isLoading} fetchData={fetchDatafromChild}/>
        {/* Add more content as needed */}
      </div>
      <Sidebar />
      {/* Content */}
    </div>
  );
};

export default Pembayaran;

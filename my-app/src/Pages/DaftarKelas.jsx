import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCreditCard, FaCog } from "react-icons/fa";
import Sidebar from "../Components/payment/Sidebar";
import CardClass from "../Components/card/CardClass";
import CardClassSingle from "../Components/card/CardClassSingle";
import StatusPopup from "../Components/status/StatusPopup";
import Navbar from "../Components/navbar/Navbar";
import axios from "axios";
import Cookies from "js-cookies"
import { useNavigate } from "react-router-dom";


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

const DaftarKelas = () => {
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
    height: "screen",
    overflow: "auto",
    width : "100vw",
    fontFamily: "Poppins",
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
    flex: 1,
    position: "relative",
    height: "screen",
    display: "flex",
    padding:"20px 20px 20px 20px",
    alignItems: "center",
    overflow:"auto",
    justifyContent: "center",

  };

  const welcomeStyle = {
    color: "#ffffff",
    fontFamily: "Inter-Bold, Helvetica",
    fontSize: "60px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    textAlign: "center",
    textDecoration: "underline",
    paddingTop:"20px"
  };

  const apiUrl = 'http://localhost:3001/kelas/allKelas'
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  // const [hasDaftar, setHasDaftar] = useState(false);
  // const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.kelas);
        setIsloading(false);
        console.log(response.data.kelas);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or set error state
      } finally {
        setIsloading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const addClass =  async (id) => {
    const token = Cookies.getItem('jwt');
    console.log((token));
    try{
      const response = await axios.put("http://localhost:3001/kelas/mendaftarKelas", {_id : id}, {
        headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
    } )
    if (response.status === 201 || response.status === 209) {
      console.log("Class added successfully!");
      setStatusMessage("Class added");
      setShowStatusPopup(true);

      // Log the values
      console.log("statusMessage:", statusMessage);
      console.log("showStatusPopup:", showStatusPopup);
    }
    }catch(err){
      console.log(err)
    }
  }

  const hasDaftarHandler = () => {
    // Hide the pop-up when handling the 'hasDaftar' state
    setShowStatusPopup(false);
  }

  const navigate = useNavigate();
  return (
    <div style={gradientStyle}>
      {/* Sidebar */}
      <Sidebar />
      <div className="d-flex w-100 justify-content-end row" style={{height:"100px"}}>
        <h1 style={welcomeStyle}>Daftar Kelas</h1>
        <div className="col-7"></div>
        <h3 className="my-auto col-2 text-white text-end">Add Kelas</h3>
        <button  onClick={()=>navigate("/adminaddkelas")} className="custom-button col-1 bg-transparent ps-0" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                padding: "0px 0px 0px 0px",
                marginRight:"0",
                boxShadow: "none", /* Remove box shadow */
                marginBottom:"10px",
              }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white" // Fill the SVG icon with the current color
            className="bi bi-plus-circle icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
          </svg>
        </button>
        <div className="col-1"></div>
      </div>
      {/* Content */}
      <div className="d-flex flex-wrap gap-2 mx-auto" style={{width:"90vw", paddingTop:"50px"}}>
        {!isLoading && data.map((el)=>(<CardClassSingle data={el} addClass={addClass}/>))}
      </div>
      {/* Render the StatusPopup component */}
        {showStatusPopup && <StatusPopup message={statusMessage} onClose={() => setShowStatusPopup(false)} />}
      </div>

  );
};

export default DaftarKelas;

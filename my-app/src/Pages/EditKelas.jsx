import { useState } from "react";
import CardClassEdit from "../Components/card/CardClassEdit";
import Sidebar from "../Components/payment/Sidebar";
import { useNavigate } from "react-router-dom";

const gradientStyle = {
    background:
      "linear-gradient(180deg, #113D76 0%, rgba(217, 217, 217, 0.00) 100%)",
    height: "screen",
    overflow: "auto",
    width : "100vw",
    height : "100vh",
    fontFamily:"poppins"
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
  
export default function EditKelas(){

    const navigate = useNavigate();
    
    return (
        <>
        <div className="d-flex flex-column align-items-center py-auto justify-content-center position-relative" style={gradientStyle}>
          <div className="btn btn-danger mx-auto position-absolute w-25" style={{bottom:"30px"}} onClick={()=>navigate("/adminkelas")}>
              Cancel
          </div>
            {/* Sidebar */}
            <Sidebar />
            <h1 style={welcomeStyle}>Edit Kelas</h1>
            <CardClassEdit />
        </div>
        </>
    )
}
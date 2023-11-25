import { useState } from "react";
import CardClassAdd from "../Components/card/CardClassAdd";
import Sidebar from "../Components/payment/Sidebar";
import { useNavigate } from "react-router-dom";

const gradientStyle = {
    background:
      "linear-gradient(180deg, #113D76 0%, rgba(217, 217, 217, 0.00) 100%)",
    height: "screen",
    overflow: "auto",
    width : "100vw",
    height : "100vh"
  };


export default function AddKelas(){

    
    return (
        <>
        <div className="d-flex align-items-center py-auto justify-content-center position-relative" style={gradientStyle}>
            {/* Sidebar */}
            <Sidebar />
            <CardClassAdd />
        </div>
        </>
    )
}
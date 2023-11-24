import { useState } from "react";
import CardClassEdit from "../Components/card/CardClassEdit";
import Sidebar from "../Components/payment/Sidebar";

const gradientStyle = {
    background:
      "linear-gradient(180deg, #113D76 0%, rgba(217, 217, 217, 0.00) 100%)",
    height: "screen",
    overflow: "auto",
    width : "100vw",
    height : "100vh"
  };


export default function EditKelas(){

    
    return (
        <>
        <div className="d-flex align-items-center py-auto justify-content-center" style={gradientStyle}>
            {/* Sidebar */}
            <Sidebar />
            <CardClassEdit />
        </div>
        </>
    )
}
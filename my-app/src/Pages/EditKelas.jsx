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
    height : "100vh"
  };


export default function EditKelas(){

    const navigate = useNavigate();
    
    return (
        <>
        <div className="d-flex flex-column align-items-center py-auto justify-content-center position-relative" style={gradientStyle}>
          <div className="btn btn-danger mx-auto position-absolute w-25" style={{bottom:"30px"}} onClick={()=>navigate("/adminkelas")}>
              cancel
          </div>
            {/* Sidebar */}
            <Sidebar />
            <h1>Edit Kelas</h1>
            <CardClassEdit />
        </div>
        </>
    )
}
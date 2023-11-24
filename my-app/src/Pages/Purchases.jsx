import React from "react";
import img1 from "../Assets/image 141.png";
import img2 from "../Assets/gympal5 1.png";
import CardPromote from "./../Components/card/CardPromote";
import Navbar from "../Components/navbar/Navbar";

function Purchases() {
  const gradientBackgroundStyle = {
    background: "linear-gradient(to bottom, #4F6780, #777777)",
    height: "auto",
  };
  return (
    <>
      <div className="wrapper" style={gradientBackgroundStyle}>
        <Navbar />
        <div className="container text-light">
          <h2 className="fw-bold py-3">Unlock the Full Gympal Experience</h2>
          <div className="d-flex justify-items-center gap-4 align-items-center">
            <img src={img1} alt="image1" />
            <img src={img2} alt="image2" />
          </div>
          <h2 className="fw-bold py-3">Don't Wait, Start Today!</h2>
          <CardPromote />
        </div>
      </div>
    </>
  );
}

export default Purchases;

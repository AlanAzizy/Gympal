import React from "react";
import CardClass from  "../Components/card/CardClass";
import  Navbar  from "../Components/navbar/Navbar";

function Class() {
  const gradientBackgroundStyle = {
    background: "linear-gradient(to bottom, #4F6780, #777777)",
    height: "auto",
  };

  return (
    <>
      <div style={gradientBackgroundStyle}>
        <Navbar />
        <CardClass />
      </div>
    </>
  );
}

export default Class;

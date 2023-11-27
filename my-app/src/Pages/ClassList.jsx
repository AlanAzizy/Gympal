import React from "react";
import CardClassList from  "../Components/card/CardClassList";
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
        <CardClassList />
      </div>
    </>
  );
}

export default Class;

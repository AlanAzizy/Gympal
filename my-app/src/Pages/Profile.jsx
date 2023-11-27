import React from "react";
import TableInformation from "../Components/table/TableInformation";
import CardClassHistory from "../Components/card/CardClassHistory";
import Navbar from "../Components/navbar/Navbar";
function Profile() {

  const pengguna = JSON.parse(localStorage.getItem('pengguna'));
  return (
    <>
      <div style={{background: 'linear-gradient(to bottom, #3D6EA2, #FEFEFE)'}}>
        <Navbar />
        <TableInformation nama={pengguna.nama} email={pengguna.email} expdate={pengguna.expdate}/>
        <CardClassHistory />
      </div>
    </>
  );
}

export default Profile;

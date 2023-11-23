import React from "react";
import TableInformation from "../Components/table/TableInformation";
import CardClassHistory from "../Components/card/CardClassHistory";
function Profile() {

  const pengguna = JSON.parse(localStorage.getItem('pengguna'));
  console.log(typeof(pengguna));
  return (
    <>
      <div style={{background: 'linear-gradient(to bottom, #3D6EA2, #FEFEFE)'}}>
        <TableInformation nama={pengguna.nama} email={pengguna.email} expdate={pengguna.expdate}/>
        <CardClassHistory />
      </div>
    </>
  );
}

export default Profile;

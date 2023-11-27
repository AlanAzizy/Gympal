import React from "react";
import TableInformation from "../Components/table/TableInformation";
import CardClassHistory from "../Components/card/CardClassHistory";
function Profile() {

  const pengguna = JSON.parse(localStorage.getItem('pengguna'));
  const nama = pengguna.pengguna.nama;
  const email = pengguna.pengguna.email;
  const expdate = pengguna.anggota.expdate;
  return (
    <>
      <div style={{background: 'linear-gradient(to bottom, #3D6EA2, #FEFEFE)'}}>
        <TableInformation nama={nama} email={email} expdate={expdate}/>
        <CardClassHistory />
      </div>
    </>
  );
}

export default Profile;

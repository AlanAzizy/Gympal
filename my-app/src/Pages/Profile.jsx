import React from "react";
import TableInformation from "../Components/table/TableInformation";
import CardClassHistory from "../Components/card/CardClassHistory";
function Profile({nama,email,expdate}) {
  return (
    <>
      <TableInformation nama={nama} email={email} expdate={expdate}/>
      <CardClassHistory />
    </>
  );
}

export default Profile;

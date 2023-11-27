import React, { useState } from "react";
import Cookies from 'js-cookies';
import axios from "axios";
import "../../App.css"

const Notification = (NotifValue) => {
  const [NotificationValue, setNotification] = useState(NotifValue);
  const handleClick = () => {
    setNotification(!NotificationValue);
  };
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <td className="col-2" onClick={handleClick} >
      {NotificationValue ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16" style={iconStyle}>
          <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
          <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16" style={iconStyle}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>}
    </td>
  );
}
const Verif = ({verifValue, id, fetchData, idPembayaran}) => {
  let vValue = false;
  if (verifValue){
    vValue = true;
  }
  const [verificationValue, setVerificationValue] = useState(vValue);
  
  const handleClick = (event) => {
    if (vValue){
      setVerificationValue(false)
    }else{
      handleChange(id,'verifyPembayaran', idPembayaran);
      setVerificationValue(true)
    }
    fetchData();
  };
  const iconStyle = {
    cursor: "pointer",
  };

  const handleChange= async (idAnggota, toActive, idPembayaran)=> {

    const token = Cookies.getItem('jwt');
    try{
      const response = await axios.put(
        `https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/pembayaran/${toActive}/${idAnggota}/${idPembayaran}`,{},
        {
          headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
        }
      );
    if (response.status==200 || response.status==209){ 
    }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <td className="col-2" onClick={handleClick} >
      {verificationValue ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16" style={iconStyle}>
          <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
          <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16" style={iconStyle}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
       
      }
    </td>
  );
}

const TablePayment = ({datas,isLoading, fetchData}) => {


  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <table style={{
      background: "#000000",
      opacity: "70%",
      color: "white",
      borderRadius: "20px",
      width:"90%"
    }}>
<thead>
      <tr className="row w-100 ms-0" style={{ paddingTop: "15px", paddingBottom: "15px", paddingRight: "0px" }}>
        <th className="col-1">No</th>
        <th className="col-3">ID</th>
        <th className="col-4">Name</th>
        <th className="col-2">Payment</th>
        <th className="col-2">Verification</th>
      </tr>
    </thead>
    <tbody style={{ borderRadius: "20px" }}>
        {isLoading ? <div className="w-screen h-screen position-fixed top-50 start-50"><svg width="50" className="spinner" height="50" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="black"
        />
      </svg> </div>:
          datas.map((data, index) => (
            <tr
              key={data.id}
              className="row ms-0"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
              }}>
          <td className="col-1">{index+1}</td>
          <td className="col-3">{data.idPembayaran}</td>
          <td className="col-4">{data.nama}</td>
          {/* Assuming Verif and Notification are components */}
          <Notification NotifValue={true} />
          <Verif verifValue={data.statusPembayaran} id={data.idAnggota} fetchData={fetchData} idPembayaran={data.idPembayaran}/>
        </tr>
      )
      )}
    </tbody>
  </table>
)};

export default TablePayment;

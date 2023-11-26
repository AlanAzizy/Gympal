import React, { useState } from "react";
import Cookies from 'js-cookies';
import axios from "axios";

const Payment = (payValue) => {
  const [PaymentValue, setPayment] = useState(payValue);

  return (
    <td className="col-2" >
      {PaymentValue ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>
      ) : (
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16"
          >
            <path 
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
            />
          </svg>
      )}
    </td>
  );
}
const Verif = (verifValue) => {
  const [verificationValue, setVerification] = useState(verifValue);
  const handleClick = (event) => {
    
    setVerification(!verificationValue);
    if (verificationValue){
      handleChange(id,'verifyPembayaran');
    }else{
      console.log(id);
      handleChange(id,'unverifyPembayaran');
    }
  };
  const iconStyle = {
    cursor: "pointer",
  };

  const handleChange= async (id, toActive)=> {

    const token = Cookies.getItem('jwt');
    try{
      const response = await axios.put(`http://localhost:3001/pembayaran/${toActive}/${id}`, {
        headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
    } )
    if (response.status==200 || response.status==209){ 
      console.log(response.data);
    }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <td className="col-2" onClick={handleClick} >
      {verificationValue ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
    </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
      )}
    </td>
    );
  }

  const TablePayment = ({datas,isLoading}) => {


    const iconStyle = {
      cursor: "pointer",
    };
    console.log(datas);
    console.log(isLoading);

  return (
    <table style={{
      width:"80%",
      background: "#000000",
      opacity: "70%",
      color: "white",
      borderRadius: "20px",
    }}>
<thead>
      <tr className="row" style={{ paddingTop: "15px", paddingBottom: "15px", paddingRight: "0px" }}>
        <th className="col-1">No</th>
        <th className="col-2">ID</th>
        <th className="col-5">Name</th>
        <th className="col-2">Payment</th>
        <th className="col-2">Verification</th>
      </tr>
    </thead>
    <tbody style={{ borderRadius: "20px" }}>
    {!isLoading && datas.map((data, index) => (
        <tr key={index} className="row" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <td className="col-1">{index+1}</td>
          <td className="col-2">{data.id}</td>
          <td className="col-5">{data.nama}</td>
          {/* Assuming Verif and Notification are components */}
          <Payment payValuee={true} />
          <Verif verifValue={data.verification} id={data.id}/>
        </tr>
      ))}
    </tbody>
  </table>
)};

export default TablePayment;

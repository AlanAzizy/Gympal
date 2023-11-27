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
      {NotificationValue ? (
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"
            />
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
const Verif = ({verifValue, id, fetchData}) => {
  let vValue = false;
  if (verifValue){
    vValue = true;
  }
  const [verificationValue, setVerificationValue] = useState(vValue);
  
  const handleClick = (event) => {
    if (vValue){
      handleChange(id,'setAnggotaNonActive');
      setVerificationValue(false)
    }else{
      handleChange(id,'setAnggotaActive');
      setVerificationValue(true)
    }
    fetchData();
  };
  const iconStyle = {
    cursor: "pointer",
  };

  const handleChange= async (id, toActive)=> {

    const token = Cookies.getItem('jwt');
    try{
      const response = await axios.put(`https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/kelolaAnggota/${toActive}/${id}`, { params: {
        "idAnggota" : id
      },
        headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
    } )
    if (response.status==200 || response.status==209){ 

    }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <td className="col-2" onClick={handleClick} >
      {verificationValue ? 
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={iconStyle}
          >
            <path
              fillRule="evenodd"
              d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg> : <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={iconStyle}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
          </svg>
       
      }
    </td>
  );
}

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-${year}`;
}

const Table = ({datas,isLoading, fetchData}) => {


  const iconStyle = {
    cursor: "pointer",
  };
  return (
    <table style={{
      background: "#000000",
      opacity: "70%",
      color: "white",
      borderRadius: "20px",
      width:"90%",
    }}>
<thead>
      <tr className="row w-100 ms-0" style={{ paddingTop: "15px", paddingBottom: "15px", paddingRight: "0px" }}>
        <th className="col-1">No</th>
        <th className="col-3">ID</th>
        <th className="col-2">Name</th>
        <th className="col-2">Member</th>
        <th className="col-2">Expdate</th>
        <th className="col-2">Notification</th>
      </tr>
    </thead>
    <tbody style={{ borderRadius: "20px" }}>
      {isLoading  ? <div className="w-screen h-screen position-fixed top-50 start-50"><svg width="50" className="spinner" height="50" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="black"
        />
      </svg> </div>: datas.map((data, index) => (
        <tr key={data.id} className="row ms-0" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <td className="col-1">{index+1}</td>
          <td className="col-3">{data.id}</td>
          <td className="col-2">{data.nama}</td>
          {/* Assuming Verif and Notification are components */}
          <Verif verifValue={data.statusKeanggotaan} id={data.id} fetchData={fetchData}/>
          <th className="col-2">{formatDateToYYYYMMDD(new Date(data.expdate))}</th>
          <Notification NotifValue={false} />
        </tr>
      )
      )}
    </tbody>
  </table>
)};

export default Table;

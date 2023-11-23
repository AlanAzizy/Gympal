import React from "react";
import JohnDoe from "../../Assets/john-doe.jpg"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookies'

function TableInformation({nama,email,expdate}) {

  const navigate = useNavigate();

  console.log(expdate);
  if (!expdate){
    expdate = new Date();
  }

  function logoutHandler(){
    Cookies.removeItem('token');
    localStorage.removeItem('pengguna');
    navigate('/');
  }
  
  return (
    <>
      <div className="container ">
        <div className="wrapper d-flex justify-content-between container w-100 py-3">
          <h1 className="display-6 fw-bold" style={{ color: "#D8CCC0" }}>
            Welcome!
          </h1>
          <button
            type="button"
            className=" border-0 px-5 rounded-4  text-light"
            style={{ background: "#952212" }}
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
        <table className="w-25">
          <img src={JohnDoe} alt={"john-doe"}  style={{background: "#D9D9D9"}} width={150} height={150} />
          <tbody style={{ color: "#E7E7E7" }}>
            <tr>
              <td className="p-2">Name</td>
              <td className="p-2">:</td>
              <td className="p-2">{nama}</td>
            </tr>
            <tr>
              <td className="p-2">Email</td>
              <td className="p-2">:</td>
              <td className="p-2">{email}</td>
            </tr>
            <tr>
              <td className="p-2">Membership</td>
              <td className="p-2">:</td>
              <td className="p-2">{new Date()>new Date(expdate) ? "Regular" : "Pro" }</td>
            </tr>
            <tr>
              <td className="p-2">Expired Date</td>
              <td className="p-2">:</td>
              <td className="p-2">{expdate.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableInformation;

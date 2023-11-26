import React, { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assets/gympal5 1.png";
import StatusPopup from "../status/StatusPopup";
import axios from 'axios';
import Cookies from 'js-cookies';
import MendaftarKelas from "../PopupKelas/MendaftarKelas"
import { useLocation, useNavigate } from "react-router";

function CardClassAdd() {
    

  const [namaKelas, setNamaKelas] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [durasi, setDurasi] = useState(0);
  const [instruktur, setInstruktur] = useState('');
  const [detail, setDetail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  


  const saveData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/kelas/addNewKelas", {
        namaKelas,
        tanggal,
        durasi,
        detail,
        instruktur
      })
      if (response.status===201){
        console.log(response.data.message);
        setShowPopup(true);
        toast.success('Class added successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/adminkelas")
      }
      if (response.status===209){
        console.log(response.data.message);
      }
      if (response.status===210){
        console.log(response.data.message);
      }
    }catch(error){
      console.log(error);
    }
  }

  

  return (
    <>
          <div
            className="card p-3 rounded-5 w-25 mx-auto"
            style={{ background: "#1c232b", fontFamily: "Poppins" }}
          >
            <img src={JohnDoe} className="card-img-top rounded-4" alt="..." />
            <div className="card-body">
              <table>
                <tbody className="text-light">
                  <tr>
                    <td className="p-2">Nama</td>
                    <td className="p-2">:</td>
                    <td className="p-2 fw-bold"><input onChange={(event)=>setNamaKelas(event.target.value)} type="text" value={namaKelas}></input></td>
                  </tr>
                  <tr>
                    <td className="p-2">Date</td>
                    <td className="p-2">:</td>
                    <td className="p-2"><input type="date" onChange={(event)=>setTanggal(event.target.value)} className="w-100" value={tanggal}></input></td>
                  </tr>
                  <tr>
                    <td className="p-2">Duration</td>
                    <td className="p-2">:</td>
                    <td className="p-2"><input type="number" onChange={(event)=>setDurasi(event.target.value)} className="w-100" value={durasi} style={{width:"100%"}}></input></td>
                  </tr>
                  <tr>
                    <td className="p-2">Instructor</td>
                    <td className="p-2">:</td>
                    <td className="p-2"><input type="text" onChange={(event)=>setInstruktur(event.target.value)} value={instruktur}></input></td>
                  </tr>
                  <tr>
                    <td className="p-2">Detail</td>
                    <td className="p-2">:</td>
                    <td className="p-2"><input type="text" onChange={(event)=>setDetail(event.target.value)} value={detail}></input></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row d-flex justify-content-evenly">
              <button onClick={()=>navigate("/adminkelas")} className="col-5 btn btn-danger text-light rounded-5">CANCEL</button>
              <button onClick={() => {saveData(); alert('Class Added!');}} className="col-5 btn btn-success text-light rounded-5">ADD</button>
            </div>
          </div>
          <ToastContainer />
    </>
  );
}

export default CardClassAdd;

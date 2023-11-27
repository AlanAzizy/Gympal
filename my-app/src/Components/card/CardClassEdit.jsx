import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assets/gympal5 1.png";
import axios from 'axios';
import Cookies from 'js-cookies';
import MendaftarKelas from "../PopupKelas/MendaftarKelas"
import { useLocation, useNavigate } from "react-router";

function CardClassEdit() {
    

  const [namaKelas, setNamaKelas] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [durasi, setDurasi] = useState(0);
  const [instruktur, setInstruktur] = useState('');
  const location = useLocation();
  const receivedData = location.state.data;
  const kelas_id = receivedData._id;
  const detail = receivedData.detail;

  const navigate = useNavigate();

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  


  useEffect(() => {
    console.log(receivedData);
    const fetchData = () => {
      try {
        setNamaKelas(receivedData.namaKelas);
        setDurasi(receivedData.durasi);
        setTanggal(formatDateToYYYYMMDD(new Date(receivedData.tanggal)));
        setInstruktur(receivedData.instruktur);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or set error state
      }
    };
    
    fetchData();
  }, []);


  const saveData = async () => {
    try {
      const response = await axios.put("https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/kelas/updateKelas", {
        kelas_id,
        namaKelas,
        tanggal,
        durasi,
        detail,
        instruktur
      })
      if (response.status===201){
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


  const deleteData = async () => {
    try {
      const response = await axios.delete(`https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/kelas/removeKelas/${kelas_id}`
      )
      if (response.status===201){
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
            style={{ background: "#1c232b" }}
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
                </tbody>
              </table>
            </div>
            <div className="row d-flex justify-content-evenly">
              <button onClick={()=>saveData()} className=" col-5 btn btn-success text-light rounded-5">SAVE</button>
              <button onClick={()=>deleteData()} className="col-5 btn btn-danger text-light rounded-5">DELETE</button>
            </div>
          </div>
    </>
  );
}

export default CardClassEdit;

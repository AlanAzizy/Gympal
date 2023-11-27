import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assets/gympal5 1.png";
import axios from 'axios';
import Cookies from 'js-cookies';
import MendaftarKelas from "../PopupKelas/MendaftarKelas"
import "../../App.css"

function CardClass() {

  const apiUrl = 'https://gympalfinal.whitesand-21748554.australiaeast.azurecontainerapps.io/kelas/kelasTerdaftar'
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasDaftar, setHasDaftar] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const token = Cookies.getItem('jwt');
      const response = await axios.get(apiUrl, {
        headers: {
          'cookies' : token,
          'Access-Control-Allow-Origin': '*', 
          'Content-Type': 'application/json'
      }
      });
      setData(response.data.kelas);
      setIsloading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error or set error state
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
  
    fetchData();
  }, []);
  

  const addClass =  async (id) => {
    const token = Cookies.getItem('jwt');
    console.log((token));
    try{
      const response = await axios.put("https://gympalfinal.whitesand-21748554.australiaeast.azurecontainerapps.io/kelas/menghapusKelas", {_id : id}, {
        headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
    } )
    // if (response.status==201 || response.status==209){ 
      setHasDaftar(true);
      fetchData();
    // }
    setMessage(response.data.message);
    }catch(err){
      console.log(err)
    }
  }

  const hasDaftarHandler = () =>{
    setHasDaftar(false);
  }

  return (
    <div className="min-vh-100">
      {hasDaftar && <MendaftarKelas message={message} close={hasDaftarHandler}/>}
      <div className="row row-cols-1 row-cols-md-3 gap-4 mx-auto py-3 container ">
        {isLoading ? <div className="w-screen h-screen position-fixed top-50 start-50"><svg width="50" className="spinner bg-transparent" height="50" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
            stroke="white"
          />
        </svg></div>
          : data.map((data, id) => (
          <div
            className="card p-3 rounded-5 w-25 mx-auto"
            style={{ background: "#1c232b" }}
            key={id}
          >
            <img src={JohnDoe} className="card-img-top rounded-4" alt="..." />
            <div className="card-body">
              <table>
                <tbody className="text-light">
                  <tr>
                    <td className="p-2">Nama</td>
                    <td className="p-2">:</td>
                    <td className="p-2 fw-bold">{data.namaKelas}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Date</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{new Date(data.tanggal).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Duration</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.durasi}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Instructor</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.instruktur}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={()=>{addClass(data._id)}} className="btn btn-danger w-100 text-light rounded-5">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardClass;

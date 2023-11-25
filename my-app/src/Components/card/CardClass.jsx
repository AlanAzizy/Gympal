import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assets/gympal5 1.png";
import axios from 'axios';
import Cookies from 'js-cookies';
import MendaftarKelas from "../PopupKelas/MendaftarKelas"

function CardClass() {

  const apiUrl = 'http://localhost:3001/kelas/kelasBelumDilakukan'
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasDaftar, setHasDaftar] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.kelas_filtered);
        setIsloading(false);
        console.log(response.data.kelas_filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or set error state
      } finally {
        setIsloading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const addClass =  async (id) => {
    const token = Cookies.getItem('jwt');
    console.log((token));
    try{
      const response = await axios.put("http://localhost:3001/kelas/mendaftarKelas", {_id : id}, {
        headers: {
            'cookies' : token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
    } )
    // if (response.status==201 || response.status==209){ 
      setHasDaftar(true);
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
    <>
      {hasDaftar && <MendaftarKelas message={message} close={hasDaftarHandler}/>}
      <div className="row row-cols-1 row-cols-md-3 gap-4 mx-auto py-3 container">
        {!isLoading && data.map((data, id) => (
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
            <button onClick={()=>{addClass(data._id)}} className="btn btn-success w-100 text-light rounded-5">Join Class</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardClass;

import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assests/john-doe.jpg";
import axios from 'axios';
import Cookies from 'js-cookies';

function CardClass() {

  const apiUrl = 'http://localhost:3001/kelas/kelasBelumDilakukan'
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
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
  

  const addClass = (id) => {
    const token = Cookies.getItem('jwt');
    console.log((token));
    axios.put("http://localhost:3001/kelas/mendaftarKelas", {_id : id}, {
      headers: {
          'cookies' : token,
          'Access-Control-Allow-Origin': '*', 
          'Content-Type': 'application/json'
      }
  } )
    .then((response) => { console.log(response)})
    .catch((error)=>{console.log(error)});
  }


  return (
    <>
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
                    <td className="p-2 fw-bold">{data.nama}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Date</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.tanggal}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Duration</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.durasi}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Instructor</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.durasi}</td>
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

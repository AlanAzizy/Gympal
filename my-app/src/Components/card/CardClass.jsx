import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assests/john-doe.jpg";
import axios from 'axios';

function CardClass() {

  const apiUrl = 'https://gympalv1.ambitiousmoss-bd081c95.australiaeast.azurecontainerapps.io/kelas/kelasBelumDilakukan'
  const [data, setData] = useState(null);
  useEffect(() => {
    // Make sure to perform the Axios request only once during initial component mount
    axios.get(apiUrl)
      .then(response => {
        // Handle the response data as needed
        setData(response.data);
      })
      .catch(error => {
        // Handle error if the request fails
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 gap-4 mx-auto py-3 container">
        {data.map((data, id) => (
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
                    <td className="p-2 fw-bold">{data.className}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Date</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.days}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Duration</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.duration}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Instructor</td>
                    <td className="p-2">:</td>
                    <td className="p-2">{data.trainer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="btn btn-success w-100 text-light rounded-5">Join Class</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardClass;

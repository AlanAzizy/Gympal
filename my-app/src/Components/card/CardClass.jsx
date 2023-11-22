import React from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "./../../assets/john-doe.jpg";

function CardClass() {
  const data = ClassData;
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

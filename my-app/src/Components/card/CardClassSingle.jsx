import React, { useEffect,useState } from "react";
import { ClassData } from "./cardDummy";
import JohnDoe from "../../Assets/gympal5 1.png";
import zumba from "../../Assets/zumba2.jpg";
import yoga from "../../Assets/yoga.jpg";
import question from "../../Assets/qmark.png";
import axios from 'axios';
import Cookies from 'js-cookies';
import MendaftarKelas from "../PopupKelas/MendaftarKelas"
import {Link} from "react-router-dom";

function CardClassSingle({data}) {

  return (
    <>
          <div
            className="card p-3 rounded-5 w-25 mx-auto"
            style={{ background: "#1c232b", fontFamily: "Poppins" , paddingBottom: "20px", marginBottom:"15px"  }}
          >
            {data.namaKelas === "pilletes" || data.namaKelas === "pilletes" ? (
              <img src={JohnDoe} className="card-img-top rounded-4" alt="..." />
            ) : data.namaKelas === "zumba" || data.namaKelas === "Zumba" ? (
              <img src={zumba} className="card-img-top rounded-4" alt="..." />
            ) : data.namaKelas === "yoga" || data.namaKelas === "Yoga" ? (
              <img src={yoga} className="card-img-top rounded-4" alt="..." />
            ) : (
              <img src={question} className="card-img-top rounded-4" alt="..." />
            )}
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
            <button onClick={()=>{}} className="btn btn-success w-100 text-light rounded-5">
            <Link to="/admineditkelas" state={{data}} className="btn btn-success w-100 text-uppercase fw-bold text-black rounded-5">
              Edit Kelas
              </Link>
              </button>
          </div>
    </>
  );
}

export default CardClassSingle;

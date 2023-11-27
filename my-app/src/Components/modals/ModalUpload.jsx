import React, {useState} from "react";
import DragAndDrop from "../inputs/DragAndDrop";
import Cookies from 'js-cookies'
import axios from "axios";
import MendaftarKelas from "../PopupKelas/MendaftarKelas";

export function ModalUpload({ show, close, data, toShow, message }) {
  const modalStyle = {
    display: show ? "block" : "none",
  };

  const backdropBlur = {
    display: show ? "block" : "none",
    backdropFilter: show ? "blur(10px)" : "none",
    transition: "backdrop-filter 0.3s ease-out",
  };

  

  const handleSend = async () => {
    try{
      const response = await axios.post("https://gympal.whitesand-21748554.australiaeast.azurecontainerapps.io/pembayaran/createPembayaran", {
        "metode" : data.method,
        "bulan" : data.months,
        "buktiPembayaran" : "ini dia"
      },{
        headers : {
          cookies : Cookies.getItem('jwt')
        }
      })

      if (response.status==200){
        close();
        message("Pembayaran berhasil");
      }else{
        message("Pembayaran Gagal");
      }
      toShow()
    }catch(error){
      console.log(error);
      close();
    }
    }


  return (
    <>
      
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={backdropBlur}
      ></div>
      <div
        className={`modal ${show ? "show" : ""}`}
        style={modalStyle}
        tabIndex={-1}
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <h3
              className="modal-title fw-bold py-3  text-center text-uppercase"
              style={{ letterSpacing: "10px" }}
            >
              Upload Files
            </h3>
            <div className="modal-body">
              <DragAndDrop />
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn border-3 fw-bold"
                  data-bs-dismiss="modal"
                  onClick={close}
                  style={{ borderColor: "#92A492" }}
                >
                  Change File
                </button>
                <button
                  type="button"
                  className="btn fw-bold"
                  style={{ background: "#92A492" }}
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalUpload;

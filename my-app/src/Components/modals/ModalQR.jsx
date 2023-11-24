import React from "react";
import Qr from "../../Assets/qr.png"
import ModalUpload from "./ModalUpload";
import { useState } from "react";

export function ModalQR({ show, close,data }) {
  const modalStyle = {
    display: show ? "block" : "none",
  };
  const [showFile, setShowFile] = useState(false);
  const handleOpen = () => {
    setShowFile(true);
    close(); // Menutup modal QR sebelum membuka modal upload
  };
  const handleClose = () => {
    setShowFile(false);
  };
  const backdropBlur = {
    display: show ? "block" : "none",
    backdropFilter: show ? "blur(10px)" : "none",
    transition: "backdrop-filter 0.3s ease-out",
  };
  return (
    <>
      <div>
        <div
          className={`modal-backdrop fade ${show ? "show" : ""}`}
          style={backdropBlur}
        ></div>

        {/* Modal */}
        <div
          className={`modal ${show ? "show" : ""}`}
          tabIndex={-1}
          style={modalStyle}
        >
          <div className="modal-dialog">
            <div className="modal-content text-center">
              <div className="header pt-3 px-3  border-0">
                <p className="">Pay before 27 October 2023 19:22</p>
              </div>
              <p
                className="detail-information py-2 w-100 fw-bold text-black"
                style={{ background: "#D9D9D9", fontSize: "1.5em" }}
              >
                Pay IDR 2.100.000 with QR
              </p>
              <div className="modal-body">
                <img src={Qr} alt="" className="mx-auto w-50" />
              </div>
              <div className="modal-footer border-0 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn border-3 fw-bold"
                  data-bs-dismiss="modal"
                  onClick={close}
                  style={{ borderColor: "#92A492" }}
                >
                  Change Method
                </button>
                <button
                  type="button"
                  className="btn fw-bold"
                  style={{ background: "#92A492" }}
                  onClick={handleOpen}
                >
                  Upload Payment Proof
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalUpload show={showFile} close={handleClose} data={data}/>
    </>
  );
}

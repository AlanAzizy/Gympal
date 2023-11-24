import React from "react";
import DragAndDrop from "../inputs/DragAndDrop";

export function ModalUpload({ show, close }) {
  const modalStyle = {
    display: show ? "block" : "none",
  };

  const backdropBlur = {
    display: show ? "block" : "none",
    backdropFilter: show ? "blur(10px)" : "none",
    transition: "backdrop-filter 0.3s ease-out",
  };
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
                  onClick={close}
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

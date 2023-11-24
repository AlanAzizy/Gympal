import { Link } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";
import { ArrowLeft } from "react-iconly";
import { ModalQR } from "../Components/modals/ModalQR";
import { useState } from "react";

function Payment() {
  const gradientBackgroundStyle = {
    background: "linear-gradient(to bottom, #4F6780, #777777)",
    height: "100vh",
  };

  const [showModal, setShowModal] = useState(false);
  const handlePayNow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="wrapper" style={gradientBackgroundStyle}>
        <Navbar />
        <div className="container d-flex flex-column gap-4">
          <Link
            to="/purchases"
            className="nav-link fw-bold text-light"
            style={{ fontSize: "2.5em" }}
          >
            <span className="fw-bold" style={{ color: "black" }}>
              <ArrowLeft />
            </span>
            Payment
          </Link>
          <div className="card bg-light p-3 rounded-2">
            <h4 className="fw-semibold" style={{ color: "#113D76" }}>
              Membership Detail
            </h4>
            <table>
              <tbody style={{ color: "#113D76" }}>
                <tr>
                  <td className="p-2">Duration</td>
                  <td className="p-2">:</td>
                  <td className="p-2 ">6 months</td>
                </tr>
                <tr>
                  <td className="p-2">Price</td>
                  <td className="p-2">:</td>
                  <td className="p-2">Rp 2.100.000</td>
                </tr>
                <tr>
                  <td className="p-2">Payment method</td>
                  <td className="p-2">:</td>
                  <td className="p-2">
                    <select className="form-select" style={{ width: "35%" }}>
                      <option value="">select one payment method</option>
                      <option value={"Ovo"}>Ovo</option>
                      <option value={"BCA"}>BCA</option>
                      <option value={"American Express"}>
                        American Express
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="text-uppercase text-black p-3 rounded-5 fw-bold mx-auto border-0 px-5 nav-link"
            style={{ background: "#92A492" }}
            onClick={handlePayNow}
          >
            pay now
          </button>
          <ModalQR show={showModal} close={handleClose} />
        </div>
      </div>
    </>
  );
}

export default Payment;

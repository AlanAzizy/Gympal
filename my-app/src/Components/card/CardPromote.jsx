import React from "react";
import { PromoteClassData } from "./cardDummy";
import { Link } from "react-router-dom";

function CardPromote() {
  const data = PromoteClassData;

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 gap-4 py-3">
        {data.map((data, id) => (
          <div
            className="rounded-5 p-4 w-25 mx-auto position-relative"
            style={{ background: "#1c232b" }}
            key={id}
          >
            <div className="card-body text-center text-light">
              <h5 className="card-title fw-bold display-3">{data.months}</h5>
              <h4 className="card-subtitle mb-2 text-light">Months</h4>
              <p className="card-text ">Access to Gympal 24/7</p>
              <p className="card-text ">Free classes every day</p>
              <h4 className="card-subtitle mb-2 text-light">
                Rp. {data.payYear}{" "}
                <span style={{ fontSize: "14px" }}> /month</span>
              </h4>
              <div className="wrapper p-3">
                <p
                  className="uppercase fw-bold position-absolute z-3"
                  style={{
                    fontSize: "24px",
                    letterSpacing: "10px",
                    width: "17%",
                    left: "38%",
                    bottom: "27%",
                    transform: "translateX(-50%)", // Center horizontally
                  }}
                >
                  WORTH
                </p>
                <div
                  className="position-relative rounded-4 z-0"
                  style={{ background: "#666667" }}
                >
                  <h4 className="card-subtitle mb-2 text-light p-3 position-relative z-3">
                    Rp. {data.payMonth}
                    <span style={{ fontSize: "14px" }}> /month</span>
                  </h4>
                </div>
              </div>
              <Link to="/payment" className="btn btn-success w-100 text-uppercase fw-bold text-black rounded-5">
                purchases now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardPromote;

import React from "react";
import { ClassHistoryData } from "./cardDummy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CardClassHistory() {
  const navigate = useNavigate();
  const data = ClassHistoryData;

  return (
    <>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Class History</h2>
          <div className="button-group d-flex gap-3 ">
            <button onClick={()=>navigate('/class')} className="btn" style={{ background: "#92A492", fontWeight:"900" }}>
              Join Class
            </button>
            <Link to="/purchases" className="btn" style={{ background: "#92A492", fontWeight:"900" }}>
              Purchase
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
          {data.map((item, id) => (
            <div className="col" key={id}>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.className}</h5>
                    <p className="card-text">{item.days}</p>
                    <p className="card-text">{item.time}</p>
                    <p className="card-text">
                      Instructor<span> </span>
                      {item.trainer}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardClassHistory;

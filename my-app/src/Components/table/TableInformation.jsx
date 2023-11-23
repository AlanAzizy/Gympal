import React from "react";
import JohnDoe from "../../Assets/john-doe.jpg"

function TableInformation() {
  return (
    <>
      <div className="container ">
        <div className="wrapper d-flex justify-content-between container w-100 py-3">
          <h1 className="display-6 fw-bold" style={{ color: "#D8CCC0" }}>
            Welcome!
          </h1>
          <button
            type="button"
            className=" border-0 px-5 rounded-4  text-light"
            style={{ background: "#952212" }}
          >
            Logout
          </button>
        </div>
        <table className="w-25">
          <img src={JohnDoe} alt={"john-doe"}  style={{background: "#D9D9D9"}} width={150} height={150} />
          <tbody style={{ color: "#E7E7E7" }}>
            <tr>
              <td className="p-2">Name</td>
              <td className="p-2">:</td>
              <td className="p-2">Hanna Anisa</td>
            </tr>
            <tr>
              <td className="p-2">Email</td>
              <td className="p-2">:</td>
              <td className="p-2">hana_fathiyah@gmail.com</td>
            </tr>
            <tr>
              <td className="p-2">Membership</td>
              <td className="p-2">:</td>
              <td className="p-2">Pro</td>
            </tr>
            <tr>
              <td className="p-2">Expired Date</td>
              <td className="p-2">:</td>
              <td className="p-2">29 December 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableInformation;

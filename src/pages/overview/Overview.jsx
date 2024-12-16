import React from "react";
import Navbar from "../../components/Navbar";
import "./overview.css";

import data from "../../../../data.json";
import { Link } from "react-router-dom";

export default function Overview() {
  console.log(data);

  return (
    <>
      <Navbar></Navbar>

      <div className="overview container">
        <h1 className="heading">Overview</h1>
        <div className="overview-container">
          <div className="overview-lhs table-container">
            <table className="overview-lhs-table">
              <caption className="subheading">Outstanding Amount</caption>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Amount</th>
                </tr>
                {data.map((data) => {
                  return (
                    <>
                      <tr>
                        <td data-cell="name">{data.username}</td>
                        <td data-cell="email">{data.email}</td>
                        <td data-cell="amount">₹{data.amount}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <div className="overview-lhs-viewMore-container">
              <Link className="overview-lhs-viewMore" to={'/billing'}>View More</Link>
            </div>
          </div>

          <div className="overview-rhs">
            <div className="subheading">Recurring</div>
          </div>
        </div>
      </div>
    </>
  );
}

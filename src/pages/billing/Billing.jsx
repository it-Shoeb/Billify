import React, { useState } from "react";
import "./billing.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import data from "../../data/data.json";
import ICONS from "../../components/assets";

export default function Billing() {
  const [currentdate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [date, setDate] = useState(currentdate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  console.log(date);

  return (
    <>
      <Navbar />
      <div className="billing container">
        <div className="billing-container">
          <h1 className="heading">Billing</h1>

          <div className="billing-filter-bar">
            <div className="billing-filter-bar-lhs">
              <form action="">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    handleDateChange(e);
                  }}
                />
                <hr />
                <div className="cta-last7days">last 7 days</div>
                <label htmlFor="" className="billing-search">
                  <input type="search" name="" id="" />{" "}
                  <img src={ICONS.search} alt="" />
                </label>
              </form>
            </div>

            <div className="billing-filter-bar-rhs">
              <div className="billing-cta-container">
                <div className="billing-export-cta">
                  <img src={ICONS.exports} alt="" />
                  Export
                </div>
                <div className="billing-filter-cta">
                  <img src={ICONS.filter} alt="" />
                  Filter
                </div>
                <Link to={"/billing/create"} className="billing-Create-cta cta">
                  <img src={ICONS.add} alt="" />
                  Create
                </Link>
              </div>
            </div>
          </div>

          <div className="billing-table-container table-container">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Invoice</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>

                {data.map((data) => (
                  <tr key={data.name}>
                    <td>{data.username} <br/> {data.client_id}</td>
                    <td>{data.client_id}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.signup_date}</td>
                    <td>{data.amount}</td>
                    <td>{data.is_active ? 'True': 'False'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./client.css";
import { Link } from "react-router-dom";
import ICONS from "../../components/assets";
import Navbar from "../../components/Navbar";

import data from "../../../../data.json";

export default function Client() {
  return (
    <>
      <Navbar />
      <div className="client">
        <div className="client-container container">
          <h1 className="heading">Clients</h1>
          <div className="client-filter-bar">
            <form action="">
              <label htmlFor="" className="client-filter-bar-search">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search client"
                />
                <Link>
                  <img src={ICONS.search} alt="" />
                </Link>
              </label>

              <Link to={'/client/create'} className="client-filter-bar-cta cta">
                <img src={ICONS.add} alt="" />
                Create Client
              </Link>
            </form>
          </div>

          <div className="client-table-container table-container">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Client Code</th>
                </tr>
                {data.map((data) => (
                  <tr key={data.client_id}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.client_id}</td>
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

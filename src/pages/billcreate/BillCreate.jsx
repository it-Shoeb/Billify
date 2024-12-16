import React from "react";
import "./billCreate.css";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";
import ICONS from "../../components/assets";

export default function BillCreate() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="billCreate container">
        <h1 className="heading2">Create Invoice</h1>
        <div className="billCreate-container">
          <div className="billCreate-container-lhs">
            <div className="billCreate-container-lhs-container">
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Client/ Firm Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Client/ Firm Email"
                />
                <div className="billCreate-container-lhs-container-split">
                  <input type="date" name="" id="" />
                  <select name="" id="">
                    <option value="">Card</option>
                    <option value="">Cash</option>
                    <option value="">Online</option>
                  </select>
                </div>
                <hr />
                <h3>Particulars</h3>
                <div className="form-particulars-container">
                  <table className="form-particulars-container-table">
                    <tbody>
                      <tr>
                        <th>particular</th>
                        <th>quatity</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="particular-details">
                            <p>Item Name</p>
                            <p>Item Code</p>
                          </div>
                        </td>
                        <td>
                          <input placeholder="Quantity" type="number" />
                        </td>
                        <td>
                          <div className="particular-details-delete">
                            <input placeholder="Amount" type="number" />
                            <Link>
                              <img
                                src={ICONS.deletes}
                                onClick={console.log("delete")}
                                className="form-particulars-delete"
                                alt=""
                              />{" "}
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Link to={''} className="billCreate-add-more-cta">
                    Add more particulars
                  </Link>
                </div>
                <input
                  className="cta"
                  type="submit"
                  value="Create Invoice"
                  onClick={(e) => {
                    handleForm(e);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="billCreate-container-rhs">
            <div className="billCreate-container-rhs-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

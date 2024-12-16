import React from "react";
import "./createClient.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function CreateClient() {
  return (
    <>
      <Navbar />
      <div className="createClient container">
        <h1 className="heading">Create Create</h1>
        <div className="createClient-form table-container">
          <form action="">
            <div className="createClient-form-lhs">
              <Link>
                <img
                  style={{ maxWidth: "80%" }}
                  src={
                    "https://i.pinimg.com/1200x/94/e4/cb/94e4cb5ae194975f6dc84d1495c3abcd.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>

            <div className="createClient-form-rhs">
                <div className="createClient-form-rhs-input-fields">
                    <label htmlFor="">
                        <p>Client Name: </p>
                        <input type="text" name="" id="" placeholder="Client Name" />
                    </label>
                    <label htmlFor="">
                        <p>Client Shop Name: </p>
                        <input type="text" name="" id="" placeholder="Client Shop Name" />
                    </label>
                    <label htmlFor="">
                        <p>Client Primary Email: </p>
                        <input type="text" name="" id="" placeholder="Client Primary Email" />
                    </label>
                    <label htmlFor="">
                        <p>Client Primary Contact: </p>
                        <input type="text" name="" id="" placeholder="Client Primary Contact" />
                    </label>
                    <label htmlFor="">
                        <p>Client Secondary Email: </p>
                        <input type="text" name="" id="" placeholder="Client Secondary Email" />
                    </label>
                    <label htmlFor="">
                        <p>Client Secondary Contact: </p>
                        <input type="text" name="" id="" placeholder="Client Secondary Contact" />
                    </label>
                    <label htmlFor="">
                        <p>Client Code: </p>
                        <input type="text" name="" id="" placeholder="Client Code" />
                    </label>
                    <label htmlFor="">
                        <p>Client Address: </p>
                        <input type="text" name="" id="" placeholder="Client Address" />
                    </label>
                </div>

                <div className="createClient-form-rhs-cta-container">
                    <Link to={"/client"}>Cancel</Link>
                    <Link to={"/client"} className=" createClinet-cta cta">Create Client</Link>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

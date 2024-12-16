import React from "react";
import "./createProduct.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function CreateProduct() {
  return (
    <>
      <Navbar />
      <div className="createProduct container">
        <h1 className="heading">Create Products</h1>

        <div className="createProduct-form table-container">
          <form action="">
            <div className="createProduct-form-lhs">
                <Link><img src={"https://i.pinimg.com/1200x/94/e4/cb/94e4cb5ae194975f6dc84d1495c3abcd.jpg"} alt="" /></Link>
            </div>
            <div className="createProduct-form-rhs">
              <div className="createProduct-form-rhs-input-fields"></div>
            </div>

            <div className="createProduct-form-cta-container">
              <Link to={"/product"}>Cancel</Link>
              <Link to={"/product"} className="createProduct-form-cta cta">
                Create Product
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

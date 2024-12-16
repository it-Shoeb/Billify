import React from "react";
import "./product.css";

import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";
import ICONS from "../../components/assets.jsx";

import product from "../../data/product.json";

export default function Product() {
  return (
    <>
      <Navbar />
      <div className="product">
        <div className="product-container container">
          <h1 className="heading">Products</h1>
          <div className="product-filter-bar">
            <form action="">
              <label htmlFor="" className="product-filter-bar-search">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Your Product"
                />
                <Link>
                  {" "}
                  <img src={ICONS.search} alt="" />
                </Link>
              </label>

              <Link
                to={"/product/create"}
                className="product-filter-bar-cta cta"
              >
                <img src={ICONS.add} alt="" />
                Create Product
              </Link>
            </form>
          </div>

          <div className="product-table-container table-container">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Product Code</th>
                  <th>Amount</th>
                </tr>
                {console.log(product)}
                {product.map((product) => (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.product_id}</td>
                    <td>{product.price}</td>
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

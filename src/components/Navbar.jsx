import React, { useState } from "react";
import "./navbar.css";
import ICONS from "./assets.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-uppernav">
            <div className="navbar-uppernav-lhs">
              <div className="navbar-uppernav-logo">Logo</div>
              <hr />
              <div className="navbar-uppernav-username">Username</div>
            </div>

            <div className="navbar-uppernav-rhs">
              <div className="navbar-uppernav-profile"></div>
              <div
                className="navbar-uppernav-rhs-menubar"
                onClick={() => toggleMenu()}
              >
                <img className="menu show" src={ICONS.menu} alt="" />
              </div>
            </div>
          </div>

          <div className={`navbar-lowernav ${menu ? "show" : null}`}>
            <div className="navbar-lower-lhs">
                <img className="close hide" src={ICONS.close} alt="" onClick={() => toggleMenu()}/>
              <ul>
                <li>
                  <Link to="/overview">
                    <img src={ICONS.overview} alt="" />
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/billing">
                    <img src={ICONS.billing} alt="" />
                    Billing
                  </Link>
                </li>
                <li>
                  <Link to="/client">
                    <img src={ICONS.client} alt="" />
                    Client
                  </Link>
                </li>
                <li>
                  <Link to="/product">
                    <img src={ICONS.product} alt="" />
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/report">
                    <img src={ICONS.report} alt="" />
                    Report
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-lower-rhs">
              <ul>
                <li>
                  <Link to="/assistant">
                    <img src={ICONS.assistant} alt="" />
                    Assistant
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

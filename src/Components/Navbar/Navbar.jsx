import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-0 bg1 padn">
      <div className="container-fluid d-flex justify-content-center bg2">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item bg py-4 px-5">
              <Link className="nav-link" aria-current="page" to='/' >
                Home
              </Link>
            </li>
            <li className="nav-item bg py-4 px-5">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item bg py-4 px-5">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item bg pt-2 px-5">
              <a className="nav-link txt" href="#">
                <img src="./assets/Logo1.png" style={{width:'150px',height:'55px'}} alt="" />
              </a>
            </li>
            <li className="nav-item bg py-4 px-5">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item bg py-4 px-5">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item bg bg5 py-4 px-5">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

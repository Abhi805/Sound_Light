import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid pad d-flex justify-content-center">
      <div className="container pad2 d-grid justify-content-center ">
        <p className="text-uppercase txt2 d-grid justify-content-center w-255 mx-auto  ">
          For the first time in india, experience the revolutionary
        </p>

        <p
          className="d-flex justify-content-center hap"
          style={{ marginTop: "-38px",marginBottom:"0" }}
        >
          ANYA BY EAW
        </p>
        <h2 className="way text-uppercase banner-text">3-Way Full Range adaptive</h2>
        <h2 className="d-flex justify-content-center way text-uppercase banner-text ">
          {" "}
          array MOdule
        </h2>
        <p className="d-grid justify-content-center w-40 mx-auto mar" >PLAN YOUR NEXT EVENT</p>
      </div>
      <iframe
        className="video"
        src="./assets/video/video.mp4"
        frameborder="0"
      ></iframe>
    </div>
  );
}

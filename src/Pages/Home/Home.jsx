import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-fluid pad d-flex justify-content-center">
      <div className="container pad2 d-grid justify-content-center ">
        <p className="text-uppercase txt2  ">
          For the first time in india, experience the revolutionary
        </p>
        
        <p className="d-flex justify-content-center hap" >ANYA BY EAW</p>
   
      </div>
      <iframe
        className="video"
        src="./assets/video/video.mp4"
        frameborder="0"
      ></iframe>
    </div>
  );
}

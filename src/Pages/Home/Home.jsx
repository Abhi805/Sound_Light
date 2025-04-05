// import React from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="container-fluid pad d-flex justify-content-center">
//       <div className="container pad2 d-grid justify-content-center ">
//         <p className="text-uppercase txt2 d-grid justify-content-center w-255 mx-auto  ">
//           For the first time in india, experience the revolutionary
//         </p>

//         <p
//           className="d-flex justify-content-center hap banner-text"
//           style={{ marginTop: "-38px",marginBottom:"0" }}
//         >
//           ANYA BY EAW
//         </p>
//         <h2 className="way text-uppercase banner-text">3-Way Full Range adaptive</h2>
//         <h2 className="d-flex justify-content-center way text-uppercase banner-text ">
//           {" "}
//           array MOdule
//         </h2>
//         <p className="btn1 neon-pulse  d-grid justify-content-center w-40 mx-auto mar neon-pulse" >PLAN YOUR NEXT EVENT</p>
      
//       </div>
//       <iframe
//         className="video"
//         src="./assets/video/video.mp4"
//         frameborder="0"
//       ></iframe>
//     </div>
//   );
// }



import React from "react";
import './Home.css'

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">DURGESH</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{
        backgroundImage: "url('https://stock.adobe.com/in/search?k=beautiful+pictures&asset_id=1319748901l')",
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div>
          <h1 className="display-4">BRINGING LIFE TO THE LIVE CONCERTS</h1>
          <button className="btn btn-danger mt-3">Plan Your Next Event</button>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">ABOUT US</h2>
          <p>We live and breathe every event, ensuring unmatched experiences for our clients.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>© 2025 Durgesh Sound. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

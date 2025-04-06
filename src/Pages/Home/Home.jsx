import React from "react";
import "./Home.css";
import BrandSlider from "./Ui/BrandSlider";

export default function Home() {
  return (
    <>
      <div className="container-fluid pad d-flex justify-content-center ">
        <div className="container pad2 d-grid justify-content-center ">
          <p className="text-uppercase txt2 d-grid justify-content-center w-255 mx-auto  ">
            For the first time in india, experience the revolutionary
          </p>

          <p
            className="d-flex justify-content-center hap banner-text"
            style={{ marginTop: "-38px", marginBottom: "0" }}
          >
            ANYA BY EAW
          </p>
          <h2 className="way text-uppercase banner-text">
            3-Way Full Range adaptive
          </h2>
          <h2 className="d-flex justify-content-center way text-uppercase banner-text ">
            {" "}
            array MOdule
          </h2>
          <p className="btn1 neon-pulse  d-grid justify-content-center w-40 mx-auto mar neon-pulse">
            PLAN YOUR NEXT EVENT
          </p>
        </div>
        <iframe
          className="video"
          src="./assets/video/video.mp4"
          frameborder="0"
        ></iframe>
      </div>

      {/* About Section */}
      <section
        className="container-fluid aboutsection text-center"
        style={{ margin: "100px 0px" }}
      >
        <div className="row">
          <div className="col-lg-5">
            <h4
              style={{ color: "red", marginLeft: "53px" }}
              className="text-start"
            >
              About US
            </h4>
            <h1 className="about , text-start abouth1">
              WE LIVE AND BREATHE EVERY EVENT
            </h1>
            <div className="text-start about-k">
              <a href="#" className="btn btn-danger aboutk">
                Know More About Us
              </a>
            </div>
          </div>
          <div
            className="col-lg-7 pare"
            style={{ marginTop: "90px", letterSpacing: "0.1cap" }}
          >
            <h5 style={{ color: "#7A7A7A" }} className="text-start">
              Our passionate and dedicated team strives to offer an unmatched
              experience, achieved through building strong relationships with
              all our clients and ensuring comfort and reassurance at every
              level. Every event is as special to us as it is to you. With a
              strong technical team of individuals and over 30+ years of
              experience and knowledge of the event industry, Durgesh Sound
              makes every event, no matter what size, a huge success.
            </h5>
          </div>
        </div>
      </section>
      <section className="container kap">
        <BrandSlider />
      </section>
      {/* Services Section */}
      <section className="container-fluid text-center sercon aboutsection text-start">
        <div className="row">
          <div className="col-4">
            <h4
              style={{ color: "red", marginLeft: "53px" }}
              className="text-start"
            >
              OUR SERVICES
            </h4>
            <h1 className="about , text-start abouth1">WHAT WE DO</h1>
          </div>
          <div className="col-6">
            <h5 style={{ color: "#7A7A7A" }} className="text-start">
              Whether you’re planning a wedding or corporate event for 100
              guests or 10,000+, Team Durgesh Sound will work with you to create
              a memorable event that will WOW your crowd. Check out how we can
              serve you!
            </h5>
          </div>
          <div className="col-2">
            <div className="text-start about-k">
              <a href="#" className="btn btn-danger aboutl">
                ALL SERVICES
              </a>
            </div>
          </div>
        </div>

        <div className="row mars">
          {[
            { img: "/assets/images/brand-events.jpg", text: "BRAND EVENTS" },
            { img: "/assets/images/fashion-shows.jpg", text: "FASHION SHOWS" },
            { img: "/assets/images/live-concerts.jpg", text: "LIVE CONCERTS" },
            { img: "/assets/images/weddings.jpg", text: "WEDDINGS" },
          ].map((item, index) => (
            <div className="col-md-3 position-relative" key={index}>
              <img
                src={item.img}
                alt={item.text}
                className="img-fluid w-100 h-100"
              />
              <div className="overlay-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
   {/* Events Section */}
<section className="container-fluid text-center py-5 p-2">
  <h2 className="mb-3">The Grand Shows</h2>
  <p className="mb-4">Experience our latest grand events and live concerts.</p>

  <div className="row g-3 justify-content-center">
    {/* First Column (Single Large Image) */}
    <div className="col-md-6 p-0">
      <img src="/assets/program-2.jpg" alt="Grand Show 1" className="img-fluid w-100 img4 " />
    </div>

    {/* Second Column (Two Smaller Images) */}
    <div className="col-md-6 d-flex flex-column p-0">
      <img src="/assets/program-1.jpg" alt="Grand Show 2" className="img-fluid w-100 img5 " />
      <img src="/assets/images14.jpg" alt="Grand Show 3" className="img-fluid w-100 img6" />
    </div>
  </div>

  {/* View All Events Button */}
  <div className="text-center about-k">
              <a href="#" className="btn btn-danger aboutl">
                ALL SERVICES
              </a>
            </div>
</section>


      {/* Contact Section */}
      <section className="container my-5 text-center">
        <h2>Planning Your Next Event?</h2>
        <p>
          Talk to us to book our bespoke end-to-end event services and use our
          fresh, innovative ideas to delight and engage your crowd.
        </p>
        <a href="#" className="btn btn-danger">
          Speak With Our Experts
        </a>
      </section>
    </>
  );
}

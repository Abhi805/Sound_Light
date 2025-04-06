import React from "react";
import "./Equipment.css"; // CSS file jisme styling hogi

const Equipment = () => {
  return (
    <>
      {/* Upar wali background image aur heading */}
      <div className="equipment-hero">
        <h1 className="equipment-title">OUR EQUIPMENTS</h1>
      </div>

      {/* Beech mein text */}
      <div className="text-center py-5">
        <p className="lead text-muted">
          The page is under maintenance. Please check back in sometime.
        </p>
      </div>

      {/* Neeche contact form aur left info */}
      <div className="equipment-contact-section">
        <div className="container">
          <div className="row g-4">
            {/* Left side */}
            <div className="col-md-6">
              <div className="equipment-box-left">
                <h2>PLANNING YOUR NEXT EVENT?</h2>
                <p>
                  Talk to us to book our event services. Fresh and innovative
                  ideas to engage your crowd.
                </p>
                <button className="btn btn-outline-light mt-3">
                  SPEAK WITH OUR EXPERTS
                </button>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="col-md-6">
              <div className="equipment-box-right">
                <h5 className="text-center text-white bg-danger py-2">
                  GET IN TOUCH
                </h5>
                <form className="p-4">
                  <input type="text" placeholder="Your Name" className="form-control mb-3" />
                  <input type="email" placeholder="Email" className="form-control mb-3" />
                  <input type="tel" placeholder="Phone Number" className="form-control mb-3" />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Tell us about your event"
                  ></textarea>
                  <button className="btn btn-danger w-100" type="submit">
                    LET’S GET STARTED
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
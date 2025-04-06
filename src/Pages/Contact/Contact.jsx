import React from "react";

export default function Contact() {
  return (
    <div>

      {/* Banner section with background image */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/assets/contactbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <h1 className="display-4 fw-bold">LET’S TALK FOR YOUR NEXT EVENT</h1>
      </div>

      {/* Contact Boxes */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="border p-4 rounded">
              <i className="bi bi-telephone-fill fs-1 text-danger"></i>
              <h5 className="mt-3">PHONE</h5>
              <p>+91 9691474449<br/>+91 9691474449</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border p-4 rounded">
              <i className="bi bi-envelope-fill fs-1 text-danger"></i>
              <h5 className="mt-3">EMAIL</h5>
              <p>events@gnvindia.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border p-4 rounded">
              <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
              <h5 className="mt-3">ADDRESS</h5>
              <p>
                shop no. 3&4, plotNo.53,Ratna Lok
                  colony Rd,behind Apollo permiere,vijaynagar
                  indore 452011
                <br/>
                
              
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="p-4 border rounded shadow">
              <h4 className="text-danger mb-4">HAVE A QUESTION?</h4>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Tell us about your event"></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">LET’S GET STARTED</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="container mb-5">
        <iframe
          title="Durgesh Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.322821473827!2d75.88850367522053!3d23.087536379134596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcb6f5c67407%3A0x132518b0dd7b54cb!2sDurgesh%20Sound%20%26%20Lighting%20Systems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1712325649389"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

   
    </div>
  );
}
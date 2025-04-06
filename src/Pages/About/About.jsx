import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="text-white text-center py-5" style={{ backgroundImage: 'url(/assets/about-bg.jpg)', backgroundSize: 'cover' }}>
        <h1 className="display-4 fw-bold">ABOUT US</h1>
      </section>

      {/* Intro Section */}
      <section className="container py-5">
        <h6 className="text-danger fw-bold">WE REINVENT MUSIC.</h6>
        <h2 className="fw-bold text-uppercase">Know About Central India’s Leader in Event Industry</h2>
        <img src="/assets/group-photo.jpg" alt="Durgesh Team" className="img-fluid my-4" />
        <p>
          Durgesh Sound and Lighting Systems, based in Indore, Madhya Pradesh, was founded in 2000 and has been pioneering the highest level of standard in the Event Industry. We ensure every detail & challenge of providing the most advanced sound, lighting, and other event services. No matter what the challenges in your event are, we are power-packed to fulfill all your requirements – promising the maximum success of your events.
        </p>
        <button className="btn btn-danger mt-3">SPEAK WITH OUR EXPERTS</button>
      </section>

      {/* Experience Section */}
      <section className="container py-5 border-top">
        <h6 className="text-danger fw-bold">WHY US</h6>
        <h2 className="fw-bold text-uppercase">The Leader, When it Comes to Experience</h2>
        <p>
          Team Durgesh has a vast and varied wealth of experience within the Event Industry and in guiding clients with the very best in event lighting and sound solutions. We simulate our services based on the most robust client requirements. The track record is evident with our efficient services, zero delays, and utmost reliability – being the central India’s very forefront sound and lighting service provider.
        </p>
        <p>
          Working professionally for over two decades among various industries enables us to be on the cutting edge of this industry.
        </p>
      </section>

      {/* Memoriam Section */}
      <section className="container py-5 d-flex align-items-center border-top">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h6 className="text-danger fw-bold">IN MEMORIAM: LATE MR. S. P. SONI</h6>
            <p>
              Late Mr. S. P. Soni was the legendary backbone of Durgesh. He was the founder and former CEO of Durgesh. He was a highly passionate, skilled, and visionary leader with over 30 years of experience in the industry. His understanding of how to mobilize exact management for events was based on scientific planning and maximized client benefits.
            </p>
            <p>
              His strategies blended experience with like-minded individuals, each possessing the skill sets and drive to create and deliver truly exceptional events.
            </p>
            <p>
              Though his presence is missed, his legacy lives on through the dedicated team he shaped. We salute his unmatched leadership and vision, and we continue to uphold the values and dreams that Mr. Soni instilled in Durgesh.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/assets/mr-soni.jpg" className="img-fluid rounded-circle" alt="Mr. Soni" style={{ maxWidth: '250px' }} />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-dark text-white py-5 text-center">
        <h5 className="text-danger">Our Team</h5>
        <h2 className="fw-bold">Experts of Team Durgesh</h2>
        <div className="container mt-4">
          <div className="row g-3">
            {[
              'Alesh Soni - Director',
              'Vijay Soni - Director',
              'Amit Soni - Director',
              'Manish Soni - Director',
              'Gaurav Soni - Director',
              'Sharad Soni - Executive Manager',
              'Prabhat Soni - Executive Manager',
              'Shubham Soni - Executive Manager'
            ].map((name, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="bg-light text-dark p-3 rounded">
                  <img src={`/assets/team-${index + 1}.jpg`} className="img-fluid rounded mb-2" alt={name} />
                  <p className="fw-bold mb-0">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="container py-5 text-center">
        <h6 className="text-danger">OUR CLIENTS</h6>
        <h2 className="fw-bold">WE LOVE OUR CLIENTS & THEY LOVE US</h2>
        <div className="row mt-4">
          {[...Array(20)].map((_, i) => (
            <div className="col-4 col-md-2 mb-3" key={i}>
              <img src={`/assets/client-${i + 1}.png`} className="img-fluid" alt={`Client ${i + 1}`} />
            </div>
          ))}
        </div>
        <button className="btn btn-danger mt-3">LET'S TALK ABOUT YOUR NEXT EVENT</button>
      </section>
    </div>
  );
};

export default About;
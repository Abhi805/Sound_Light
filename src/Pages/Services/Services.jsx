import React from 'react'

export default function Services() {
  return (
    <>
       <div className="container-fluid p-0">
      <div className="position-relative text-center text-white">
    <img src="bgimage.jpg" className="img-fluid w-100" style={{height: "500px", objectFit: "cover"}} alt="Header"/>
    <h1 className="position-absolute top-50 start-50 translate-middle display-4 fw-bold">SERVICES</h1>
  </div>


  <div className="container py-5">
    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="assets/image19.png.jpg" className="img-fluid rounded shadow" alt="Live Concert"/>
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">LIVE CONCERTS</h2>
        <p>We create complimented live concert experiences with staging, sound, and lighting services. We ensure that everlasting moment before the audience is wowed.</p>
      </div>
    </div>


    
  

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="assets/image20.png.jpg" className="img-fluid rounded shadow" alt="Fashion Show"/>
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">FASHION SHOWS</h2>
        <p>From initial concept to execution, we provide complete fashion show production, including staging and coordination.</p>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="assets/image21.png.jpg" className="img-fluid rounded shadow" alt="Corporate Meet"/>
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">CORPORATE MEETS</h2>
        <p>We deliver impactful corporate events with professional AV setups, creative execution, and flawless coordination.</p>
      </div>
    </div>

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="assets/image24.png.jpg" className="img-fluid rounded shadow" alt="Brand Event"/>
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">BRAND EVENTS</h2>
        <p>We specialize in impactful brand events with expert AV, light & sound systems that create a lasting impression.</p>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="assets/image25.png.jpg" className="img-fluid rounded shadow" alt="Theme Party" />
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">THEME PARTIES</h2>
        <p>Fun, vibrant, and fully customized themed parties with decorations, lighting, and live entertainment to suit your imagination.</p>
      </div>
    </div>

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="assets/image26.png.jpg" className="img-fluid rounded shadow" alt="Wedding" />
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">WEDDINGS</h2>
        <p>From planning to execution, we bring style and elegance to your wedding through AV, décor, and a personal touch.</p>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="assets/image29.png.jpg" className="img-fluid rounded shadow" alt="Exhibition" />
      </div>
      <div className="col-md-6">
        <h2 className="text-danger fw-bold">EXHIBITIONS</h2>
        <p>We provide complete exhibition setups with AV, staging, branding and booth management tailored to your goals.</p>
      </div>
    </div>
  </div>


  <footer className="bg-dark text-white text-center py-4">
    <p className="mb-0">&copy; 2025 Duresh Events. All rights reserved.</p>
  </footer>
</div>

    </>
  )
}
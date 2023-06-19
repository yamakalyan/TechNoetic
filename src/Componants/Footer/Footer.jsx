export default function Footer() {
  return (
    <>
  <footer className="container-fluid py-5 bg-light" id="footer">
      <div className="container">

    <div className="row" id="map">
     
      <div className="col-md col-lg my-auto">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.547131230907!2d78.49333849083915!3d17.398654333961556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c757ba3c1f%3A0xca9d2388bab1d5b4!2sBagh%20Lingampally%2C%20New%20Nallakunta%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686204255240!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   </div>
      </div>
    
      </div>

    </div>
</footer>
<div className="container-fluid text-light py-3" style={{background : "rgb(52 52 52)"}}>
  <div className="container py-3">
<div className="row my-auto">
    <div className="col-6 col-md">
      {/* <h5>Features</h5> */}
      <ul className="list-unstyled text-small">
      </ul>
    </div>
    <div className="col-6 col-md">
      {/* <h5>Resources</h5> */}
    </div>
    <div className="col-6 col-md">
      {/* <h5>Links</h5> */}
      <ul className="list-unstyled text-small">
      </ul>
    </div>
    <div className="col-6 col-md">
      {/* <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="" href="#team">Team</a></li>
        <li><a className="" href="#map">Location</a></li>
        <li><a className="" href="#">Privacy</a></li>
        <li><a className="" href="#">Terms</a></li>
      </ul> */}
    </div>
  </div>
<div className="container">
<div className="row my-5">
  <div className="d-flex justify-content-center">
    <span className="mx-3 h4"><a><i className="bi bi-instagram"></i></a></span>
    <span className="mx-3 h4"><a><i className="bi bi-facebook"></i></a></span>
    <span className="mx-3 h4"><a><i className="bi bi-whatsapp"></i></a></span>
    <span className="mx-3 h4"><a><i className="bi bi-linkedin"></i></a></span>
    <span className="mx-3 h4"><a><i className="bi bi-phone"></i></a></span>
    <span  className="mx-3 h4"><a><i className="bi bi-twitter"></i></a></span>
  </div>
</div>
  {/* <p className="float-right"><a href="#">Back to top</a></p> */}
    <p className="text-center">&copy; 2023 TechNoetic Services Pvt Ltd.</p>
    <p className="text-center">Designed by <a href="https://yamakalyan3120.web.app" target="_blanck">Yama kalyan</a></p>
</div>
</div>
</div>

    </>
  )
}

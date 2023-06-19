import "./Contact.css"
export default function Contact() {
  return (
    <div className="" id="write-to-us">
      <div className="container py-5"  data-aos="zoom-out">
        <div className="section-header mt-4 text-dark py-4">
          <h1 className="font-weight-bold display-5 text-dark"> 
          Contact us TechNoetic</h1>
        </div>
        <div className="row"  id="contact">
          <div className="col-md-5 col-lg-5 my-auto">
            <div>
              <h3>Regd. office : </h3>
              <p>Plot No-29, #5-3-389/1, Shanthi Complex , Ground floor.</p>
              <p>Kukatpally, Hyderabad-500072</p>
            </div>
            <div>
              <h3>Mobile number : </h3>
              <p>+91 9550049382</p>
            </div>
            <div>
            <h3>Email : </h3>
              <p>yamakalyan6@gmail.com</p>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
            <form>
              <div className="form-group">
                {/* <label className="float-left">Enter name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full name"
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter mobile</label> */}
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter Email</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Business name"
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Write your message here</label> */}
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Explain how can we help you "
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
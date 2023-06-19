import "./Jobs.css"
export default function Jobs() {
  return (
    <div className="jobs" id="jobs">
      <div className="container p-4 bg-blur" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-md-6 col-lg-6 mx-auto my-4">
            <h1 className="text-primary text-center">Worlds #1 Technology Job Board</h1>
            <h3 className="text-center text-dark">Where Start-ups Hangout</h3>
          </div>
        </div>
          <form>
        <div className="row ">
            <div className="col-md col-lg mb-3">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control font-weight-light"
                placeholder="Job title, Company, keywords"
                required
              />
            </div>
            </div>
            <div className="col-md col-lg mb-3">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control font-weight-light"
                placeholder="City, State, Country"
                required
              />
            </div>
            </div>
        <div className="row">
            <div className="col-md-4 col-lg-4 mx-auto">
              <button className="btn btn-primary btn-block btn-lg">Search</button>
          </div>
        </div>
        </div>
          </form>
      </div>
    </div>
  );
}

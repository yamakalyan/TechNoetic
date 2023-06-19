export default function AreYouHiring() {
  return (
    <>
    <div className="hiring bg-light text-dark" id="hiring">
      <div className="container">
        <div className="row featurette p-3 " data-aos="zoom-out">
          <div className="col-md-7 m-auto ">
            <h2 className="display-3">
              Are you <span className="text-muted">Hiring ?</span>
            </h2>
            <p className="lead">
              We understand the importance of finding the right candidates to
              fill your job openings and contribute to the success of your
              organization. we take pride in our pool of
              highly qualified and talented individuals who are eager to embark
              on new career opportunities. Allow us to introduce you to our
              exceptional candidates who are ready to make a positive impact on
              your team.
            </p>
            <button className="btn btn-outline-success">Connect with us</button>
          </div>
          <div className="col-md-5">
            <img src="/imgs/hiring.png" className="img-fluid" />
          </div>
        </div>
      </div>
      </div>
      <div className="bg-white text-dark">
        <div className="container">
        <div className="row featurette p-3 " data-aos="zoom-out">
        <div className="col-md-5">
            <img src="/imgs/hired.svg" className="img-fluid" />
          </div>
          <div className="col-md-7 m-auto ">
            <h2 className="display-3">
              Get Hired<span className="text-muted"> Soon !</span>
            </h2>
            <p className="lead">
              We understand the importance of finding the right candidates to
              fill your job openings and contribute to the success of your
              organization. we take pride in our pool of
              highly qualified and talented individuals who are eager to embark
              on new career opportunities. Allow us to introduce you to our
              exceptional candidates who are ready to make a positive impact on
              your team.
            </p>
            <button className="btn btn-outline-success float-right">Apply now ?</button>
          </div>

        </div>
        </div>
    </div>
    </>
  );
}

import { Link, Outlet } from "react-router-dom";

export default function Jobs() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container ">
        <div>
          <h1 className="text-center text-primary">Jobs</h1>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">
              Jobs List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs/createjob">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
        <div className="row">
          <div className="col-md col-lg">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container mt-5">
        <div>
          <h1 className="text-center mb-3 text-primary">Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-md col-lg">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

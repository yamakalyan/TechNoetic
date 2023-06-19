import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import "../Home/Home.css";
// import ClientHome from "../Info/ClientHome";
import Jobs from "../Jobs/Jobs";
import AreYouHiring from "../AreYouHiring/AreYouHiring";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate()
  return (
    <div id="home">
      <div className="container" id="welcome">
        <div className="row ">
          <div className="col-md-6 col-lg-6 my-auto">
            <h1 className="display-5 my-3">Delivering future ready solutions!</h1>
            <p>Directing you towards an improvised future inclusive of opportunities for all, with the magic of technology and talent of the industry experts.</p>
            <button className="btn btn-outline-primary my-3" onClick={()=>navigator("/contact")}>Lets talk</button>
          </div>
          <div className="col-md-6 col-lg-6">
            <img src="/imgs/testimonials.jpg" className="img-fluid"/>
          </div>
        </div>
      </div>
      <Jobs/>
      <Services />
      <AreYouHiring/>
      {/* <ClientHome /> */}
      <Contact />
    </div>
  );
}

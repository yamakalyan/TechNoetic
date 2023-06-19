import { useEffect, useState } from "react"
import "../Navbar/Header.css"
import { Link, NavLink, useLocation } from "react-router-dom"

export default function Header() {
  const [active, setActive] = useState(false)
  const [loginUser, setLoginUser] = useState(false)
  const [bgChangeHeader, setBgChangeHeader] = useState("bg-header")
  const [bgChangeNav, setBgChangeNav] = useState("next-header")

  const {pathname} = useLocation()
  
  const handleScroolNav =()=>{
     window.scrollY > 0 ? (setActive(true), setBgChangeHeader("next-header"), setBgChangeNav("bg-header")) :
      (setActive(false), setBgChangeHeader("bg-header"), setBgChangeNav("next-header"))
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroolNav)
    return ()=> window.removeEventListener("scroll", handleScroolNav)
  },[])

  return (
    <div className="container">
      <header className="d-flex flex-column  fixed-top" id="header">
  <nav className={`navbar navbar-expand-lg ${bgChangeHeader} border-bottom p-3`}>
        <div className="container">
    <Link className="navbar-brand" to="/" ><img src="/imgs/logo.jpg" width="40px" className="mx-3" />TechNoetic</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      {
        loginUser ?

      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard" >Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jobs" >Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile" >Profile</NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-light border-primary mx-3">Log out</button>
        </li>
      </ul>
      :
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services" >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact us</NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-light border-primary mx-3">Login</button>
        </li>
      </ul>
      }
    </div>
        </div>
  </nav>
  {/* Below navbar */}
  {
    active  && pathname === "/" &&
  <div className={`container-fluid ${bgChangeNav} below-nav`}>
  <div className="container">
  <nav className={`navbar navbar-expand-lg ${bgChangeNav} p-0`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto"> 
      <li className="nav-item mx-5">
        <a className="nav-link" href="#services">Services</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#hiring">Hiring</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#clients">clients</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#map">Location</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
  }

</header>
    </div>
  )
}

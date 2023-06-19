import './App.css'
import Contact from './Componants/Contact/Contact'
import Footer from './Componants/Footer/Footer'
import Home from './Componants/Home/Home'
import Header from './Componants/Navbar/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ServicesFull from './Componants/Services/ServicesFull'
import ScrollBtn from './Componants/Scroll/ScrollBtn'

import Dashboard from "./Componants/AfterLogin/Dashboard/Dashboard"
import Recent from "./Componants/AfterLogin/Dashboard/Links/Recent"

import Profile from "./Componants/AfterLogin/Profile"
import Jobs from "./Componants/AfterLogin/Jobs/Jobs"
import JobsList from './Componants/AfterLogin/Jobs/Links/JobsList'
import PostJob from './Componants/AfterLogin/Jobs/Links/PostJob'



function App() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<ServicesFull />}/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<Recent />}/>
      </Route>
      <Route path='/profile' element={<Profile/>}/>

      <Route path='/jobs' element={<Jobs/>}>
        <Route index element={<JobsList/>}/>
        <Route path='/jobs/createjob' element={<PostJob />}/>
      </Route>
      
    </Routes>
    <ScrollBtn/>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

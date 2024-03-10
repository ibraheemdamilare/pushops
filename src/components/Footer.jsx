import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="footer-container">
            
            <div className="section-body">
                <p>ABOUT OUR COMPANY</p>
                <h2>Your Success Is Our Mission </h2>
                <h5 className='descript'>
                    At <span style={{fontStyle: 'italic'}}>PushOps</span>, we strive to empower individuals and organizations through innovative technology solutions. Our mission is to simplify complexity, enhance efficiency, and foster creativity by delivering cutting-edge software and services that enable our clients to thrive in a rapidly evolving landscape.
                </h5>
                <Link to={"/Services"}><button>Read More</button></Link>
                
            </div>
            <img src="https://img.freepik.com/free-photo/male-employee-getting-used-his-new-office-job-along-with-female-colleagues_23-2149034607.jpg?t=st=1709146255~exp=1709149855~hmac=c4d08eb272525da37fbeeb416da5bef39bdfa78df8d76cb53115d0dd5cd4d7a2&w=996" alt="" />
        </div>
        </div>
       
    </>
  )
}

export default Footer
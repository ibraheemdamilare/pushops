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
            <img src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/male-employee-getting-used-his-new-office-job-along-with-female-colleagues.jpg?alt=media&token=7cc15407-be7d-4954-b396-7d8d87f2ef8f" alt="" />
        </div>
        </div>
       
    </>
  )
}

export default Footer
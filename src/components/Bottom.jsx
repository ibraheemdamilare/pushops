import React from 'react'
import './Bottom.css'
import { FaCopyright, FaLinkedin } from 'react-icons/fa'

const Bottom = () => {
  return (
    <div className='bottom'>
        <div className="containers">
            <img src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/PushOps00-removebg-preview.png?alt=media&token=b4b1bc56-9ca3-4b29-8612-12b213190eb2" alt="" />

            <div className="first">
                <h2>Office Address</h2>
                <p>Ikeja, Lagos state, Nigeria </p>
                <p>+234 (0) 901 110 8942 </p>
            </div>

            <div className="second">
                <h2>Useful Links</h2>
                <p>Home</p>
                <p>Why Choose Us</p>
                <p>About Us</p>
                <p>Services</p>
            </div>

            <div className="third">
                <h2>Socials</h2>
                <FaLinkedin className='linkedin' />
            </div>
        </div>
        <p className='margin-left'><FaCopyright className='copyright' /> <span style={{fontStyle: 'italics', color: 'white', fontSize: '10px', marginBottom: '20px'}}>PushOps 2023</span></p>
    </div>
  )
}

export default Bottom
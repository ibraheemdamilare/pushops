import React from 'react'
import './PageTop.css'
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PageTop = () => {
  return (
    <>
        <section className="top-div">
            <div className="details">
                <div> <FaClock className='icon' /></div>
                <p>Mon-Fri 09:00 - 15:00 </p>
            </div>
            <div className="details">
                <div> <FaPhoneAlt className='icon' /></div>
                <p>+234 (0) 901 110 8942 </p>
            </div>
            <div className="details">
                <div> <FaLocationDot className='icon' /></div>
                <p>Ikeja, Lagos state, Nigeria </p>
            </div>
        </section>
    </>
  )
}

export default PageTop
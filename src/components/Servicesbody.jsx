import React from 'react'
import './Servicesbody.css'
import { FaBusinessTime, FaSearchDollar } from 'react-icons/fa'
import { MdManageAccounts } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";

const Servicesbody = () => {
  return (
    <section className='services-body'>
        <p className="header-text">What We Do</p>
        <h2 className="header-bold">We Provide Services That Help Your Businesses Scale</h2>

        <div className="services-body-flex">
            <div className="services-text-container">
                <FaBusinessTime className='iconic' />
                <h2>Marketing Strategy</h2>
                <p>Our marketing strategy centers on showcasing the power of automation and CI/CD in modern software development. Through targeted content, thought leadership, social media engagement, and strategic partnerships, we educate and empower organizations to thrive in the digital age.</p>
            </div>
            <img className='image' src="https://img.freepik.com/free-photo/people-office-table-meeting_23-2148817064.jpg?t=st=1708877178~exp=1708880778~hmac=9c619717402b650f3a95830074f1dc4d75fbff4d97e3beba8b6e8ad59bba07a9&w=1060" alt="" />
        </div>

        <div className="services-body-flex">
            <img className='image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/management-coaching-business-dealing-mentor-concept.jpg?alt=media&token=557abf8c-952c-4580-8afb-2f758b3877b3" alt="" />
            <div className="services-text-container">
                <MdManageAccounts className='iconic' />
                <h2>Management</h2>
                <p>At <span style={{fontStyle: "italic"}}>PushOps</span>, we empower businesses to thrive by optimizing their software development processes. Through automation, continuous integration, and deployment strategies, we streamline operations, enhance collaboration, and accelerate time-to-market. Let us transform your business with our tailored DevOps solutions.</p>
            </div>

        </div>

        <div className="services-body-flex">
            <div className="services-text-container">
                <TbBusinessplan className='iconic' />
                <h2>Business Investment</h2>
                <p>We believe in investing in businesses' success through cutting-edge DevOps solutions. Our expertise in automation, continuous integration, and deployment empowers companies to scale efficiently, innovate rapidly, and stay competitive in today's dynamic market. Partner with us to unlock the full potential of your business and drive sustainable growth.</p>
            </div>
            <img className='image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/businessman-signing-contract.jpg?alt=media&token=ce2d545a-de30-4a5f-9aa4-953d715565eb" alt="" />
        </div>

        <div className="services-body-flex">
            <img className='image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/back-view-picture-african-man-sitting-office-coworking.jpg?alt=media&token=706978c7-8596-4a05-948f-246869777293" alt="" />
            <div className="services-text-container">
                <FaSearchDollar className='iconic' />
                <h2>Research</h2>
                <p>Our tailored DevOps solutions leverage the latest advancements in automation, continuous integration, and deployment to propel your business forward. Partner with us to stay ahead of the curve and achieve unparalleled efficiency and competitiveness.</p>
            </div>

        </div>

    </section>
  )
}

export default Servicesbody
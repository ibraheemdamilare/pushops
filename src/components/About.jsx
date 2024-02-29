import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <div className="about-us">
            <p>ABOUT US</p> 
            <h2>We Deliver Only Exceptional Work For Our clients</h2>
            <div className="boddy">
                <div className="flex-group">
                    <img src="https://img.freepik.com/free-photo/people-office-table-meeting_23-2148817064.jpg?t=st=1708877178~exp=1708880778~hmac=9c619717402b650f3a95830074f1dc4d75fbff4d97e3beba8b6e8ad59bba07a9&w=1060" alt="" />
                    <div className="body">
                    <p>
                        We are made up of a team of individuals with extensive experience in innovation and digital transformation. We work mainly in the creation of digital solutions and products based on new technologies in an open innovation model.
                    </p>
                    <p style={{marginTop: '-10px'}}>Our team of creative and innovative geeks think and work differently.</p>
                    </div>

                </div>
                <div dir='rtl' className="padd">
                    <div className='bg-group' dir='ltr'>
                        <div className="letter">
                            <h3 >Clients</h3> <br />
                            <h2 >254+</h2>
                            <h4 >Numerous satisfied clients worldwide</h4>
                        </div>
                        <div className="letter" > 
                            <h3 >Workforce</h3> <br />
                            <h2 >32+</h2>
                            <h4 >Increasing experienced workforce</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    </>
  )
}

export default About
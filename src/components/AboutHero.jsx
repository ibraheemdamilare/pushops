import React from 'react'
import './AboutHero.css'

const AboutHero = () => {
  return (
    <div className='about-hero'>
        <div>
            <div className="image-containeer">
            <img className='about-image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/programmer-scanning-screen-his-smartwatch-with-smartphone-camera.jpg?alt=media&token=c6d60bcc-c44c-4594-8bf3-081a35f261a1" alt="" />
            </div>
            
            <div className="about-hero-text">
                <h2 className='about-texting-h2'>Website Development</h2>
                <p className='about-texting'>Our website development services range from developing a simple single static page of plain text to complex web applications, electronic businesses etc.</p>
                <div className="btn-contain">
                    <p className="button">Read More</p>
                </div>
            </div>
        </div>

        <div>
            <div className="image-containeer">
            <img className='about-image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/colleagues-assisting-business-meeting.jpg?alt=media&token=fc45505d-fd49-4258-a9b4-49117a450190" alt="" />
            </div>

            <div className="about-hero-text">
                <h2 className='about-texting-h2'>Marketing Solutions</h2>
                <p className='about-texting'>Our marketing solution services is a marketing communication specialist supporting industrial customers with reaaching their target audiences across the global market.</p>
                <div className="btn-contain">
                    <p className="button">Read More</p>
                </div>
            </div>
        </div>

        <div>
            <div className="image-containeer">
            <img className='about-image' src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/software-developer-using-terminal-window-app-laptop-learning-code-new-user-interface-program-developing-cloud-computing-online-server-with-firewall-security-css-html-script.jpg?alt=media&token=1e6f3e50-064a-438f-8bcb-d79ce4aecde9" alt="" /> 
            </div>
            <div className="about-hero-text">
                <h2 className='about-texting-h2'>Application Development</h2>
                <p className='about-texting'>Our website development services range from developing a simple single static page of plain text to complex web applications, electronic businesses etc.</p>
                <div className="btn-contain">
                    <p className="button">Read More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero
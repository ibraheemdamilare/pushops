import React from 'react'
import "./Section.css"
import ProgressBar from './ProgressBar'

const ChooseUs = () => {
  return (
    <section className="bgcolorr" id='choose'>
        <div className="container">
            <img src="https://img.freepik.com/free-photo/team-workmates-using-laptop-plan-business-project-boardroom-office-colleagues-working-together-company-growth-development-design-marketing-strategy-presentation_482257-37181.jpg?t=st=1709131117~exp=1709134717~hmac=30c16b8a7cdcab4e5ec903239c2f8bb8cde8b1026091ab549ffcc709cf240eb1&w=1060" alt="" />
            <div className="section-body"> 
                <p>WHY CHOOSE US</p>
                <h2>Benefits of Choosing Our Company</h2>
                <h5 className='descript'>
                    By choosing <span style={{fontStyle: 'italic'}}>PushOps</span>, you can expect innovative solutions tailored to your needs, streamlined processes that save time and resources, and reliable support to ensure the success of your projects. A trial will definitely convince you.
                </h5>
                <div>
                    <h1 className='recommend'>Locally Recommended</h1>
                    <ProgressBar filled={'80'} />
                </div>
                <div>
                    <h1 className='recommend'>Projects Completed Successfully</h1>
                    <ProgressBar filled={'90'} />
                </div>
                
            </div>
        </div>
    </section >
  )
}

export default ChooseUs
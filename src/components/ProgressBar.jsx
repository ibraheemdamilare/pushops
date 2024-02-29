import React from 'react'

const ProgressBar = ({filled}) => {
  return (
    <div className='progress' style={{height: '30px', backgroundColor: 'white'}}>
        <div style={{height: '100%', width: `${filled}%`, backgroundColor: '#863C95' }}>
            <p style={{color: 'white', fontFamily: "Poppins", textAlign: 'center', paddingTop: '5px'}}>{filled}%</p>
        </div>
    </div>
  )
}

export default ProgressBar
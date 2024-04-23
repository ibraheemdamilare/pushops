import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [links, setLinks] = useState([{title: 'Home', id: 0, isActive: true}, {title: 'About Us', id: 1, isActive: false}, {title: 'Services', id: 2, isActive: false}])
    const [showLinks, setShowLinks] = useState(false)
    const changeStatus = (data) => {
        setLinks(
            links.map((task)=> {
                if (task.title === data) {
                    return {...task, isActive: true }
                } else {
                    return {...task, isActive: false} 
                }
            })
        )
    }
    const handleClick = () => {
            setShowLinks(!showLinks)
            changeStatus(item.title)
    }
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/billionairemindsetjobs.appspot.com/o/PushOps00-removebg-preview.png?alt=media&token=b4b1bc56-9ca3-4b29-8612-12b213190eb2" alt="" />
            <div>
                <div >
                {showLinks &&  <div className='display'>
                    {links.map((item)=> {
                    return (<div style={{marginTop: "8px"}}>
                        <Link to={`${item.title}`} className= {`${item.isActive && 'border'}`} onClick={handleClick()}>{item.title}</Link>
                    </div>)
                })}
                </div>}
                </div>
       
                <div className='display-desktop'>
                {links.map((item)=> {
                    return (<div>
                        <Link to={`${item.title}`} className={item.isActive && 'border'} onClick={()=> changeStatus(item.title)}>{item.title}</Link>
                    </div>)
                })}
                </div>
            </div>
            {showLinks ? <FaXmark className='FaBars' onClick={()=> {setShowLinks(!showLinks)}} /> :<FaBars onClick={()=> {setShowLinks(!showLinks)}} className='FaBars' /> }
        </div>
    </div>
  )
}

export default Navbar
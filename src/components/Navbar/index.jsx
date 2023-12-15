import React from 'react'
import "./index.css"
import Button from '../Button'
const Navbar = () => {
  return (
    <div className='navbar d-flex space-between row bg-black'>
        <div className="logo fs-lg">
            Survey 
        </div>
        <div className='d-flex gap'>
        <Button  text="login"/>
        <Button text="register"/>
        </div>
    </div>
  )
}

export default Navbar
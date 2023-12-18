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
        <Button  text="login" animation={true}/>
        <Button text="register" animation={true}/>
        </div>
    </div>
  )
}

export default Navbar
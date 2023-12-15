import React from 'react'
import "./index.css"

const Button = ({text}) => {
  return (
    <div
    className='primary-btn primary-bg '>{text}
    <div className="underline"></div></div>
  )
}

export default Button
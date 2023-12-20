import React from 'react'
import "./index.css"

const Button = ({text,className,animation,onClick}) => {
  return (
    <div
    className={`primary-btn primary-bg  ${className}`}
    onClick={onClick}
    >{text}
    <div className={`${animation?"underline":"overlay-btn "} `}></div>
    </div>
  )
}

export default Button
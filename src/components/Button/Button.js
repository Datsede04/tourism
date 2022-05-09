import React from 'react'
import { Component } from 'react'
const Button = (props) => {
  return (
    
    <a href={`#${props.link}`} className={`btn ${props.color}`}>{props.name}</a>
  )
}

Component.defaultProps = {
color: "btn--white"
}
export default Button
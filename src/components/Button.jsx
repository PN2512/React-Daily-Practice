
import React from 'react'
import './Button.css'
const MyButton = (props) => {
//const MyButton = ({handleClick,text,children}) => {
  return (
    <>
    {/* <button onClick={props.handleClick}>{props.children}</button>   */}
    {/* <button onClick={handleClick}>{children}</button> */}
    <button>{props.icon}</button> 
    </>
  )
}

export default MyButton

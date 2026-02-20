import React from 'react'
import './Navbar.css'
import {list} from '../data/data.js'
const Navbar2 = () => { 
  return (
   <>
   <ul className='navbar'>
    {list.map(
      (item,index)=>{
        return <li key={index}>{item}</li>
      }
    )}
   </ul>
   </>
  )
}

export default Navbar2

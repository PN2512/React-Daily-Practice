import React from 'react'
import './Navbar.css'
const Navbar1 = () => {

    const list=["Home","About","Product","Shop","Cart","Profile"]
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

export default Navbar1

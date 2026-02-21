import React from 'react'
import './CategoriesBar.css'
const CategoriesBar = ({list,handleClick}) => {
  return (
   <>
    <ol className='categories-bar'>
        {
            list.map(
                (item,index)=>(<li onClick={()=>handleClick(item)} key={index}>{item}</li>)
            )
        }
    </ol>
   </>
  )
}

export default CategoriesBar


import { useState } from 'react'
import './Counter.css'
import Button from './Button.jsx'
import { MdEmail } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";

const Counter = () => {
  let a=10
  let b=20
  let c=a+b;
  console.log(c)

  function increment()
  {
  setCount(count+1)
  }

  function decrement()
  {
  setCount(count-1)
  }

  function incrementBy2()
  {
  setCount(count+2)
  }

  function decrementBy2()
  {
  setCount(count-2)
  }

  const [count,setCount]=useState(0)

  return (
    <div>
     
      {/* <Button text="Increment" handleClick={increment}>
        <div>
        <h2>This is children prop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores!</p>
        </div>
      </Button> */}
      {/* <Button text="Increment By 2" handleClick={incrementBy2}/>
      <Button text="Decrement" handleClick={decrement}/>
      <Button text="Decrement By 2" handleClick={decrementBy2}/> */}
      <Button icon={<MdEmail />}/> 
      <Button icon={<IoPersonCircle />}/> 
      {/* <Button icon={<GoHomeFill />}/>  */}
      <Button icon={<FaSearch />}/> 
      <Button icon={<FaFile />}/> 
      <Button icon={<IoIosLogIn />}/> 

      <Button icon={<MdOutlineMarkEmailRead />}/>

      {/* <button onClick={increment}>Increment</button>
      <button onClick={incrementBy2}>Increment By 2</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementBy2}>Decrement By 2</button> */}
      {/* <span>{count}</span> */}
    </div>
  )
}

export default Counter

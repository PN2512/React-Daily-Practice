// import React, { useEffect, useState } from 'react'
// import './RegisterForm.css'
// import eye from '../../public/myimages/eye.png'
// import hide_eye from '../../public/myimages/hide_eye.png'
// const RegisterForm = () => {

//   const u1={
//     username:"",
//     password:"",
//     confirmPassword:""
//   }

//   const [user,Setuser] =useState(u1)
//   const [flag,setflag]=useState(false)

//   function handleChange(event)
//   {
//     const {name,value} = event.target
//     Setuser((prev)=>({...prev,[name]:value}))
//     // console.log(user); // LAG THE INPUT BY ONE 
//   }

//   useEffect(
//     ()=>{
//       console.log(user);
      
//     },[user]
//   )

//   function handleSubmit(event){
//   event.preventDefault();
//   alert(`from submited successfuly ${user.username}`)
//   }

//   function showPassword(){
//     setflag(!flag)
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
      
//       <div>
//         <label htmlFor="username">Enter Username</label>
//               <input type="text"
//               name='username'
//               id='username'
//               value={user.username}
//               onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Enter Password</label>
//               <input
//                type={flag?"text":"password"}  
//               name='password'
//               id='password'
//               value={user.password}
//               onChange={handleChange}/>
//               <button className='show-password' type ="button" value="Show Password" onClick={showPassword}>

//               {
//                 flag? <img src={eye}/> : <img src={hide_eye}/>
//               }
//               </button>
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input 
//         type={flag?"text":"password"}
//         name='confirmPassword'
//         id='confirmPassword'
//         value={user.confirmPassword}
//         onChange={handleChange} />
//       </div>
     
//       <div>
//               <input
//                type="submit" 
//                value="Register"
//                disabled={
//                 !user.username||
//                 !user.password ||
//                 !user.confirmPassword||
//                 user.password !== user.confirmPassword
//                } />

//       </div>


//     </form>
//     </>
//   )
// }

// export default RegisterForm ;

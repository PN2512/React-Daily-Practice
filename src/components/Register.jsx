import React, { useState } from 'react'
import './Register.css'
const Register = () => {
    const [formData,setFormData]=useState({
        username:"",
        password:"",
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }

    const handleSumbit=(e)=>{
        e.preventDefault(); // prevent page refresh
        console.log("User Registered:",formData);
    };

  return (
    <>
    <div className='register-container'>
        <form className='register-form' onSubmit={handleSumbit}>
            <h2>Register</h2>

            <input type="text"
            name='username'
            placeholder='Enter UserName'
            value={formData.username}
            onChange={handleChange}
            required
             />

             <input type="password"
             name='password'
             placeholder='Enter Password'
             value={formData.password}
             onChange={handleChange}
             required
              />

              <button type='submit'>Rigester</button>

        </form>
    </div>
    </>

  );
   
  
}

export default Register;

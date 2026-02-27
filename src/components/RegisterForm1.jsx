
import { useFormik } from 'formik';
import { useState } from 'react';
import './RegisterForm.css';
// import eye from '../../public/myimages/eye.png'
// import hide_eye from '../../public/myimages/hide_eye.png'
import { userValidationRules } from '../validation/UserValidationSchema';


const RegisterForm1 = () => {

    const eye1='/myimages/eye.png'
    const hide1='/myimages/hide_eye.png'

    const u1={
        username:"",
        password:"",
        confirmPassword:""
    }

  
  const [flag,setFlag]=useState(false)
  
  const {
        errors,
        values,
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: u1,  // Correctly set initialValues
        validationSchema: userValidationRules,
        onSubmit: function () {
            confirmation();
        },
    });



  async function confirmation()
  {
   const payload={
    username : values.username,
    password : values.password
   }
        try {
          const response = await fetch("http://localhost:8087/registerUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
           
          const data =await response.json();
          if(response.ok){
            alert(data.message);
          }
          else{
            alert(data.message);// show backend error message
          }
         
        } catch (error) {
          console.error("Error submitting the form", error);
        }
   
  }

  function showPassword()
  {
    setFlag(!flag)
  }







  
  return (
   <>
   <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor='username'> Enter Username</label>
                <input 
                type="text" 
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.username && errors.username &&  (
                        <p className="text-danger">{errors.username}</p>
                )}

        </div>
        <div>
                  <label htmlFor='password'> Enter Password</label>
                  <input 
                  type={flag?"text" :"password"}
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  {touched.password && errors.password &&  (
                        <p className="text-danger">{errors.password}</p>
                )}
                  <button className="show-password" type="button" value="Show Password" onClick={showPassword}>
                  {
                    flag? <img src={eye1}/> : <img src={hide1}/>
                  }
                  
                  </button>
        </div>
        <div>   
                  <label htmlFor='confirmPassword'> Confirm Password</label>
                  <input 
                  type={flag?"text" :"password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange} />
                  {touched.confirmPassword && errors.confirmPassword &&  (
                        <p className="text-danger">{errors.confirmPassword}</p>
                )}
        </div>
        <div>
                  <input 
                  type="submit" 
                  value="REGISTER"
                  />
        </div>
   </form>
   </>
  )
}

export default RegisterForm1

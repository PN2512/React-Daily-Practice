import * as yup from "yup";


export const userValidationRules = yup.object({
  username:  yup
    .string()
    .matches(/^[a-zA-Z0-9 !@#$%^&*(),.?":{}|<>_\-+=]*$/, "Enter a valid title with special characters and digits allowed" )
    .matches(/^\S*$/, "Username must not contain spaces")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  
   password: yup
  .string()
  .required("Password is mandatory")
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must not exceed 20 characters")
  .matches(
    /[A-Z]/,
    "Password must contain at least one uppercase letter"
  )
  .matches(
    /[a-z]/,
    "Password must contain at least one lowercase letter"
  )
  .matches(
    /[0-9]/,
    "Password must contain at least one number"
  )
  .matches(
    /[@$!%*?&#]/,
    "Password must contain at least one special character"
  ),

  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Confirm password is required")
});
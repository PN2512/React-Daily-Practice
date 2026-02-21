import { useFormik } from "formik";
import { useState } from "react";
import "./RegisterForm.css";
import { userValidationRules } from "../validation/UserValidationSchema";

const RegisterForm1 = () => {

  const eye1 = "/myimages/eye.png";
  const hide1 = "/myimages/hide_eye.png";

  const [flag, setFlag] = useState(false);

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: userValidationRules,
    onSubmit: function (values) {

      // ✅ Just frontend logic
      console.log("Registered User:", values);

      alert(`User ${values.username} registered successfully!`);

      resetForm(); // optional: clears form after submit
    },
  });

  function showPassword() {
    setFlag(!flag);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="username">Enter Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.username && errors.username && (
            <p className="text-danger">{errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Enter Password</label>
          <input
            type={flag ? "text" : "password"}
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <p className="text-danger">{errors.password}</p>
          )}

          <button
            className="show-password"
            type="button"
            onClick={showPassword}
          >
            <img
              src={flag ? eye1 : hide1}
              alt="toggle password"
            />
          </button>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={flag ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
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
  );
};

export default RegisterForm1;
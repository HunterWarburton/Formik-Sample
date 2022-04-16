import React from "react";
import { useFormik } from "formik";

import validator from 'validator';


function App() {

  /*
  const [emailErrorV, setEmailError] = useState('');
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  */
  
var emailGoodIndicator = document.getElementById("emailGood");

  const formik = useFormik({
    
    initialValues: {
      email: "default@email.com",
      password: "",
    },

    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: (values) => {
      let errors = {};

      if (values.email === "default@email.com") {
        errors.email = "Default, field required";
        emailGoodIndicator.style.display = "none";
      }
      else if (validator.isEmail(values.email)) {
        emailGoodIndicator.style.display = "inline";
      } else {
        emailGoodIndicator.style.display = "none";
        if (!values.email) errors.email = "Blank, field required";
        else errors.email = "Invalid format, field required";
      }

      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>


    <div style={{
      margin: 'auto',
      marginLeft: '300px',
    }}>
      
        <h2>Formik Form with Email Syntax Validation</h2>     

      <form onSubmit={formik.handleSubmit}>


        <div>Email:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        &emsp;
        {formik.errors.email ? (
          <span id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </span>
        ) : null}
        <span id="emailGood" style={{ color: "green", display: "none" }}> Valid Email
          </span>
        <br/>
        <br/>

        <div>Password:</div>
        <input
          id="passwordField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        &emsp;
        {formik.errors.password ? (
          <span id="passwordError" style={{ color: "red" }}>
            {formik.errors.password}
          </span>
        ) : null}
        <br/>
        <br/>

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>

      
    </div>


      
  );






}

export default App;

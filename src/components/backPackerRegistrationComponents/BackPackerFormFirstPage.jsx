import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { boolean, object } from "yup";

//Sets the color of the error text red
const BackPackerFormFirstPage = ({
  firstname,
  lastname,
  email,
  //password,
  handleChange,
  errors,
  isFormValid,
  setIsFormValid,
  touched,
  colorError,
}) => {




// const [formErrors,setFormErrors] = useState({})
// const [isFormValid, setIsFormValid] = useState(false)




useEffect(() =>{
    //console.log(Object.keys(errors).length)
    // setFormErrors(errors)
    // setIsFormValid(Object.keys(errors).length === 0)
    //console.log(isFormValid)
    const isValid = (Object.keys(errors).length === 0)
    setIsFormValid(isValid)
  },[errors,setIsFormValid])
  
return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            type="text"
            id="name"
            name="firstname"
            label="First Name"
            variant="outlined"
            onChange={handleChange}
            value={firstname}
          />
          {touched.firstname && errors.firstname && (
            <div style={{ color: colorError }}>{errors.firstname}</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            type="text"
            id="lastname"
            name="lastname"
            label="Last Name"
            variant="outlined"
            onChange={handleChange}
            value={lastname}
          />
          {touched.lastname && errors.lastname && (
            <div style={{ color: colorError }}>{errors.lastname}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="email"
            name="email"
            label="Email"
            onChange={handleChange}
            value={email}
          ></TextField>
          {errors.email ? (
            <div style={{ color: colorError }}>{errors.email}</div>
          ) : (
            ""
          )}
        </Grid>

        <Grid item xs={12}>
          {/* <TextField
            fullWidth
            type="text"
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
            value={password}
          />
          {errors.password ? (
            <div style={{ color: colorError }}>{errors.password}</div>
          ) : null} */}
        </Grid>
      </Grid>
    </>
  );
};

export default BackPackerFormFirstPage;

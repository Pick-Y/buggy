import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export const firstPageFields = ["firstname", "lastname", "email"];

const BackPackerFormFirstPage = ({
  // firstname,
  // lastname,
  // email,
  //password,
  values,
  handleChange,
  errors,
  isFormValid,
  setIsFormValid,
  touched,
  colorError,
}) => {
  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;

    setIsFormValid(isValid);
  }, [errors, setIsFormValid, touched]);

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
            value={values.firstname}
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
            value={values.lastname}
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
            value={values.email}
          ></TextField>
          {touched.email && errors.email ? (
            <div style={{ color: colorError }}>{errors.email}</div>
          ) : (
            ""
          )}
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default BackPackerFormFirstPage;

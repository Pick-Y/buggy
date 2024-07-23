import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export const thirdPageFields = ["phone", "email", "contactperson"];

const JobPosterFormThirdPage = ({
  values,
  handleChange,
  errors,
  setIsFormValid,
  touched,
  colorError,
}) => {
  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;
    console.log(errors);

    setIsFormValid(isValid);
  }, [errors, setIsFormValid]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            select
            type="text"
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            onChange={handleChange}
            value={values.phone}
          ></TextField>
          {touched.phone && errors.phone && (
            <div style={{ color: colorError }}>{errors.phone}</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12}>
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="contactperson"
            name="contactpersonfirstname"
            label="Contact Person"
            variant="outlined"
            onChange={handleChange}
            value={values.contactperson}
          />
          {touched.contactperson && errors.contactperson && (
            <div style={{ color: colorError }}>{errors.contactperson}</div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default JobPosterFormThirdPage;

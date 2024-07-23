import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export const firstPageFields = ["businessname", "tradingas", "industry"];
// businessname: "",
//       tradingas: "",
//       industry: "",
//       address: "",
//       postalcode: "",
//       state: "",
//       phone: "",
//       email: "",
//       contactperson: "",
//       password: "",
//       confirmpassword: "",
const JobPosterFormFirstPage = ({
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
            id="businessname"
            name="businessname"
            label="Business Name"
            variant="outlined"
            onChange={handleChange}
            value={values.businessname}
          />
          {touched.businessname && errors.businessname && (
            <div style={{ color: colorError }}>{errors.businessname}</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            type="text"
            id="tradingas"
            name="tradingas"
            label="Trading as"
            variant="outlined"
            onChange={handleChange}
            value={values.tradingas}
          />
          {touched.tradingas && errors.tradingas && (
            <div style={{ color: colorError }}>{errors.tradingas}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="industry"
            name="industry"
            label="Industry"
            onChange={handleChange}
            value={values.industry}
          ></TextField>
          {touched.industry && errors.industry ? (
            <div style={{ color: colorError }}>{errors.industry}</div>
          ) : (
            ""
          )}
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default JobPosterFormFirstPage;

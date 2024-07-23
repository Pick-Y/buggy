import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export const fourthPageFields = ["password", "confirmpassword"];

const JobPosterFormFourthPage = ({
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <div style={{ color: colorError }}>{errors.password}</div>
            ) : null}
          </Grid>
          <TextField
            fullWidth
            type="text"
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            variant="outlined"
            onChange={handleChange}
            value={values.confirmpassword}
          />
          {touched.confirmpassword && errors.confirmpassword && (
            <div style={{ color: colorError }}>{errors.confirmpassword}</div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default JobPosterFormFourthPage;

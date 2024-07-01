import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
export const thirdPageFields = ["education", "currentvisa", "workrights"];

const educationOptions = [
  { value: "higher-education", label: "Higher Education" },
  { value: "diploma", label: "Diploma" },
  { value: "other", label: "Other" },
];

const visaOptions = [
  { value: "working-holiday", label: "Working Holiday" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
];

const BackPackerFormThirdPage = ({
  //   education,
  //   currentvisa,
  //   workrights,
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
            id="education"
            name="education"
            label="Education"
            variant="outlined"
            onChange={handleChange}
            value={values.education}
          >
            {educationOptions.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {touched.education && errors.education && (
            <div style={{ color: colorError }}>{errors.education}</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            select
            type="text"
            id="currentvisa"
            name="currentvisa"
            label="Current Visa"
            variant="outlined"
            onChange={handleChange}
            value={values.currentvisa}
          >
            {visaOptions.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {touched.currentvisa && errors.currentvisa && (
            <div style={{ color: colorError }}>{errors.currentvisa}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Work Rights</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="workrights"
              value={values.workrights}
              onChange={handleChange}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="Work Rights"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="No Work Rights"
              />
            </RadioGroup>
          </FormControl>
          {touched.workrights && errors.workrights ? (
            <div style={{ color: colorError }}>{errors.workrights}</div>
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

export default BackPackerFormThirdPage;

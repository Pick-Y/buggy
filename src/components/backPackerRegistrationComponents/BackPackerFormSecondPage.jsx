import React, { useEffect, useMemo } from "react";
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
import countryList from "react-select-country-list";

export const secondPageFields = ["nationality", "age", "gender"];

const ageRanges = [
  { label: "18-23", value: "18-23" },
  { label: "24-26", value: "24-26" },
  { label: "27-33", value: "27-33" },
];

const BackPackerFormSecondPage = ({
  // nationality,
  // age,
  // gender,
  values,
  handleChange,
  errors,
  isFormValid,
  setIsFormValid,
  touched,
  colorError,
}) => {
  const countries = useMemo(() => countryList().getData(), []);

  console.log(errors);
  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;
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
            id="nationality"
            name="nationality"
            label="Nationality"
            variant="outlined"
            onChange={handleChange}
            value={values.nationality}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {touched.nationality && errors.nationality && (
            <div style={{ color: colorError }}>{errors.nationality}</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            select
            type="text"
            id="age"
            name="age"
            label="Age"
            variant="outlined"
            onChange={handleChange}
            value={values.age}
          >
            {ageRanges.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {touched.age && errors.age && (
            <div style={{ color: colorError }}>{errors.age}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          {touched.gender && errors.gender ? (
            <div style={{ color: colorError }}>{errors.gender}</div>
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

export default BackPackerFormSecondPage;

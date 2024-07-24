import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem } from "@mui/material";

export const firstPageFields = ["businessname", "tradingas", "industry"];

const industryOptions = [
  { value: "tourism-hospitality", label: "Tourism and Hospitality" },
  { value: "plant-animal-cultivation", label: "Plant and animal cultivatioon" },
  { value: "fishing-pearling", label: "Fishing and pearling" },
  { value: "tree-farming-felling", label: "Tree farming and felling" },
  { value: "mining", label: "Mining" },
  { value: "construction", label: "Construction" },
  { value: "mining", label: "Mining" },
  { value: "construction", label: "Construction" },
  {
    value: "recovery-work-weather-affected-areas ",
    label: "Recovery work in weather-affected areas",
  },
  {
    value: "critical-covid-19-work  ",
    label: "Critical COVID-19 work ",
  },
];

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
            select
            type="text"
            id="industry"
            name="industry"
            label="Industry"
            onChange={handleChange}
            value={values.industry}
          >
            {industryOptions.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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

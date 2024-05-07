import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {
  validationSchemaObject,
  createAccount,
} from "../utils/createAccountFormValidationUtils";
import AccountCreatedModal from "../components/AccountCreated";
import { useNavigate } from "react-router-dom";

import PersonalInfo from "../components/backPackerRegistrationComponents/BackPackerPersonalInfo";
//Sets the color of the error text red
const colorError = "red";

const CreateAccountForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = ''; // Reset overflow when component unmounts
  //   };
  // }, []);

  const handleFadeOut = () => {
    setIsVisible(false);
  };

  const handleClose = () => {
    console.log("In onclose");
    setIsModalOpen(false);
    navigate("/login-page");
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchemaObject,
    onSubmit: (values) => {
      //HANDLE SUBMIT

      createAccount(values)
        .then((response) => {
          console.log("Account created successfully:", response);
          // Handle successful response
          if (response.status === 200) {
            setIsModalOpen(true);
          }
        })
        .catch((error) => {
          console.error("Error creating account:", error);
          // Handle error
        });
      //END OF HANDLESUBMIT
    },
  });

  return (
    <Container maxWidth="lg" sx={{ overflow: "hidden", height: "100hv" }}>
      GENERAL CONTAINER
      <Typography variant="h5" align="center" gutterBottom>
        Create an Account
      </Typography>
      {isModalOpen ? (
        //This opens a modal which gives confirmation of the account being created
        <AccountCreatedModal open={isModalOpen} onClose={handleClose} />
      ) : (
        <Container
          maxWidth={false}
          sx={{ bgcolor: "purple", overflow: "hidden", marginTop: "40px" }}
        >
          Second Container
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 600px)": {
                flexDirection: "column",
              },
              justifyContent: "center",
              width: "90%",
              height: "70vh",
              margin: "auto",

              marginBottom: "50px",
            }}
          >
            <Box
              sx={{ bgcolor: "yellow", width: "50%", height: "100vh" }}
            ></Box>
            <Box sx={{ bgcolor: "#e2fdff", width: "50%", height: "100vh" }}>
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <PersonalInfo 
                  firstname={formik.firstname}
                  lastname={formik.lastname} 
                  email={formik.email}
                  password={formik.password}
                  handleChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  colorError={colorError}
                  >
                  
                </PersonalInfo>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 20 }}
                >
                  Create Account
                </Button>
              </form>
            </Box>
          </Box>
          {/* <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="text"
                id="name"
                name="name"
                label="First Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.password && formik.errors.name ? (
                <div style={{ color: colorError }}>{formik.errors.name}</div>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="text"
                id="lastname"
                name="lastname"
                label="Last Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.touched.password && formik.errors.lastname ? (
                <div style={{ color: colorError }}>
                  {formik.errors.lastname}
                </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.password && formik.errors.email ? (
                <div style={{ color: colorError }}>{formik.errors.email}</div>
              ) : null}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: colorError }}>
                  {formik.errors.password}
                </div>
              ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Create Account
          </Button>
        </form> */}
        </Container>
      )}
    </Container>
  );
};

export default CreateAccountForm;

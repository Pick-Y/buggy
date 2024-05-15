import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Container, Box } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {
  validationSchemaObject,
  createAccount,
} from "../utils/createAccountFormValidationUtils";
import { keyframes } from "styled-components";
import AccountCreatedModal from "../components/AccountCreated";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../components/backPackerRegistrationComponents/BackPackerPersonalInfo";
import EducationInfo from "../components/backPackerRegistrationComponents/BackPackerEducation";
import ButtonPreviousNext from "../components/formButtonsPreviousNext.jsx";
//Sets the color of the error text red
const colorError = "red";

// Define keyframes for animation

const fadeOutRight = keyframes`
from {
  opacity: 1;
  transform: translate(0);
}
to {
  transform: translateX(50px);
  opacity: 0;
}
`;

const fadeOutLeft = keyframes`
from {
  opacity: 1;
  transform: translate(0);
}
to {
  transform: translateX(-50px);
  opacity: 0;
}
`;



const FirstDiv = styled.div`
  background-color: '';
  animation-duration: 0.2s;
  animation-name: ${(props) => (props.buttonLeftClicked ? fadeOutLeft : (props.buttonRightClicked ? fadeOutRight: 'none'))};
`;

const CreateAccountForm = () => {

  
  const pages = [<PersonalInfo />, <EducationInfo />]
  const [buttonLeftClicked, setButtonLeftClicked] = useState(true);
  const [buttonRightClicked, setButtonRightClicked] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  //const navigate = useNavigate();

  const handleNext = () => {
    setButtonLeftClicked(false);
    setTimeout(() => {
      setButtonLeftClicked(true); // Set clicked state to true after a short delay
    }, 10);
    if(currentPage < pages.length - 1){
      setCurrentPage(currentPage + 1)
    }

    
  };

  const handlePrevious = () => {
    setButtonLeftClicked(false);
    setButtonRightClicked(false);
    setTimeout(() => {
      setButtonRightClicked(true); // Set clicked state to true after a short delay
    }, 10);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      education: "",
      password: "",
    },
    validationSchema: validationSchemaObject,
    onSubmit: (values) => {
      //HANDLE SUBMIT
      console.log(values)
      createAccount(values)
        .then((response) => {
          console.log("Account created successfully:", response);
          // Handle successful response
          if (response.status === 200) {
            //here, it should redirect to the user account page

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
          <Box sx={{ bgcolor: "yellow", width: "50%", height: "100vh" }}></Box>
          <Box sx={{ bgcolor: "#e2fdff", width: "50%", height: "100vh" }}>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <FirstDiv buttonLeftClicked={buttonLeftClicked} buttonRightClicked={buttonRightClicked}>
                {currentPage === 0 ? (
                  <PersonalInfo
                    firstname={formik.firstname}
                    lastname={formik.lastname}
                    email={formik.email}
                    password={formik.password}
                    handleChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    colorError={colorError}
                  ></PersonalInfo>
                ) : currentPage === 1 ? (
                  <EducationInfo
                    education={formik.education}
                    handleChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    colorError={colorError}
                  ></EducationInfo>
                ) : null}
              </FirstDiv>

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
            <ButtonPreviousNext
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            ></ButtonPreviousNext>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default CreateAccountForm;

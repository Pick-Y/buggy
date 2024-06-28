import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Container, Box, Switch } from "@mui/material";
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
import BackPackerFormFirstPage, {
  firstPageFields,
} from "../components/backPackerRegistrationComponents/BackPackerFormFirstPage.jsx";
import BackPackerFormSecondPage, {
  secondPageFields,
} from "../components/backPackerRegistrationComponents/BackPackerFormSecondPage.jsx";
import BackPackerFormThirdPage, {
  thirdPageFields,
} from "../components/backPackerRegistrationComponents/BackPackerFormThirdPage.jsx";
import BackPackerFormFourthPage, {
  fourthPageFields,
} from "../components/backPackerRegistrationComponents/BackPackerFormFourthPage.jsx";
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
  background-color: "";
  width: 300px;
  height: 400px;
  animation-duration: 0.2s;
  animation-name: ${(props) =>
    props.buttonLeftClicked
      ? fadeOutLeft
      : props.buttonRightClicked
      ? fadeOutRight
      : "none"};
`;

const CreateAccountForm = () => {
  const pages = [
    <BackPackerFormFirstPage />,
    <BackPackerFormSecondPage />,
    <BackPackerFormThirdPage />,
    <BackPackerFormFourthPage />,
  ];
  const [buttonLeftClicked, setButtonLeftClicked] = useState(true);
  const [buttonRightClicked, setButtonRightClicked] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [singlePageErrors, setSinglePageErrors] = useState({});
  //const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      nationality: "",
      age: "",
      gender: "",
      education: "",
      currentvisa: "",
      workrights: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchemaObject,
    onSubmit: (values) => {
      //HANDLE SUBMIT
      console.log(values);
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

  const singlePageErrorFilter = useCallback(
    (pageFields) => {
      const singleErrorFieldObj = {};

      pageFields.forEach((key) => {
        if (key in formik.errors) {
          console.log(formik.errors[key]);
          singleErrorFieldObj[key] = formik.errors[key];
        }
      });

      return singleErrorFieldObj;
    },
    [formik.errors]
  );

  const validateSinglePage = useCallback(() => {
    switch (currentPage) {
      case 0:
        setSinglePageErrors(singlePageErrorFilter(firstPageFields));
        break;
      case 1:
        setSinglePageErrors(singlePageErrorFilter(secondPageFields));
        break;
      case 2:
        setSinglePageErrors(singlePageErrorFilter(thirdPageFields));
        break;
      case 3:
        setSinglePageErrors(singlePageErrorFilter(fourthPageFields));
        break;
      default:
    }
  }, [currentPage, singlePageErrorFilter]);

  useEffect(() => {
    validateSinglePage();
  }, [currentPage, validateSinglePage]);

  // const dynamicErrors = {};
  // Object.keys(formik.values).forEach((field) => {
  //   if (formik.errors[field]) {
  //     dynamicErrors[field] = formik.errors[field];
  //   }
  // });

  const handleNext = () => {
    //check if the fields have been filled

    //if they have not been fill
    //pass errors for the single page
    if (isFormValid) {
      setButtonLeftClicked(false);
      setTimeout(() => {
        setButtonLeftClicked(true); // Set clicked state to true after a short delay
      }, 10);
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      alert("fill the form");
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
            bgcolor: "green",
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
            sx={{
              bgcolor: "yellow",
              width: "50%",
              height: "100%",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "#e2fdff",
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
          >
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <FirstDiv
                buttonLeftClicked={buttonLeftClicked}
                buttonRightClicked={buttonRightClicked}
              >
                {currentPage === 0 ? (
                  <BackPackerFormFirstPage
                    firstname={formik.firstname}
                    lastname={formik.lastname}
                    email={formik.email}
                    password={formik.password}
                    handleChange={formik.handleChange}
                    errors={singlePageErrors}
                    touched={formik.touched}
                    colorError={colorError}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                  />
                ) : currentPage === 1 ? (
                  <BackPackerFormSecondPage
                    nationality={formik.nationality}
                    age={formik.age}
                    gender={formik.gender}
                    handleChange={formik.handleChange}
                    errors={singlePageErrors}
                    touched={formik.touched}
                    colorError={colorError}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                  />
                ) : currentPage === 2 ? (
                  <BackPackerFormThirdPage
                    education={formik.education}
                    currentvisa={formik.currentvisa}
                    workrights={formik.workrights}
                    handleChange={formik.handleChange}
                    errors={singlePageErrors}
                    touched={formik.touched}
                    colorError={colorError}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                  />
                ) : currentPage === 3 ? (
                  <BackPackerFormFourthPage
                    password={formik.password}
                    confirmpassword={formik.confirmpassword}
                    handleChange={formik.handleChange}
                    errors={singlePageErrors}
                    touched={formik.touched}
                    colorError={colorError}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                  />
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

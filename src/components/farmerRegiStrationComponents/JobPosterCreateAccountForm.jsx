import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Container, Box, Switch } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {
  validationSchemaObject,
  createAccount,
} from "../../utils/createAccountFormValidationUtils";
import { keyframes } from "styled-components";

import BackPackerFormFirstPage, {
  firstPageFields,
} from "./BackPackerFormFirstPage.jsx";
import BackPackerFormSecondPage, {
  secondPageFields,
} from "./BackPackerFormSecondPage.jsx";
import BackPackerFormThirdPage, {
  thirdPageFields,
} from "./BackPackerFormThirdPage.jsx";
import BackPackerFormFourthPage, {
  fourthPageFields,
} from "./BackPackerFormFourthPage.jsx";

import ButtonPreviousNext from "../formButtonsPreviousNext.jsx";
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

const JobSeekerCreateAccountForm = () => {
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

  const handleNext = () => {
    if (isFormValid) {
      setButtonLeftClicked(false);
      setTimeout(() => {
        setButtonLeftClicked(true);
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
      setButtonRightClicked(true);
    }, 10);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <FirstDiv
          buttonLeftClicked={buttonLeftClicked}
          buttonRightClicked={buttonRightClicked}
        >
          {currentPage === 0 ? (
            <BackPackerFormFirstPage
              values={formik.values}
              handleChange={formik.handleChange}
              errors={singlePageErrors}
              touched={formik.touched}
              colorError={colorError}
              isFormValid={isFormValid}
              setIsFormValid={setIsFormValid}
            />
          ) : currentPage === 1 ? (
            <BackPackerFormSecondPage
              values={formik.values}
              handleChange={formik.handleChange}
              errors={singlePageErrors}
              touched={formik.touched}
              colorError={colorError}
              isFormValid={isFormValid}
              setIsFormValid={setIsFormValid}
            />
          ) : currentPage === 2 ? (
            <BackPackerFormThirdPage
              values={formik.values}
              handleChange={formik.handleChange}
              errors={singlePageErrors}
              touched={formik.touched}
              colorError={colorError}
              isFormValid={isFormValid}
              setIsFormValid={setIsFormValid}
            />
          ) : currentPage === 3 ? (
            <BackPackerFormFourthPage
              values={formik.values}
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
    </>
  );
};
export default JobSeekerCreateAccountForm;

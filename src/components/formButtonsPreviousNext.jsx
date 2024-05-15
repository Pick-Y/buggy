import { Grid, Button } from "@mui/material";

const ButtonPreviousNext = ({ handleNext, handlePrevious, value }) => {
  return (
    <>
      <Grid>
        <Button
          value={value}
          onClick={handlePrevious}
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Previous
        </Button>
        <Button
          value={value}
          onClick={handleNext}
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
        >
          next
        </Button>
      </Grid>
    </>
  );
};

export default ButtonPreviousNext;

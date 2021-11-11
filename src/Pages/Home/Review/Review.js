import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import star from "../../../images/star.png";
import "./Review.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
  {
    name: "Arif uz zaman",
    img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat delectus blanditiis repudiandae reprehenderit explicabo? Natus inventore nulla quaerat corrupti quo?",
    rating: 4.5,
  },
  {
    name: "Sumaiya Akhter",
    img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat delectus blanditiis repudiandae reprehenderit explicabo? Natus inventore nulla quaerat corrupti quo?",
    rating: 4.5,
  },
  {
    name: "Barek obama",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat delectus blanditiis repudiandae reprehenderit explicabo? Natus inventore nulla quaerat corrupti quo?",
    rating: 4.5,
  },
];

function Review() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "80px 0px 20px" }}
      >
        Our Clients Review
      </Typography>
      <div
        style={{
          width: "150px",
          height: "4px",
          backgroundColor: "var(--primary-color)",
          margin: " 0px auto 80px",
          display: "block",
          borderRadius: "10px",
        }}
      ></div>
      <Box
        sx={{ maxWidth: 650, flexGrow: 1 }}
        style={{
          margin: "auto",
          display: "block",
          textAlign: "center",
          boxShadow: "3px 4px 10px #10715d2e",
          borderRadius: "10px",
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {reviews.map((step, index) => (
            <div
              key={step.name}
              style={{
                padding: "20px",
              }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "80px",
                    display: "block",
                    width: "80px",
                    borderRadius: "50%",
                    margin: " 20px auto",
                  }}
                  src={step.img}
                  alt={step.name}
                />
              ) : null}
              <Typography
                style={{ textAlign: "center", color: "var(--primary-color)" }}
                variant="h5"
              >
                {reviews[activeStep].name}
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  color: "var(--body-text-color)",
                  marginTop: "20px",
                }}
              >
                {reviews[activeStep].review}
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  color: "var(--secondary-color)",
                  marginTop: "20px",
                }}
              >
                Rating : {reviews[activeStep].rating}
              </Typography>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ borderRadius: "10px", padding: "20px" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Container>
  );
}

export default Review;

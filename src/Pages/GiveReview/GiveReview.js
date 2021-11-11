import React from "react";
import {
  Button,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function GiveReview() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <div>
      <Navigation />
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          Give your valuable Feedback
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
        <div>
          <Box
            style={{ textAlign: "center" }}
            sx={{
              "& > legend": { mt: 2, ml: 4 },
            }}
          >
            <Typography component="legend">
              Give you valuable rating please
            </Typography>
            <StyledRating
              style={{ margin: "10px 0px 0px 30px" }}
              name="customized-color"
              defaultValue={0}
              getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </Box>
          <Box
            style={{ textAlign: "center" }}
            sx={{
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextareaAutosize
              minRows={6}
              style={{
                width: "80%",
                color: "lightgray",
                margin: "auto",
                border: "1px solid lightgray",
                borderRadius: "5px",
              }}
              placeholder="Give feedback"
            />
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "var(--secondary-color)",
              fontWeight: "bold",
              margin: " 20px auto",
              display: "block",
            }}
          >
            Send Feedback{" "}
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

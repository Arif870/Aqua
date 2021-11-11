import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import img1 from "../../images/products/1.png";

export default function Purchase() {
  return (
    <div>
      <Navigation />
      <Container>
        <Grid
          container
          spacing={3}
          style={{
            marginTop: "80px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              src={img1}
              alt="image1"
            />
            <Typography variant="h6">Betta fish</Typography>
            <Typography
              variant="p"
              style={{ marginTop: "10px", display: "block" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, sint cupiditate architecto fuga placeat ea
              consequuntur at minima eligendi quia maxime nesciunt ducimus
              nostrum et magni? Doloribus architecto modi iusto.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <form>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="patientName"
                    style={{ width: "100%" }}
                    label="Name"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="phone"
                    style={{ width: "100%" }}
                    label="Phone Number"
                    defaultValue=""
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="email"
                    style={{ width: "100%" }}
                    label="Email"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="date"
                    style={{ width: "100%" }}
                    label="Date"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    style={{ width: "100%", color: "lightgray" }}
                    placeholder="Full Address"
                  />
                </Box>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    fontWeight: "bold",
                    float: "right",
                    margin: "12px",
                  }}
                >
                  Complete purchase{" "}
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

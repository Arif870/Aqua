import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import img1 from "../../images/products/1.png";

export default function Myorders() {
  return (
    <div>
      <Navigation />
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          My Orders
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
          className="underheading"
        ></div>
        <Grid container style={{ marginTop: "80px", justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              display: "flex",

              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img style={{ width: "200px" }} src={img1} alt="" />
            <div style={{ marginLeft: "20px" }}>
              <Typography variant="h5">Betta fish</Typography>
              <Typography variant="h5" color="var(--primary-color)">
                $5
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam maiores quam eligendi quidem quos rerum ea. Cumque
                commodi odio tenetur.
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Delete order
                </Button>
                <Typography
                  variant="p"
                  style={{ display: "block", color: "var(--secondary-color)" }}
                >
                  Order processing..
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

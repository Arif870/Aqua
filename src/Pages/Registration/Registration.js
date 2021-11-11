import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

export default function Registration() {
  return (
    <div>
      <Navigation />
      <Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} style={{ margin: "auto", display: "block" }}>
          {" "}
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "30px 0px",
            }}
          >
            Registration Form
          </Typography>
          <form className="loginformsizecontrol" style={{ width: "500px" }}>
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_name"
              label="Name"
              type="text"
              name="name"
              variant="filled"
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_email"
              label="Email"
              type="email"
              name="email"
              variant="filled"
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_pass"
              label="Password"
              type="password"
              name="password"
              variant="filled"
            />
            <TextField
              style={{ width: "100%" }}
              id="reg_pass2"
              label="Repeat password"
              type="password"
              name="repeat_password"
              variant="filled"
            />
            <Typography
              variant="p"
              style={{
                marginTop: "10px",
                display: "block",
                color: "var(--body-text-color)",
              }}
            >
              Already have an account ?{" "}
              {
                <Link
                  style={{
                    textDecoration: "none",
                    color: "var(--primary-color)",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              }
            </Typography>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                display: "block",
                margin: "40px auto 0px",
                width: "150px",
              }}
            >
              Registration
            </Button>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

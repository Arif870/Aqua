import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import betaimg from "../../images/batta.png";
import useAuth from "../../Hooks/useAuth";

export default function Registration() {
  const { registerUser, isLoading } = useAuth();

  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleRegistrationSubmit = e => {
    if (loginData.password !== loginData.repeat_password) {
      alert("password didnot matched!");
      return;
    }
    registerUser(loginData.email, loginData.password, history);
    e.preventDefault();
  };

  return (
    <div>
      <Navigation />
      <Grid>
        <Grid item xs={12}>
          <img
            style={{
              width: "200px",
              margin: " 20px auto 0px",
              display: "block",
            }}
            src={betaimg}
            alt="betta"
          />
        </Grid>
        <Grid item xs={12} style={{ margin: "auto", display: "block" }}>
          {" "}
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "20px 0px",
            }}
          >
            Registration Form
          </Typography>
          {!isLoading && (
            <form
              onSubmit={handleRegistrationSubmit}
              className="loginformsizecontrol"
              style={{ width: "500px" }}
            >
              <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                id="reg_name"
                label="Name"
                type="text"
                name="name"
                variant="filled"
                onChange={handleOnChange}
              />
              <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                id="reg_email"
                label="Email"
                type="email"
                name="email"
                variant="filled"
                onChange={handleOnChange}
              />
              <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                id="reg_pass"
                label="Password"
                type="password"
                name="password"
                variant="filled"
                onChange={handleOnChange}
              />
              <TextField
                style={{ width: "100%" }}
                id="reg_pass2"
                label="Repeat password"
                type="password"
                name="repeat_password"
                variant="filled"
                onChange={handleOnChange}
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
          )}
          {isLoading && <CircularProgress />}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

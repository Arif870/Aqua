import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Makeadmin() {
  return (
    <div>
      <Grid>
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
            Make Admin
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
          <form className="loginformsizecontrol" style={{ width: "500px" }}>
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="email"
              label="Email"
              type="email"
              name="email"
              variant="filled"
            />

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
              make admin
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Addaproduct() {
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
            Add a product
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
              id="reg_name"
              label="Name"
              type="text"
              name="name"
              variant="filled"
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="imglink"
              label="Image url"
              type="text"
              name="image_url"
              variant="filled"
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="price"
              label="Price"
              type="number"
              name="price"
              variant="filled"
            />

            <TextareaAutosize
              minRows={6}
              style={{
                width: "100%",
                color: "lightgray",
                margin: "auto",
                border: "1px solid lightgray",
                borderRadius: "3px",
                padding: "10px",
              }}
              placeholder="Product description"
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
              Set a product
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

import { Grid } from "@mui/material";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

export default function Purchase() {
  return (
    <div>
      <Navigation />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
      <Footer />
    </div>
  );
}

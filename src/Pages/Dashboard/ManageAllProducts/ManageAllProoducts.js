import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../images/products/1.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ManageAllProoducts() {
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container style={{ marginTop: "80px", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={8}
          style={{
            border: "1px solid lightgray",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "150px", display: "block", margin: "auto" }}
            src={img1}
            alt=""
          />

          <div style={{ marginLeft: "20px" }}>
            <Typography variant="h5">Betta fish</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam maiores quam eligendi quidem quos rerum ea. Cumque
              commodi odio tenetur.
            </Typography>
            <Typography
              variant="h5"
              style={{ margin: "20px 0px 10px" }}
              color="var(--primary-color)"
            >
              Customer info
            </Typography>
            <Typography variant="p">Name : Arif-uz-zaman</Typography> <br />
            <Typography variant="p">Email : arif@gmail.com</Typography>
            <br />
            <Typography variant="p">Date : 19/10/2021</Typography> <br />
            <Typography variant="p">
              address : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui, omnis.
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

              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Order history
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="Order history"
                >
                  <MenuItem value="accept">Accept</MenuItem>
                  <MenuItem value="hold">On hold</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

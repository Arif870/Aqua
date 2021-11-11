import {
  Button,
  CardActions,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img1 from "../../../images/products/1.png";
import img2 from "../../../images/products/2.png";
import img3 from "../../../images/products/3.png";
import img4 from "../../../images/products/4.png";
import img5 from "../../../images/products/5.png";
import img6 from "../../../images/products/6.png";
import "./Products.css";
import { Box } from "@mui/system";

export default function Products() {
  const products = [
    {
      img: img1,
      name: "Red fighter",
      desc: "Red fighter Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$5",
    },
    {
      img: img2,
      name: "Golden betta",
      desc: "Golden betta Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$4",
    },
    {
      img: img3,
      name: "Small fighter",
      desc: "Small fighter Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$7",
    },
    {
      img: img4,
      name: "Lizard fine",
      desc: "Lizard fine are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$4",
    },
    {
      img: img5,
      name: "Lizard",
      desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$3",
    },
    {
      img: img6,
      name: "Bluish betta",
      desc: "Bluish betta are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: "$5",
    },
  ];

  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          Our most popular Products
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
        {/* ######################## 

        Our popular prodcuts showing

         ######################## */}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card
                sx={{ Width: "100%" }}
                style={{ boxShadow: "3px 4px 10px #10715d2e" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={product.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "var(--primary-color)",
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.desc.slice(0, 120)}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  <Button style={{ color: "var(--secondary-color)" }}>
                    Purchase
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

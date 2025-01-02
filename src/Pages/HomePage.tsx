import React from "react";
import { Box, Typography, Grid, Button, Avatar } from "@mui/material";

import womenPic from "../img/womenPic.png";
import menPic from "../img/menPic.png";
import kidsPic from "../img/kidsPic.png";
import Slider from "../components/Slider";
import classes from "../styles/homePage.module.css";
import Product from "../Apifetch/Prduct";


const HomePage: React.FC = () => {
  return (
    <>
      <Box className={classes.box}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ color: "#0e2138", fontFamily: "cursive" }}
        >
          Welcome to Our Website!
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
          Discover the best fashion items for you. Explore our collection of
          trendy and stylish clothing.
        </Typography>
       
         <Button
          sx={{
            backgroundColor: "#2E5077",
            fontSize: "1.2rem",
            margin: "2rem",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Shop Now
        </Button>
      
        

        <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                Women's Wear
              </Typography>
              <Avatar
                alt="women"
                src={womenPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                {" "}
                Men's Wear
              </Typography>
              <Avatar
                alt="men"
                src={menPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                Kid's Wear
              </Typography>
              <Avatar
                alt="kids"
                src={kidsPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Product />
      <Slider />
    </>
  );
};

export default HomePage;

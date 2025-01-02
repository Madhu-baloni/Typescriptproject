import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

interface Productitem {
  image: string;
  id: number;
  title: string;
  price: number;
  description: string;
}

const Product: React.FC = () => {

  const [productItem, setProductItem] = useState<Productitem[]>([]);
  useEffect(() => {
    axios
      .get<Productitem[]>("https://fakestoreapi.com/products")
      .then((response) => setProductItem(response.data));
  }, [])

  if (!productItem) return <Typography>Loading...</Typography>;
  return (
    <>
    <Box sx={{backgroundColor:"#2E5077", marginBottom:"1rem"}}>
    <Typography
    sx={{ fontSize: "2rem", fontWeight: "bold", marginTop: 5, fontFamily:"cursive", color:"white"}}
  >
   Best Selling Product
  </Typography>
    </Box>
    
    <Grid container spacing={4} justifyContent="center">
      {productItem.map((product) => (
        <Grid key={product.id}>
          <Card
            className="card"
            sx={{ maxWidth: "325px", minHeight: "27rem", maxHeight: "28rem", justifyContent:"space-between"}}
          >
            <img
              className="img"
              src={product.image}
              alt={product.title}
              style={{ width: "8rem", display:"block", marginLeft:"5rem",maxWidth:"9rem", minHeight:"4rem", maxHeight:"5rem"}}
            />
            <CardContent>
              <Typography variant="h6" sx={{maxHeight:"4rem", overflow:"hidden",textOverflow:"ellipsis"}}>{product.title}</Typography>
              <Box
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "4.5rem",
                  textAlign: "justify",
                }}
              >
                <Typography>{product.description}</Typography>
              </Box>
              <Typography sx={{ fontSize: "1.5rem", marginTop: "1.3rem" }}>
                ${product.price}
              </Typography>
              <Box sx={{maxHeight:"1rem", marginTop:"3rem", marginBottom:"2rem"}}>
                <Button
                  sx={{
                    backgroundColor: "#2E5077",
                    color: "white",
                    marginRight: "2.7rem",
                  }}
                >
                  Add To Cart
                </Button>
                <Link to={`/product/${product.id}`}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: " #2E5077" }}
                  >
                    View Details
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default Product;

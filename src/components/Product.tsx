// import Navbar from "./Navbar"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import  "./styles/Product.module.css";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

interface Productitem {
  image : string;
  id: number;
  title:string;
  price:number;
  description:string
}


function Product() {
  const [productItem, setProductItem] = useState<Productitem[]>([]);
  useEffect(()=>{
    axios.get<Productitem[]>("https://fakestoreapi.com/products")
    .then((response) => setProductItem(response.data));
  }, []);
  return (
  
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //        {/* {title} */}
    //       </Typography>
    //       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //      Add To Cart
    //     </Button>
    //   </CardActions>
    // </Card>
    <Grid container spacing={3}>
    {productItem.map((product) => (
      <Grid  key={product.id}>
        <Card className='card' sx={{ maxWidth: "350px", minHeight: "33rem", maxHeight: "37rem" }}>
          <img className='img' src={product.image} alt={product.title} style={{ width: '10rem', height: '11rem' }} />
          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Box sx={{ overflow:"hidden", textOverflow:"ellipsis", height:"4rem", display:""}}> 
              <Typography sx={{textAlign:'justify'}} >
              {product.description}
            </Typography>
            </Box>
           
            <Typography variant="h5">${product.price}</Typography>
            <Button size="small" color="primary">
            Add To Cart
        </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
}

export default Product;


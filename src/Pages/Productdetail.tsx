import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

interface ProductDetail {
  image: string;
  id: number;
  title: string;
  price: number;
  description: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    axios
      .get<ProductDetail>(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        {product.title}
      </Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "6rem",
          height: "10rem",
        }}
      />
      <Typography
        sx={{ marginTop: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        ${product.price}
      </Typography>
      <Box sx={{ minHeight: "4rem", maxHeight: "5rem", minWidth: "5rem" }}>
        <Typography
          sx={{
            marginTop: "1rem",
            textAlign: "justify",
            color: "#2E5077",
            maxWidth:"25rem",
          }}
        >
          {product.description}
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          marginTop: "4.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2E5077",
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductDetailPage;

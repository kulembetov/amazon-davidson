"use client";
import React, { useEffect } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { COLORS } from "@/styles/colors";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, []);

  return (
    <Box sx={{ backgroundColor: COLORS.white, borderRadius: "5px" }}>
      <Container maxWidth="xl">
        <ProductDetails product={singleProduct} />
      </Container>
    </Box>
  );
};

export default ProductPage;

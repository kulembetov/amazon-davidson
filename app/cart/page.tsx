"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/supabase";
import { Container } from "@mui/material";
import Cart from "@/components/shared/Cart";

const CartPage = () => {
  return (
    <Container maxWidth="xl">
      <Cart />
    </Container>
  );
};

export default CartPage;

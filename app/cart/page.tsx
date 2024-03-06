"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/supabase";
import { Container } from "@mui/material";
import Cart from "@/components/shared/Cart";
import Header from "@/components/shared/Header";

const CartPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Cart />
      </Container>
    </>
  );
};

export default CartPage;

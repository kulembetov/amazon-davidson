import React from "react";
import Checkout from "@/components/Checkout";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import Header from "@/components/shared/Header";

const CheckoutPage = () => {
  return (
    <>
      <Header hide />
      <Box
        sx={{
          backgroundColor: COLORS.white,

          minHeight: "100vh",
        }}
      >
        <Checkout />
      </Box>
    </>
  );
};

export default CheckoutPage;

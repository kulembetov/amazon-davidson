import React from "react";
import { Container } from "@mui/material";
import Orders from "@/components/shared/Orders";
import Header from "@/components/shared/Header";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";

const OrdersPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: COLORS.white }}>
        <Container maxWidth="xl">
          <Orders />
        </Container>
      </Box>
    </>
  );
};

export default OrdersPage;

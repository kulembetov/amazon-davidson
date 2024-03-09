"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSupabase } from "@/hooks/useSupabase";

const Orders = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();

  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Typography variant="h1" sx={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        Your Orders
      </Typography>{" "}
      {filteredProducts.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </Box>
  );
};

export default Orders;

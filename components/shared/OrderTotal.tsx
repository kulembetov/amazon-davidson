import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";

const OrderTotal = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="h3" sx={{ color: COLORS.red }}>
        Order Total:&nbsp;
      </Typography>
      <Typography variant="h3" sx={{ color: COLORS.red }}>
        ${totalPrice.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default OrderTotal;

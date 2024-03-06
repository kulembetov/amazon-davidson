import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import { Container } from "@mui/material";
import Logo from "@/components/shared/Logo";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";

const CheckoutHeader = ({ items }: { items: number }) => {
  return (
    <Box sx={{ backgroundColor: COLORS.lightGray }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 0 0.5rem 0",
        }}
      >
        <Logo dark />
        <Typography variant="h1" sx={{ fontSize: "1.7rem" }}>
          Checkout (<span style={{ color: COLORS.teal }}>{items} items</span>)
        </Typography>
        <LockIcon />
      </Container>
    </Box>
  );
};

export default CheckoutHeader;

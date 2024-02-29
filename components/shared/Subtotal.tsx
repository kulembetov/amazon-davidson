import React from "react";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";

const Subtotal = ({
  items,
  price,
  sx,
}: {
  items: number;
  price: number;
  sx?: SxProps;
}) => {
  return (
    <Typography
      component="h3"
      variant="h3"
      sx={{ fontSize: "1.2rem", fontWeight: 500, margin: "1rem 0", ...sx }}
    >
      Subtotal ({items} items):{" "}
      <span style={{ fontWeight: 700 }}>${price}</span>{" "}
    </Typography>
  );
};

export default Subtotal;

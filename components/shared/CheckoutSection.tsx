import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomHR from "@/components/shared/CustomHR";
import { SxProps } from "@mui/system";

const CheckoutSection = ({
  number,
  title,
  children,
  sx,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Box sx={{ display: "flex", ...sx }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h2" sx={{ marginRight: "3rem" }}>
            {number}
          </Typography>
          <Typography sx={{ marginRight: "3rem" }} variant="h2">
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
      <CustomHR />
    </Box>
  );
};

export default CheckoutSection;

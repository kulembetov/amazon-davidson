import React from "react";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";

const CustomBox = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.lightGray}`,
        borderRadius: "0.5rem",
        padding: "1rem",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;

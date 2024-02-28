import React from "react";
import { Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { COLORS } from "@/styles/colors";

const CustomButton = ({
  children,
  sx,
  onClick,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  onClick: () => void;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "1rem",
        backgroundColor: COLORS.yellow,
        color: COLORS.black,
        margin: "0.25rem 0",
        textTransform: "capitalize",
        width: "100%",
        "&:hover": {
          backgroundColor: COLORS.darkYellow,
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

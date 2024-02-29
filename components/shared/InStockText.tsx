import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { getRandomNumber } from "@/utils";
import { SxProps } from "@mui/system";
import { COLORS } from "@/styles/colors";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const InStockText = ({ sx }: { sx?: SxProps }) => {
  const [inStock, setInStock] = useState<number>(0);

  useEffect(() => {
    setInStock(getRandomNumber(10));
  }, []);

  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        color: COLORS.red,
        fontWeight: 700,
        margin: "0.5rem 0",
        ...sx,
      }}
    >
      <LocalFireDepartmentIcon /> Only {inStock} in stock - order soon.
    </Typography>
  );
};

export default InStockText;

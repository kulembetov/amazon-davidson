import React from "react";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";

const ProductLinkText = ({
  children,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <span
      style={{ color: COLORS.teal, fontSize: "0.875rem", cursor: "pointer" }}
    >
      {children}
    </span>
  );
};

export default ProductLinkText;

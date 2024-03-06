import React from "react";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
import Link from "next/link";
import { UrlObject } from "node:url";

const ProductLinkText = ({
  children,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Link
      href="/"
      style={{
        color: COLORS.teal,
        fontSize: "0.875rem",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

export default ProductLinkText;

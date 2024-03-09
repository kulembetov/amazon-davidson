import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ProductLinkText from "@/components/shared/ProductLinkText";
import { COLORS } from "@/styles/colors";

const SmallCard = ({ image, heading }: { image: string; heading: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: "1rem",
        width: "15rem",
        borderRadius: "0 0 5px 5px",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "0.5rem" }}>
        {heading}
      </Typography>
      <Image
        src={image}
        alt={`${heading} product`}
        width={225}
        height={300}
        style={{ marginBottom: "1rem" }}
      />
      <ProductLinkText>Shop Now</ProductLinkText>
    </Box>
  );
};

export default SmallCard;

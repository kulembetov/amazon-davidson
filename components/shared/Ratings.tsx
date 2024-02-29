import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Typography from "@mui/material/Typography";

const Ratings = ({ rating }: { rating: { rate: number; count: number } }) => {
  const starImages = [];

  for (let i = 0; i < Math.round(rating.rate); i++) {
    starImages.push(
      <Image
        key={i}
        src="/star-icon.png"
        alt="rating star"
        height={20}
        width={20}
      />,
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
      <Box sx={{ marginRight: "0.5rem" }}>{starImages}</Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          color: COLORS.teal,
          "&:hover": { color: COLORS.orange },
        }}
      >
        {rating.count} ratings
      </Typography>
    </Box>
  );
};

export default Ratings;

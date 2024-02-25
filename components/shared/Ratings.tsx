import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Typography from "@mui/material/Typography";

const Ratings = ({ rating }: { rating: { rate: number; count: number } }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
      <Box sx={{ marginRight: "0.5rem" }}>
        <Image src="/star-icon.png" alt="rating star" height={20} width={20} />
        <Image src="/star-icon.png" alt="rating star" height={20} width={20} />
        <Image src="/star-icon.png" alt="rating star" height={20} width={20} />
        <Image src="/star-icon.png" alt="rating star" height={20} width={20} />
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          color: COLORS.teal,
          "&:hover": { color: COLORS.orange },
        }}
      >
        {rating.count}
      </Typography>
    </Box>
  );
};

export default Ratings;

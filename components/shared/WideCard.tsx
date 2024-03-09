import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const WideCard = ({
  products,
  heading,
}: {
  products: Product[];
  heading: string;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        width: "1120px",
        height: "210px",
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "1.5rem" }}>
        {heading}
      </Typography>
      {products.slice(0, 7).map((product) => {
        return (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Image
              src={product.image!}
              alt={product.title!}
              width={125}
              height={150}
              style={{ marginRight: "2rem" }}
            />
          </Link>
        );
      })}
    </Box>
  );
};

export default WideCard;

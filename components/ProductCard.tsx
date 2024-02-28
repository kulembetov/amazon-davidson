import React, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
import Link from "next/link";
import Ratings from "./shared/Ratings";
import { useRouter } from "next/navigation";
import { Product } from "@/types/supabase";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const selectProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/product/${product.id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        width: 225,
        height: 450,
        margin: "0.5rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={selectProduct}
    >
      <Image
        alt={product.title ?? "Product image"}
        src={product.image ?? "default-image.png"}
        width={226}
        height={257}
        priority
      />
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Typography variant="h2" sx={{ fontWeight: 500, color: COLORS.black }}>
          {(product.title ?? "No title").substring(0, 15)}...
        </Typography>
        <Ratings rating={product.rating ?? { rate: 0, count: 0 }}></Ratings>
        <Typography variant="h2" sx={{ fontWeight: 700, color: COLORS.black }}>
          ${product.price}
        </Typography>
      </Link>
    </Box>
  );
};

export default ProductCard;

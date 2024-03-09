import React from "react";
import { Product } from "@/types/supabase";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const OrderItem = ({
  items,
  date,
  totalPrice,
}: {
  items: Product[];
  date: Date;
  totalPrice: number;
}) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: 150,
          }}
        >
          {items.map((item) => {
            return (
              <Image
                key={item.title}
                src={item.image!}
                alt={item.title!}
                width={55}
                height={75}
                style={{ margin: "0.25rem" }}
              />
            );
          })}
        </Box>
      </Box>
      <Typography>Order {`${month}/${day}/${year}`}</Typography>
      <Typography>${totalPrice}</Typography>
    </Box>
  );
};

export default OrderItem;

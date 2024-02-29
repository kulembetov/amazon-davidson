import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Product } from "@/types/supabase";
import Image from "next/image";
import InStockText from "@/components/shared/InStockText";
import CustomHR from "@/components/shared/CustomHR";
import { Button } from "@mui/material";
import { removeItem } from "@/store/cartSlice";
import { useAppDispatch } from "@/hooks/redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { COLORS } from "@/styles/colors";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";

const CartItem = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem 0",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Image
            src={item.image!}
            alt={item.title!}
            width={225}
            height={257}
            priority
          />
          <Box sx={{ marginLeft: "2rem" }}>
            <Typography variant="h2" style={{ fontWeight: 500 }}>
              {item.title}
            </Typography>
            <InStockText sx={{ fontWeight: 500 }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: COLORS.green,
                }}
              >
                <LoyaltyOutlinedIcon /> Eligible for FREE Shipping & FREE
                Returns
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography sx={{ fontSize: "1.25rem", fontWeight: 700 }}>
            ${item.price}
          </Typography>
          <Button
            style={{
              color: COLORS.mediumBlue,
              backgroundColor: COLORS.lightGray,
              width: "fit-content",
            }}
            onClick={() => dispatch(removeItem(item))}
          >
            <DeleteOutlinedIcon sx={{ color: COLORS.black }} />
          </Button>
        </Box>
      </Box>
      <CustomHR />
    </Box>
  );
};

export default CartItem;

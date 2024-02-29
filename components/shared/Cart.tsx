"use client";
import React, { useState } from "react";
import { CartProduct, Product } from "@/types/supabase";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { clearCart, getCart } from "@/store/cartSlice";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import CustomHR from "@/components/shared/CustomHR";
import CartItem from "@/components/shared/CartItem";
import ProductLinkText from "@/components/shared/ProductLinkText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "next/navigation";
import Subtotal from "@/components/shared/Subtotal";
import { Button } from "@mui/material";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

const Cart = () => {
  const cart = useAppSelector(getCart);
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);

  let total = 0;
  cart.forEach((item: Product) => (total = total + item.price!));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3rem 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.white,
          padding: "2rem",
          width: "55vw",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1">Shopping Cart</Typography>
          <Typography>Price</Typography>
        </Box>
        <CustomHR />
        {cart.map((item: Product) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cart.length === 0 && (
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 500,
              margin: "2rem 0",
              color: COLORS.lightGray,
            }}
          >
            Your cart is empty.
          </Typography>
        )}
        {cart.length > 0 && (
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              color: COLORS.mediumBlue,
              fontWeight: 700,
            }}
            onClick={() => dispatch(clearCart())}
          >
            <DeleteSweepOutlinedIcon
              sx={{
                color: COLORS.mediumBlue,
                width: "30px",
                height: "30px",
                textTransform: "capitalize",
                borderRadius: "3px",
                marginRight: "3px",
                fontWeight: 700,
              }}
            />
            Clear Cart
          </Button>
        )}
        <Subtotal
          items={cart.length}
          price={total}
          sx={{ textAlign: "right" }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.white,
          padding: "1rem",
          width: "15vw",
          height: "fit-content",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{ color: COLORS.green, display: "flex", alignItems: "center" }}
        >
          <CheckCircleIcon sx={{ marginRight: "0.25rem" }} />
          Your order qualifies for FREE Shipping.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ marginLeft: "1.8rem" }}
        >
          Choose this option at checkout.{" "}
          <ProductLinkText>See details</ProductLinkText>
          <Subtotal items={cart.length} price={total}></Subtotal>
          <CustomButton onClick={() => router.push("/checkout")}>
            Proceed to Checkout
          </CustomButton>
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;

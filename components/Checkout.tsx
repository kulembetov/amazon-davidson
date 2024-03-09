"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckoutHeader from "@/components/CheckoutHeader";
import { Container } from "@mui/material";
import CheckoutSection from "@/components/shared/CheckoutSection";
import { COLORS } from "@/styles/colors";
import CustomBox from "@/components/shared/CustomBox";
import CustomButton from "@/components/shared/CustomButton";
import ProductLinkText from "@/components/shared/ProductLinkText";
import CheckoutItem from "@/components/CheckoutItem";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import OrderSummary from "@/components/OrderSummmary";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const cart = useAppSelector(getCart);

  let subtotal = 0;
  cart.forEach((item: Product) => (subtotal = subtotal + item.price!));

  let shipping = 0;

  cart.length === 0
    ? (shipping = 0)
    : subtotal > 100
      ? (shipping = 0)
      : (shipping = 10);

  const totalTax = subtotal * 0.07;

  const orderTotal = subtotal + totalTax + shipping;

  return (
    <Box>
      <CheckoutHeader items={cart.length} />
      <Container sx={{ display: "flex", marginTop: "0.5rem" }}>
        <Box sx={{ width: "45vw" }}>
          <CheckoutSection number={1} title="Shipping address">
            <Typography>
              Harry Potter<br></br> 123 Diagon Alley<br></br> London WC2H 9FB{" "}
              <br></br>United Kingdom
            </Typography>
          </CheckoutSection>
          <CheckoutSection number={2} title={"Payment Method"}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: 700 }}>
                Paying with Galleons
              </Typography>
              <Typography>
                <span style={{ color: COLORS.teal }}>Billing address:</span>{" "}
                Harry Potter, 123 Diagon Alley...
              </Typography>
            </Box>
          </CheckoutSection>
          <CheckoutSection
            sx={{ display: "flex", flexDirection: "column" }}
            number={3}
            title={"Review items and shipping"}
          >
            {cart.map((item: Product) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
            <CustomBox sx={{ display: "flex", marginLeft: "3.5rem" }}>
              <CustomButton
                sx={{ width: "15rem", marginRight: "1rem" }}
                onClick={() => router.push("/orders")}
              >
                Place Your Order
              </CustomButton>
              <Box>
                <Typography variant="h3" sx={{ color: COLORS.red }}>
                  Order total: ${orderTotal.toFixed(2)}
                </Typography>
                <Typography>
                  By placing your order, you agree to Amazon&apos;s{" "}
                  <ProductLinkText>privacy notice </ProductLinkText>
                  and <ProductLinkText>conditions of use</ProductLinkText>.{" "}
                </Typography>
              </Box>
            </CustomBox>
          </CheckoutSection>
        </Box>
        <OrderSummary
          subtotal={subtotal}
          tax={totalTax}
          shipping={shipping}
          total={orderTotal}
        />
      </Container>
    </Box>
  );
};

export default Checkout;

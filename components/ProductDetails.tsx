import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Product } from "@/types/supabase";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CustomHR from "@/components/shared/CustomHR";
import Rating from "@mui/material/Rating";
import { COLORS } from "@/styles/colors";
import ProductLinkText from "@/components/shared/ProductLinkText";
import CustomBox from "@/components/shared/CustomBox";
import Link from "next/link";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getRandomNumber } from "@/utils";
import InStockText from "@/components/shared/InStockText";
import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const StyledLink = styled.a`
  color: ${COLORS.teal};

  &:hover {
    color: ${COLORS.caribbean};
  }
`;

const ProductDetails = ({ product }: { product: Product[] }) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setHours(getRandomNumber(24));
    setMinutes(getRandomNumber(60));
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {product.map((prod: any) => {
        return (
          <Box
            key={prod.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5rem 0",
            }}
          >
            <Image
              src={prod.image!}
              alt={prod.title!}
              width={500}
              height={600}
              style={{ marginRight: "8rem" }}
              priority
            />
            <Box>
              <Typography variant="h1">{prod.title}</Typography>
              <Rating defaultValue={prod.rating.rate}></Rating>
              <CustomHR />
              <Typography
                variant="h2"
                sx={{ fontSize: "2rem", fontWeight: 500, marginBottom: "1rem" }}
              >
                ${prod.price}
              </Typography>
              <ProductLinkText>FREE Returns</ProductLinkText>
              <Typography sx={{ fontSize: "0.75rem", marginTop: "1rem" }}>
                Available at a lower price from other sellers that may not offer
                free Prime shipping.
              </Typography>
              <CustomHR />
              <Typography sx={{ fontWeight: 700 }}>Description</Typography>
              <Typography>{prod.description}</Typography>
            </Box>
            <Box sx={{ marginLeft: "2rem" }}>
              <CustomBox sx={{ width: "`12.5rem", marginBottom: "0.5rem" }}>
                <Image
                  src="/prime-logo.png"
                  alt="prime logo"
                  width={50}
                  height={30}
                />
                <Typography sx={{ fontWeight: 700 }}>
                  Enjoy fast, free delivery, exclusive deals, and award-winning
                  moves & TV shows with Prime.
                </Typography>
                <Typography>
                  <StyledLink
                    href="/"
                    style={{ textDecoration: "none" }}
                  ></StyledLink>
                  and start saving today with{" "}
                  <span style={{ fontWeight: 700 }}>fast, free delivery</span>
                </Typography>
              </CustomBox>
              <CustomBox>
                <Typography sx={{ marginBottom: "0.5rem" }} variant="h2">
                  ${prod.price}
                </Typography>
                <ProductLinkText>FREE Returns</ProductLinkText>
                <Typography sx={{ margin: "0.5rem 0" }}>
                  <ProductLinkText>FREE Delivery</ProductLinkText>{" "}
                  <span style={{ fontWeight: "700" }}>in 2 days</span>
                </Typography>
                <Typography>
                  Or fastest delivery{" "}
                  <span style={{ fontWeight: 700 }}>tomorrow.</span>
                </Typography>
                <Typography>
                  Order within{" "}
                  <span style={{ color: COLORS.green }}>
                    {hours} hrs and {minutes} mins
                  </span>
                  .
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0.5rem 0",
                  }}
                >
                  <LocationOnIcon />
                  <ProductLinkText>Delivery to New York, 10001</ProductLinkText>
                </Typography>
                <InStockText />
                <CustomButton
                  onClick={() => {
                    dispatch(addToCart(prod));
                    router.push("/cart");
                  }}
                >
                  Add to Cart
                </CustomButton>
                <CustomButton
                  sx={{
                    backgroundColor: COLORS.orange,
                    "&:hover": { backgroundColor: COLORS.darkOrange },
                  }}
                  onClick={() => router.push("/checkout")}
                >
                  Buy Now
                </CustomButton>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Ships from</span>
                  <ProductLinkText>Amazon</ProductLinkText>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Returns</span>
                  <ProductLinkText>Eligible</ProductLinkText>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Payments</span>
                  <ProductLinkText>Secured</ProductLinkText>
                </Typography>
              </CustomBox>
            </Box>
          </Box>
        );
      })}
      <CustomHR />
      <Typography variant="h2" sx={{ margin: "2rem 0" }}>
        Buy it with
      </Typography>
    </Box>
  );
};

export default ProductDetails;

import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import Logo from "@/components/shared/Logo";
import SearchBar from "@/components/shared/SearchBar";
import HeaderLink from "@/components/shared/HeaderLink";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ hide }: { hide?: boolean }) => {
  const linkList = [
    "Medical Care",
    "Groceries",
    "Best Sellers",
    "Amazon Basics",
    "Prime",
    "Music",
    "New Releases",
    "Customer Service",
    "Today's Deals",
    "Registry",
    "Books",
    "Pharmacy",
    "Amazon Home",
    "Gift Cards",
    "Fashion",
    "Luxury Stores",
  ];

  if (hide) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkBlue,
        color: COLORS.white,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <SearchBar />
        <Box sx={{ display: "flex" }}>
          <HeaderLink href="/orders">
            <Typography sx={{ fontSize: "0.8rem" }}>Returns</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>
              & Orders
            </Typography>
          </HeaderLink>
          <HeaderLink
            href="/cart"
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <ShoppingCartIcon fontSize="large" />
            <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>
              Cart
            </Typography>
          </HeaderLink>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.mediumBlue,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderLink
          href="/all"
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <MenuIcon sx={{ marginRight: "0.25rem" }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, "&:hover": { color: COLORS.orange } }}
          >
            All
          </Typography>
        </HeaderLink>
        {linkList.map((link) => {
          return (
            <HeaderLink
              href={`/${link.toLowerCase()}`}
              key={link}
              style={{ marginRight: "0.5rem" }}
            >
              <Typography
                variant="body2"
                sx={{ "&:hover": { color: COLORS.orange } }}
              >
                {link}
              </Typography>
            </HeaderLink>
          );
        })}
        <HeaderLink href="/shop-black-owned">
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, "&:hover": { color: COLORS.orange } }}
          >
            Shop Black-owned Business
          </Typography>
        </HeaderLink>
      </Box>
    </Box>
  );
};

export default Header;

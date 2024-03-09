"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import SmallCard from "@/components/shared/SmallCard";
import { heroData } from "@/utils/dashboardData";
import WideCard from "@/components/shared/WideCard";
import { useSupabase } from "@/hooks/useSupabase";

const Dashboard = () => {
  const {
    jewelry,
    getJewelry,
    electronics,
    getElectronics,
    womenClothing,
    getWomenClothing,
    clothing,
    getClothing,
  } = useSupabase();

  const categoryHeaders = [
    { heading: "Best Sellers in Clothing", products: clothing },
    { heading: "Best Sellers in Electronics", products: electronics },
    { heading: "Best Sellers in Jewelry", products: jewelry },
    { heading: "Best Sellers in Women's Clothing", products: womenClothing },
  ];

  useEffect(() => {
    getJewelry();
    getElectronics();
    getWomenClothing();
    getClothing();
  }, [getJewelry, getElectronics, getWomenClothing, getClothing]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Image
        src="/dashboard-1.jpg"
        alt="gaming-controller-ad"
        width={1152}
        height={450}
      />
      <Box sx={{ transform: "translateY(-15rem)" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {heroData.map((product) => {
            return (
              <SmallCard
                key={product.heading}
                heading={product.heading}
                image={product.image}
              />
            );
          })}
        </Box>
        {categoryHeaders.map((category) => {
          return (
            <WideCard
              key={category.heading}
              products={category.products}
              heading={category.heading}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Dashboard;

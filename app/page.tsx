"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { Dashboard } from "@mui/icons-material";
import { Container } from "@mui/material";
import Header from "@/components/shared/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
};

export default Home;

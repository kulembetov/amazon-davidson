"use client";
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "@/components/shared/Header";
import Dashboard from "@/components/shared/Dashboard";

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

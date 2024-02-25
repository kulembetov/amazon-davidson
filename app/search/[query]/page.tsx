"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { Container } from "@mui/material";
import SearchResults from "@/components/shared/SearchResults";

const QueryPage = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  const { query } = useParams();

  useEffect(() => {
    getFilteredProducts(query.toString());
  }, [getFilteredProducts, query]);

  return (
    <Container>
      <SearchResults products={filteredProducts} />
    </Container>
  );
};

export default QueryPage;

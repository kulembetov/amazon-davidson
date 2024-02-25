"use client";
import React, { useEffect } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();

  const { id } = useParams();

  console.log(singleProduct);

  useEffect(() => {
    getSingleProduct(Number(id));
  }, []);

  return <div></div>;
};

export default ProductPage;

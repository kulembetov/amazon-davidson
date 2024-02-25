import { supabase } from "@/lib/supabase/products";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { Product } from "@/types/supabase";
export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product[]>([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (data) setProducts(data);
    if (error) console.error(error);
  };

  const getFilteredProducts = async (filter: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`,
      );

    if (data) setFilteredProducts(data);
    if (error) console.error(error);
  };

  const getSingleProduct = async (id: number) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (data) setSingleProduct(data);
    if (error) console.error(error);
  };

  return {
    products,
    getProducts,
    filteredProducts,
    getFilteredProducts,
    singleProduct,
    getSingleProduct,
  };
};

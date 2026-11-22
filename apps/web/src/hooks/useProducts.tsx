"use client";

import { getProducts } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { fetchProducts, products };
};

export default useProducts;

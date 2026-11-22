"use client";

import { getProducts } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getProducts();
      setProducts(response.product);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch products')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { fetchProducts, products, isLoading, error };
};

export default useProducts;

"use client";

import { getProductsByUsername } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

const useCreatorProducts = (username: string) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getProductsByUsername(username);
      setProducts(response.product);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to Fetch')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, products, isLoading, error };
};

export default useCreatorProducts;

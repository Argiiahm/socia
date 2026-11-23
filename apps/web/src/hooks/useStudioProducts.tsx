"use client";

import { getProductsByUsername } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import { useAuthStore } from "@/stores/auth.store";
import { useEffect, useState } from "react";

const useStudioProducts = () => {
  const { user } = useAuthStore();
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    if (!user?.username) return;
    try {
      setIsLoading(true);
      setError(null);
      const response = await getProductsByUsername(user.username);
      setProducts(response.product);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user?.username]);

  return { products, isLoading, error, refetch: fetchProducts };
};

export default useStudioProducts;

'use client';

import { getProduct } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getProduct(id);
        setProduct(response.product);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch product",
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, error, isLoading }

}

export default useProduct;

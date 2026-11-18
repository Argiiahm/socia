"use client";

import { getProductsByUsername } from "@/services/product.service";
import { useEffect, useState } from "react";

export type CreatorProduct = {
  id: string;
  thumbnail: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  user: {
    id: string;
    username: string;
  };
};

const useCreatorProducts = (username: string) => {
  const [products, setProducts] = useState<CreatorProduct[]>([]);

  const fetchData = async () => {
    const response = await getProductsByUsername(username);
    setProducts(response.product);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, products };
};

export default useCreatorProducts;

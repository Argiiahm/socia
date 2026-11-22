"use client";

import DetailProductCard from "@/components/ui/products/DetailProductCard";
import { getProduct } from "@/services/product.service";
import { ProductTypes } from "@/types/ProductTypes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
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

    if (id) fetchProduct();
  }, [id]);

  return (
    <main className="min-h-screen w-full border-x border-zinc-200/50">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-200/50 px-5 py-4 backdrop-blur">
        <div className="flex w-full items-center justify-between gap-2 text-zinc-300">
          <Link href="/products" aria-label="Back to products">
            <FaArrowLeft />
          </Link>
          <button
            type="button"
            aria-label="Shopping cart"
            className="cursor-pointer rounded-md bg-zinc-700 p-2 text-zinc-300"
          >
            <FiShoppingCart size={16} />
          </button>
        </div>
      </header>

      <div className="p-5">
        {isLoading && <p className="text-sm text-zinc-400">Loading product...</p>}
        {error && <p className="text-sm text-red-400">{error}</p>}
        {!isLoading && !error && !product && (
          <p className="text-sm text-zinc-400">Product not found.</p>
        )}
        {product && <DetailProductCard product={product} />}
      </div>
    </main>
  );
};

export default ProductDetailPage;

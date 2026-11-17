"use client";

import HeaderBar from "@/components/layouts/HeaderBar";
import ProductCard from "@/components/ui/products/ProductCard";
import { getProducts } from "@/services/product.service";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.product);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen w-full border-x border-zinc-200/50">
      <HeaderBar title="Digital Products" />
      <section className="p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {products
            ? products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            : "No Product"}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;

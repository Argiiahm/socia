"use client";

import HeaderBar from "@/components/layouts/HeaderBar";
import ProductCard from "@/components/ui/products/ProductCard";
import { products } from "@/data/Products";

const ProductsPage = () => {
  return (
    <main className="min-h-screen w-full border-x border-zinc-200/50">
      <HeaderBar title="Digital Products" />
      <section className="p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;

"use client";

import ProductCard from "@/components/ui/products/ProductCard";
import useCreatorProducts from "@/hooks/useCreatorProducts";
import { useParams } from "next/navigation";

const CreatorProducts = () => {
  const { username: routeUsername } = useParams<{ username: string }>();
  const username = decodeURIComponent(routeUsername).replace(/^@+/, "");
  const { products } = useCreatorProducts(username);

  return (
    <main>
      <section className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CreatorProducts;

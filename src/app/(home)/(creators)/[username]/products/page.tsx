import ProductCard from "@/components/ui/products/ProductCard";
import products from "@/data/Products";

const CreatorProducts = () => {
  return (
    <main>
      <section className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CreatorProducts;

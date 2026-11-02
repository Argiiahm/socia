import DetailProductCard from "@/components/ui/products/DetailProductCard";
import { products } from "@/data/Products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

type ParamsType = {
  params: Promise<{ slug: string }>;
}

const ProductDetailPage = async ({ params }: ParamsType) => {
  return (
    <Suspense fallback={
      <main>Loading..</main>
    }>
      <ProductDetailPageContent params={params}/>
    </Suspense>
  )
}

const ProductDetailPageContent = async ({ params }: ParamsType) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-900/50 bg-zinc-950/95 px-5 py-4 backdrop-blur">
        <div className="w-full flex items-center justify-between gap-2 text-zinc-2300">
          <Link className="bg-zinc-900 p-2 rounded-md" href="/products">
            <FaArrowLeft />
          </Link>
          <button className="text-zinc-300 cursor-pointer bg-zinc-900 p-2 rounded-md">
            <FiShoppingCart size={16} />
          </button>
        </div>
      </header>

      <div className="p-5">
        <DetailProductCard product={product}/>
      </div>
    </main>
  );
};

export default ProductDetailPage;

import { ProductTypes } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  return (
    <article className="group min-w-0 overflow-hidden">
      <Link href={`products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-zinc-900">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover"
          />
        </div>
        <div className="py-2">
          <h3 className="truncate text-xs font-medium text-zinc-300">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm font-bold text-white">{product.price}</p>
          <p className="mt-1 truncate text-[10px] text-zinc-500">wkwkkw</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

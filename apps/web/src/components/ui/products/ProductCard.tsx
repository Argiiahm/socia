import { ProductTypes } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  return (
    <article className="group min-w-0 overflow-hidden border border-zinc-200/50">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover"
          />
        </div>

        <div className="p-2.5">
          <h3 className="truncate text-[11px] font-semibold text-zinc-500">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-300">
            Lorem ipsum dolor, sit amet consectetur...
          </p>
          <p className="mt-2 text-sm font-bold text-zinc-400">
            {product.price}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

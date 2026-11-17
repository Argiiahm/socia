import { ThreadType } from "@/types/ThreadTypes";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

const AttachThreadProduct = ({ thread }: { thread: ThreadType }) => {
  const product = thread.product;
  if (!product) return null;

  return (
    <div className="mt-3 flex items-center gap-3 rounded-xl border border-zinc-200/50 bg-zinc-100/60 p-2">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200">
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400">
            <FiShoppingBag size={20} />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-xs font-semibold text-zinc-800">
          {product.name}
        </h4>
        <p className="truncate text-[10px] text-zinc-400">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
};

export default AttachThreadProduct;

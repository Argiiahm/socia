import { FiShoppingBag } from "react-icons/fi";

const AttachPostProduct = ({ post }: any) => {
  return (
    <div className="mt-3 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 p-2">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
        <FiShoppingBag size={20} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-xs font-semibold">{post.product.name}</h4>
        <p className="truncate text-[10px] text-zinc-400">
          {post.product.description}
        </p>
      </div>

      <button className="shrink-0 rounded-full bg-white px-4 py-2 font-semibold text-zinc-950 transition hover:bg-zinc-200">
        {post.product.price}
      </button>
    </div>
  );
};

export default AttachPostProduct;

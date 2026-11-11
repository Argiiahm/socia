import { ProductTypes } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiMinus, FiPlus } from "react-icons/fi";

const DetailProductCard = ({ product }: { product: ProductTypes }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
      <section className="min-w-0">
        <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-zinc-900/50 bg-zinc-900/40">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="min-w-0">
        <h1 className="mt-3 text-2xl font-bold tracking-tight">
          {product.name}
        </h1>

        <p className="mt-3 text-xs leading-relaxed text-zinc-300">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">Quantity</span>
          <div className="flex items-center gap-3 rounded-lg border border-zinc-900/50 px-2 py-1.5">
            <button
              aria-label="Decrease quantity"
              className="text-zinc-400 hover:text-white"
            >
              <FiMinus size={13} />
            </button>
            <span className="min-w-4 text-center text-xs">0</span>
            <button
              aria-label="Increase quantity"
              className="text-zinc-400 hover:text-white"
            >
              <FiPlus size={13} />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="rounded-full border border-zinc-900/50  py-3 text-xs font-semibold text-white hover:opacity-80 cursor-pointer">
            Add to cart
          </button>
          <button className="rounded-full bg-zinc-200 py-3 text-xs font-semibold text-zinc-950 hover:opacity-80 cursor-pointer">
            BUY NOW
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-900/50 bg-zinc-900/40 p-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold">
              AM
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold">{product.seller.name}</p>
            </div>
          </div>

          <Link
            href="/profile"
            className="shrink-0 rounded-full border border-zinc-900/50 px-3 py-2 text-[10px] font-medium"
          >
            View store
          </Link>
        </div>
        <div className="my-4">
          <section>
            <h2 className="text-sm font-bold">Whats included</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[11px] text-zinc-300"
                >
                  <FiCheck
                    size={13}
                    className="mt-0.5 shrink-0 text-zinc-400"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  )
}

export default DetailProductCard;

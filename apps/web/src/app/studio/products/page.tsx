"use client";

import StudioButton from "@/components/studio/core/StudioButton";
import StudioBadge from "@/components/studio/core/StudioBadge";
import StudioEmptyState from "@/components/studio/core/StudioEmptyState";
import {
  StudioTable,
  StudioTableRow,
  StudioTableCell,
} from "@/components/studio/core/StudioTableRow";
import useStudioProducts from "@/hooks/useStudioProducts";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import HeaderBar from "@/components/layouts/HeaderBar";

const TABLE_HEADERS = ["Product", "Price", "Status", "Actions"];

const StudioProductsPage = () => {
  const { products, isLoading, error } = useStudioProducts();

  return (
    <div className="min-h-screen">
      <HeaderBar title="Products" description="Manage your product listings" />

      {error && (
        <div className="mx-6 mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-500">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="mt-4 space-y-1 px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-xl bg-zinc-100"
            />
          ))}
        </div>
      ) : (
        <div className="mt-2">
          <StudioTable
            headers={TABLE_HEADERS}
            isEmpty={products.length === 0}
            empty={
              <StudioEmptyState
                icon={AiOutlineShopping}
                title="No products yet"
                description="Start adding products to showcase your work to the world."
                action={
                  <StudioButton icon={AiOutlinePlus} variant="primary">
                    Add First Product
                  </StudioButton>
                }
              />
            }
          >
            {products.map((product) => (
              <StudioTableRow key={product.id}>
                <StudioTableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-800 line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </StudioTableCell>

                <StudioTableCell className="whitespace-nowrap font-semibold text-zinc-700">
                  Rp {product.price.toLocaleString("id-ID")}
                </StudioTableCell>

                <StudioTableCell>
                  <StudioBadge variant="success">Active</StudioBadge>
                </StudioTableCell>

                <StudioTableCell>
                  <div className="flex items-center gap-1">
                    <StudioButton variant="ghost" size="sm" icon={FiEdit2}>
                      Edit
                    </StudioButton>
                    <StudioButton variant="danger" size="sm" icon={FiTrash2}>
                      Delete
                    </StudioButton>
                  </div>
                </StudioTableCell>
              </StudioTableRow>
            ))}
          </StudioTable>
        </div>
      )}
    </div>
  );
};

export default StudioProductsPage;

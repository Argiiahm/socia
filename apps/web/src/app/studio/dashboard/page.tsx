"use client";

import StudioAnalyticsChart from "@/components/studio/core/StudioAnalyticsChart";
import StudioButton from "@/components/studio/core/StudioButton";
import StudioBadge from "@/components/studio/core/StudioBadge";
import {
  StudioTable,
  StudioTableRow,
  StudioTableCell,
} from "@/components/studio/core/StudioTableRow";
import { useAuthStore } from "@/stores/auth.store";
import useStudioProducts from "@/hooks/useStudioProducts";
import useStudioPublications from "@/hooks/useStudioPublications";
import { DUMMY_ANALYTICS } from "@/data/dummyAnalytics";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import HeaderBar from "@/components/layouts/HeaderBar";

dayjs.extend(relativeTime);

const StudioDashboard = () => {
  const { user } = useAuthStore();
  const { products, isLoading: loadingProducts } = useStudioProducts();
  const { publications, isLoading: loadingPubs } = useStudioPublications();

  return (
    <div className="min-h-screen">
      <HeaderBar
        title="Dashboard"
        description={`Welcome back ${user?.fullname}`}
      />

      {/* Analytics Chart & Interactive Stat Cards */}
      <div className="px-6 pt-6">
        <StudioAnalyticsChart data={DUMMY_ANALYTICS} />
      </div>

      {/* Recent Products */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between px-6">
          <h2 className="text-sm font-semibold text-zinc-700">
            Recent Products
          </h2>
          <Link href="/studio/products">
            <StudioButton variant="ghost" size="sm" icon={FiArrowRight}>
              See all
            </StudioButton>
          </Link>
        </div>

        {loadingProducts ? (
          <div className="space-y-1 px-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-14 animate-pulse rounded-xl bg-zinc-100"
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="px-6 text-xs text-zinc-400">No products yet.</p>
        ) : (
          <StudioTable headers={["Product", "Price", "Status"]}>
            {products.slice(0, 4).map((product) => (
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
              </StudioTableRow>
            ))}
          </StudioTable>
        )}
      </section>

      {/* Recent Publications */}
      <section className="mt-8 pb-10">
        <div className="mb-3 flex items-center justify-between px-6">
          <h2 className="text-sm font-semibold text-zinc-700">
            Recent Publications
          </h2>
          <Link href="/studio/publications">
            <StudioButton variant="ghost" size="sm" icon={FiArrowRight}>
              See all
            </StudioButton>
          </Link>
        </div>

        {loadingPubs ? (
          <div className="space-y-1 px-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-14 animate-pulse rounded-xl bg-zinc-100"
              />
            ))}
          </div>
        ) : publications.length === 0 ? (
          <p className="px-6 text-xs text-zinc-400">No publications yet.</p>
        ) : (
          <StudioTable headers={["Article", "Author", "Published"]}>
            {publications.slice(0, 3).map((pub) => (
              <StudioTableRow key={pub.id}>
                <StudioTableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-800 line-clamp-1">
                        {pub.title}
                      </p>
                      <p className="text-[10px] text-zinc-400 line-clamp-1 max-w-[180px]">
                        {pub.content}
                      </p>
                    </div>
                  </div>
                </StudioTableCell>
                <StudioTableCell>
                  <StudioBadge variant="info">@{pub.user.username}</StudioBadge>
                </StudioTableCell>
                <StudioTableCell className="whitespace-nowrap text-zinc-400">
                  {dayjs(pub.createdAt).fromNow()}
                </StudioTableCell>
              </StudioTableRow>
            ))}
          </StudioTable>
        )}
      </section>
    </div>
  );
};

export default StudioDashboard;

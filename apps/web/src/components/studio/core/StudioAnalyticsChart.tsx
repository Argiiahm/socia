"use client";

import { useState } from "react";
import {
  FiShoppingBag,
  FiEye,
  FiBookOpen,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";

export type AnalyticsDataPoint = {
  date: string;
  orders: number;
  productViews: number;
  publicationViews: number;
  threadViews: number;
};

type MetricKey = "orders" | "productViews" | "publicationViews" | "threadViews";

interface MetricConfig {
  key: MetricKey;
  label: string;
  description: string;
  trend: string;
  icon: typeof FiShoppingBag;
}

const METRICS: MetricConfig[] = [
  {
    key: "orders",
    label: "Order Produk",
    description: "Transaksi checkout",
    trend: "+12.5%",
    icon: FiShoppingBag,
  },
  {
    key: "productViews",
    label: "Klik Produk",
    description: "Lihat detail tanpa beli",
    trend: "+8.2%",
    icon: FiEye,
  },
  {
    key: "publicationViews",
    label: "View Publikasi",
    description: "Artikel dibaca",
    trend: "+24.0%",
    icon: FiBookOpen,
  },
  {
    key: "threadViews",
    label: "View Threads",
    description: "Impresi postingan",
    trend: "+15.3%",
    icon: FiMessageSquare,
  },
];

interface StudioAnalyticsChartProps {
  data: AnalyticsDataPoint[];
}

const StudioAnalyticsChart = ({ data }: StudioAnalyticsChartProps) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>("orders");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeConfig = METRICS.find((m) => m.key === selectedMetric)!;

  // Calculate totals
  const totals = METRICS.reduce(
    (acc, m) => {
      acc[m.key] = data.reduce((sum, d) => sum + d[m.key], 0);
      return acc;
    },
    {} as Record<MetricKey, number>,
  );

  // Values for the currently selected metric
  const currentValues = data.map((d) => d[selectedMetric]);
  const maxValue = Math.max(...currentValues, 1);
  const averageValue = Math.round(
    currentValues.reduce((a, b) => a + b, 0) / currentValues.length,
  );

  return (
    <div className="overflow-hidden border border-zinc-200/60 bg-white">
      {/* Clickable Metric Tab Cards */}
      <div className="grid grid-cols-2 divide-x divide-y sm:divide-y-0 sm:grid-cols-4 border-b border-zinc-100">
        {METRICS.map((metric) => {
          const isSelected = selectedMetric === metric.key;
          const Icon = metric.icon;
          const totalVal = totals[metric.key];

          return (
            <button
              key={metric.key}
              type="button"
              onClick={() => setSelectedMetric(metric.key)}
              className={`flex flex-col p-4 text-left cursor-pointer relative ${
                isSelected ? "bg-zinc-50/80" : "bg-white hover:bg-zinc-50/50"
              }`}
            >
              <div className="flex items-center justify-between text-zinc-500">
                <span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-900 transition">
                  {metric.label}
                </span>
                <Icon
                  size={13}
                  className={isSelected ? "text-zinc-900" : "text-zinc-400"}
                />
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-zinc-900">
                  {totalVal.toLocaleString("id-ID")}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
                  <FiTrendingUp size={10} />
                  {metric.trend}
                </span>
              </div>

              <span className="mt-0.5 text-[10px] text-zinc-400 line-clamp-1">
                {metric.description}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="p-5">
        {/* Header inside chart */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-xs font-semibold text-zinc-800">
              Tren Mingguan: {activeConfig.label}
            </h4>
            <p className="text-[11px] text-zinc-400">
              Rata-rata:{" "}
              <span className="font-semibold text-zinc-700">
                {averageValue.toLocaleString("id-ID")} / hari
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500 bg-zinc-100/70 px-2.5 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-zinc-900" />
            <span>7 Hari Terakhir</span>
          </div>
        </div>

        {/*  Modern Bar Chart */}
        <div className="h-44 w-full flex items-end justify-between gap-3 pt-4 px-2">
          {data.map((item, index) => {
            const value = item[selectedMetric];
            const heightPercent = Math.max((value / maxValue) * 100, 8);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.date}
                className="relative flex-1 h-full flex flex-col justify-end items-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-10 z-20 whitespace-nowrap rounded-lg bg-zinc-900 px-2.5 py-1 text-[10px] font-medium text-white shadow-md transition-all animate-in fade-in zoom-in-95">
                    {value.toLocaleString("id-ID")}{" "}
                    {activeConfig.label.toLowerCase()}
                  </div>
                )}

                {/* Bar Track + Bar Fill */}
                <div className="w-full max-w-[42px] h-full flex items-end bg-zinc-100/60 rounded-lg overflow-hidden p-1">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-md transition-all duration-300 ${
                      isHovered
                        ? "bg-zinc-900"
                        : "bg-zinc-800/80 group-hover:bg-zinc-900"
                    }`}
                  />
                </div>

                {/* Day Label */}
                <span
                  className={`mt-2 text-[10px] font-medium transition ${
                    isHovered ? "text-zinc-900 font-bold" : "text-zinc-400"
                  }`}
                >
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudioAnalyticsChart;

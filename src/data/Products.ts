import { ProductTypes } from "@/types/ProductTypes";

export const products: ProductTypes[] = [
  {
    id: 1,
    slug: "macbook-pro-m3",
    name: "MacBook Pro M3",
    price: 22500000,
    thumbnail:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    seller: {
      name: "Andra Wijaya",
    },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",
    ],
    description:
      "MacBook Pro M3 dengan performa tinggi untuk kebutuhan produktivitas, programming, desain, dan pekerjaan kreatif.",
    features: [
      "Apple M3 Chip",
      "8GB Unified Memory",
      "512GB SSD Storage",
      "14-inch Liquid Retina XDR Display",
      "Free Lifetime Updates",
    ],
  },
  {
    id: 2,
    slug: "sony-a7-iii",
    name: "Sony A7 III",
    price: 13500000,
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    seller: {
      name: "Kevin Photo",
    },
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000",
      "https://images.unsplash.com/photo-1510127034890-6ee3b2758d5b?w=1000",
    ],
    description:
      "Sony A7 III merupakan kamera mirrorless full-frame yang cocok untuk fotografi profesional maupun videografi.",
    features: [
      "24.2MP Full-Frame Sensor",
      "4K Video Recording",
      "5-Axis Image Stabilization",
      "693-Point Autofocus",
      "Long Battery Life",
    ],
  },
  {
    id: 3,
    slug: "minimal-table-lamp",
    name: "Minimal Table Lamp",
    price: 675000,
    thumbnail:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    seller: {
      name: "Studio Living",
    },
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000",
    ],
    description:
      "Lampu meja minimalis dengan desain modern yang memberikan pencahayaan nyaman untuk ruang kerja dan kamar.",
    features: [
      "Minimalist Design",
      "Warm LED Lighting",
      "Energy Efficient",
      "Premium Material",
    ],
  },
  {
    id: 4,
    slug: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 1800000,
    thumbnail:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600",
    seller: {
      name: "Rizky Tech",
    },
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=1000",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1000",
    ],
    description:
      "Mechanical keyboard dengan desain compact dan pengalaman mengetik yang responsif untuk produktivitas dan gaming.",
    features: [
      "Mechanical Switches",
      "RGB Backlight",
      "Compact Layout",
      "USB-C Connectivity",
    ],
  },
  {
    id: 5,
    slug: "vintage-camera",
    name: "Vintage Camera",
    price: 3150000,
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    seller: {
      name: "Analog Stories",
    },
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000",
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1000",
    ],
    description:
      "Kamera bergaya vintage untuk penggemar fotografi dengan karakter visual klasik dan timeless.",
    features: [
      "Vintage Design",
      "Classic Photography Style",
      "Portable Body",
      "Premium Build Quality",
    ],
  },
  {
    id: 6,
    slug: "design-books-collection",
    name: "Design Books Collection",
    price: 525000,
    thumbnail:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    seller: {
      name: "Dimas Creative",
    },
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000",
    ],
    description:
      "Koleksi buku pilihan tentang desain, tipografi, visual branding, dan kreativitas untuk desainer.",
    features: [
      "Design Inspiration",
      "Typography References",
      "Branding Guidelines",
      "Creative Resources",
    ],
  },
];

export default products;

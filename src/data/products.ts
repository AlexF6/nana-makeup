// src/data/products.ts
import type { ImageMetadata } from "astro";

import bread from "../assets/images/bread.webp";
import logo from "../assets/images/Nana_logo.jpg";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  category: "Lips" | "Face" | "Eyes" | "Skincare" | "Nails" | "Tools";
  priceCOP: number;
  rating?: number;
  badge?: "New" | "Best seller" | "Limited";
  image: ImageMetadata;

  // ✅ nuevo
  colors: string[]; // ["#F2F0EA", "#18181b", ...]
};

export const products: Product[] = [
  {
    slug: "nana-essentials-kit",
    name: "NANA Essentials Kit",
    desc: "Daily basics • high pigment • long wear.",
    category: "Face",
    priceCOP: 149900,
    rating: 4.9,
    badge: "Best seller",
    image: bread,
    colors: ["#F2F0EA", "#18181b"]
  },
  {
    slug: "lip-tint-sf-4",
    name: "Lip Tint SF 4",
    desc: "Matte finish • comfy wear • bold color.",
    category: "Lips",
    priceCOP: 34900,
    rating: 4.8,
    badge: "New",
    image: bread,
    colors: ["#F2F0EA", "#18181b"]
  },
  {
    slug: "rose-veil-blush",
    name: "Rose Veil Blush",
    desc: "Soft buildable color • velvet finish.",
    category: "Face",
    priceCOP: 58900,
    rating: 4.6,
    image: bread,
    colors: ["#F2F0EA", "#18181b"]
  },
  {
    slug: "midnight-barrier-serum",
    name: "Midnight Barrier Serum",
    desc: "Hydrate • repair • glow-safe finish.",
    category: "Skincare",
    priceCOP: 69900,
    rating: 4.7,
    badge: "New",
    image: bread,
    colors: ["#F2F0EA", "#18181b"]
  },

];

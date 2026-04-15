"use client";

import { useState } from "react";
import Image from "next/image";

/** Extract ASIN from an Amazon affiliate URL like
 *  https://www.amazon.com/dp/B072BY1WLK?tag=shilajit0a-20 */
function extractAsin(affiliateUrl: string): string | null {
  const match = affiliateUrl.match(/\/dp\/([A-Z0-9]{10})/);
  return match ? match[1] : null;
}

/** Resolve the image src and alt for a product card:
 *  - Black Lotus  → local brand photo
 *  - Pure Himalayan → local brand photo
 *  - Amazon products → ASIN-based CDN thumbnail (lazy, with error fallback)
 *  - No Amazon link → null (no image rendered) */
function resolveImage(
  vendor: string,
  affiliateUrl: string
): { src: string; alt: string } | null {
  if (vendor.toLowerCase().includes("black lotus")) {
    return {
      src: "/images/black-lotus-resin.jpg",
      alt: "Black Lotus Pure Altai Shilajit Resin",
    };
  }
  if (vendor.toLowerCase().includes("pure himalayan")) {
    return {
      src: "/images/pure-himalayan-resin.jpg",
      alt: "Pure Himalayan Shilajit Resin",
    };
  }
  const asin = extractAsin(affiliateUrl);
  if (!asin) return null;
  return {
    src: `https://m.media-amazon.com/images/P/${asin}.01._AC_SL300_.jpg`,
    alt: `${vendor} product image`,
  };
}

interface ProductImageProps {
  vendor: string;
  affiliateUrl: string;
  /** Passed to next/image sizes — defaults to a reasonable card size */
  sizes?: string;
}

/**
 * Renders a square product thumbnail at the top of a card.
 * Silently disappears on image load error (e.g. when Amazon CDN has no image for an ASIN).
 */
export default function ProductImage({
  vendor,
  affiliateUrl,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const image = resolveImage(vendor, affiliateUrl);

  if (!image || failed) return null;

  return (
    <div className="relative w-full aspect-square overflow-hidden bg-[#F0FAF4] border-b border-[#D1EDD8]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-contain p-3"
        sizes={sizes}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

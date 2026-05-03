/**
 * Shared affiliate click tracking utility.
 * Used by AffiliateClickTracker (global listener) — do not duplicate inline.
 */

export type AffiliateName =
  | "Black Lotus"
  | "Pure Himalayan"
  | "Natural Shilajit"
  | "Purblack"
  | "Lotus Blooming Herbs"
  | "Amazon";

/**
 * Returns the affiliate brand name for a given href, or null if it's not an
 * affiliate link we track.
 */
export function getAffiliateName(href: string): AffiliateName | null {
  if (
    href.includes("black-lotus-shilajit-shop.myshopify.com") ||
    href.includes("sca_ref=5188496")
  ) {
    return "Black Lotus";
  }
  if (href.includes("purehimalayanshilajit.com") && href.includes("ref=4792")) {
    return "Pure Himalayan";
  }
  if (href.includes("naturalshilajit.com")) {
    return "Natural Shilajit";
  }
  if (href.includes("purblack.pxf.io")) {
    return "Purblack";
  }
  if (href.includes("lotusbloomingherbs.com")) {
    return "Lotus Blooming Herbs";
  }
  if (href.includes("shilajit0a-20") || href.includes("amzn.to")) {
    return "Amazon";
  }
  return null;
}

export interface AffiliateClickExtra {
  /** Human-readable product name, e.g. "Pure Altai Resin 30g" */
  product_name?: string;
  /** Where on the site the click happened, e.g. "product_grid" | "editors_picks" |
   *  "blog_cta" | "footer" | "compare_page" */
  click_location?: string;
}

/**
 * Fires a GA4 `affiliate_click` event if the href matches a known affiliate.
 * Safe to call server-side — guards against missing window/gtag.
 *
 * Extra params (product_name, click_location) are populated from data attributes
 * on the anchor element by AffiliateClickTracker and passed through here.
 */
export function trackAffiliateClick(
  href: string,
  extra?: AffiliateClickExtra
): void {
  const affiliate_brand = getAffiliateName(href);
  if (!affiliate_brand) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "affiliate_click", {
    affiliate_brand,
    product_name: extra?.product_name ?? "",
    click_location: extra?.click_location ?? "unknown",
    page_location: window.location.href,
  });
}

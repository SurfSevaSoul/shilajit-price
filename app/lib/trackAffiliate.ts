/**
 * Shared affiliate click tracking utility.
 * Used by AffiliateClickTracker (global listener) — do not duplicate inline.
 */

export type AffiliateName = "Black Lotus" | "Pure Himalayan" | "Amazon";

/**
 * Returns the affiliate name for a given href, or null if it's not an
 * affiliate link we track.
 */
export function getAffiliateName(href: string): AffiliateName | null {
  if (
    href.includes("black-lotus-shilajit-shop.myshopify.com") ||
    href.includes("sca_ref=5188496")
  ) {
    return "Black Lotus";
  }
  if (
    href.includes("purehimalayanshilajit.com") &&
    href.includes("ref=4792")
  ) {
    return "Pure Himalayan";
  }
  if (href.includes("shilajit0a-20")) {
    return "Amazon";
  }
  return null;
}

/**
 * Fires a GA4 `affiliate_click` event if the href matches a known affiliate.
 * Safe to call server-side — guards against missing window/gtag.
 */
export function trackAffiliateClick(href: string): void {
  const affiliateName = getAffiliateName(href);
  if (!affiliateName) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "affiliate_click", {
    affiliate_name: affiliateName,
    page_location: window.location.href,
  });
}

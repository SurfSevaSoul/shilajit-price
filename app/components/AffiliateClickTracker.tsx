"use client";

/**
 * AffiliateClickTracker
 *
 * Registers a single document-level click listener that automatically fires a
 * GA4 `affiliate_click` event for every affiliate link on the site — including
 * server-rendered blog posts where onClick props are not possible.
 *
 * Renders nothing. Mount once in app/layout.tsx.
 */

import { useEffect } from "react";
import { trackAffiliateClick } from "../lib/trackAffiliate";

export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Walk up from the exact target in case the click landed on a child element
      // (e.g. an <svg> or <span> inside the <a>).
      const anchor = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      trackAffiliateClick(href);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

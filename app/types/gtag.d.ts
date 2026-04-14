// Type declaration for the GA4 gtag function injected by next/script.
// Keeps trackAffiliate.ts type-safe without pulling in @types/gtag.js.

type GtagCommand = "event" | "config" | "get" | "set" | "consent" | "js";

interface Window {
  gtag: (command: GtagCommand, target: string, params?: Record<string, unknown>) => void;
  dataLayer: unknown[];
}

"use client";

/**
 * Lightweight analytics placeholder. Renders nothing unless
 * NEXT_PUBLIC_ANALYTICS_ENABLED is set to "true".
 * Replace the contents with your analytics script when ready.
 */
export function AnalyticsPlaceholder() {
  if (typeof window === "undefined") return null;
  const enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
  if (!enabled) return null;

  // Placeholder: add your analytics script here (e.g. Vercel Analytics, Plausible, etc.)
  return null;
}

/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain before launch. The fallback keeps
 * metadata valid in local development and preview deployments.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ephtech.ng";

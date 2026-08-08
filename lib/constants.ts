const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const INSTALLER_DOWNLOAD_URL = `${basePath}/downloads/VerixaBimSuite_Setup_v1.0.0.exe`;

// Replace this URL with your actual Lemon Squeezy product checkout link
// e.g. "https://verixa-tool.lemonsqueezy.com/buy/YOUR-PRODUCT-ID" or "https://verixa-tool.lemonsqueezy.com"
export const LEMON_SQUEEZY_CHECKOUT_URL = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_URL || "https://verixa-tool.lemonsqueezy.com/checkout/buy/e968209d-3119-4f39-9d28-419068f3445e";

export type BillingCycle = "week" | "month" | "year";

export type AddonId = "coupon" | "payment" | "branding";

export const PLAN_PRICING: Record<BillingCycle, { price: number; label: string; bestFor: string; badge?: string }> = {
  week: { price: 1500, label: "1 Week", bestFor: "One-off events" },
  month: { price: 2500, label: "1 Month", bestFor: "Active operators" },
  year: { price: 5900, label: "1 Year", bestFor: "Best value", badge: "Save 80%" },
};

export const ADDONS: { id: AddonId; title: string; price: number | "custom"; note?: string; items: string[] }[] = [
  {
    id: "coupon",
    title: "Coupon System",
    price: 1000,
    items: ["Promotion campaigns", "Event coupons", "QR redemption"],
  },
  {
    id: "payment",
    title: "Payment Integration",
    price: 10000,
    note: "Partnered with Chillpay",
    items: ["QR payment", "Credit card", "Event monetization"],
  },
  {
    id: "branding",
    title: "Custom Branding",
    price: "custom",
    items: ["Custom UI", "Custom colors", "Enterprise setup"],
  },
];

export type Account = {
  fullName: string;
  company: string;
  email: string;
  password: string;
  confirm: string;
  phone?: string;
  social?: string;
};

export type BuyState = {
  account: Account;
  cycle: BillingCycle;
  addons: AddonId[];
};

export const DEFAULT_STATE: BuyState = {
  account: { fullName: "", company: "", email: "", password: "", confirm: "", phone: "", social: "" },
  cycle: "year",
  addons: [],
};

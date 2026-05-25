export type BillingCycle = "week" | "month" | "year";

export type AddonId = "coupon" | "multicam" | "multiprint" | "payment";

export const MACHINES_PER_LICENSE = 2;

export const PLAN_PRICING: Record<BillingCycle, { price: number; label: string; bestFor: string; badge?: string }> = {
  week: { price: 1500, label: "1 Week", bestFor: "One-off events" },
  month: { price: 2500, label: "1 Month", bestFor: "Active operators" },
  year: { price: 5900, label: "1 Year", bestFor: "Best value", badge: "Save 80%" },
};

export const ADDONS: { id: AddonId; title: string; price: number | "custom" | null; note?: string; items: string[] }[] = [
  {
    id: "coupon",
    title: "Coupon Code System",
    price: 2000,
    items: ["Promo campaigns", "QR redemption", "Discount codes", "Reward experiences"],
  },
  {
    id: "multicam",
    title: "Multi Camera Control",
    price: 5000,
    items: ["Multi-camera switching", "Synchronized capture", "Per-camera profiles", "Live preview"],
  },
  {
    id: "multiprint",
    title: "Multi Print Features",
    price: 2000,
    items: ["Multi-printer queue", "Layout per printer", "Print routing rules", "High-volume support"],
  },
  {
    id: "payment",
    title: "Payment Integration",
    price: null,
    note: "ChillPay (Free) — PromptPay 1.9% / Other 3.2%. Other gateways upon requirement.",
    items: ["ChillPay free integration", "PromptPay 1.9%", "Other cards 3.2%", "Custom gateway on request"],
  },
];

export type Account = {
  fullName: string;
  company: string;
  email: string;
  password: string;
  confirm: string;
  phone: string;
};

export type BuyState = {
  account: Account;
  cycle: BillingCycle;
  quantity: number;
  addons: AddonId[];
  notes: string;
};

export const DEFAULT_STATE: BuyState = {
  account: { fullName: "", company: "", email: "", password: "", confirm: "", phone: "" },
  cycle: "year",
  quantity: 1,
  addons: [],
  notes: "",
};

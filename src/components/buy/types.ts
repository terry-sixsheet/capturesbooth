export type BillingCycle = "week" | "month" | "year";

export type AddonId = "coupon" | "payment";

export const PLAN_PRICING: Record<BillingCycle, { price: number; label: string; bestFor: string; badge?: string }> = {
  week: { price: 1500, label: "1 Week", bestFor: "One-off events" },
  month: { price: 2500, label: "1 Month", bestFor: "Active operators" },
  year: { price: 5900, label: "1 Year", bestFor: "Best value", badge: "Save 80%" },
};

export const ADDONS: { id: AddonId; title: string; price: number | "custom"; note?: string; items: string[] }[] = [
  {
    id: "coupon",
    title: "Promotion Engine",
    price: 1000,
    items: ["Promo campaigns", "QR redemption", "Discount codes", "Reward experiences"],
  },
  {
    id: "payment",
    title: "CAP*TURES PAY",
    price: 10000,
    note: "Partnered with Chillpay",
    items: ["QR payment", "Credit card", "Paid event flows", "Instant checkout"],
  },
  {
    id: "branding",
    title: "Custom Experience Studio",
    price: "custom",
    items: ["Custom event flow", "CRM & registration", "Gamification & live gallery", "Advanced interaction logic"],
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

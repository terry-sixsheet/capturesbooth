import { Section } from "./Section";
import { Ticket, CreditCard, Code2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const addons = [
  {
    icon: Ticket,
    title: "Coupon System",
    price: "+1,000 THB",
    items: ["Discount codes", "Event redemption", "Promo campaigns"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    price: "+10,000 THB",
    items: ["QR payment", "Credit card", "Event monetization"],
    note: "Partnered with Chillpay",
  },
  {
    icon: Code2,
    title: "Custom Software",
    price: "Custom",
    items: ["Branded UI", "Bespoke flows", "Hardware integration"],
    cta: "Contact Sales",
  },
];

export function AddonsExtend({ showPrice = true }: { showPrice?: boolean }) {
  return (
    <Section
      eyebrow="Add-ons"
      title={<>Extend Your <span className="text-orange-impact">Experience</span></>}
      description="Power-ups for serious operators — add only what you need."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {addons.map(({ icon: Icon, title, price, items, note, cta }) => (
          <div
            key={title}
            className="rounded-3xl border border-border bg-card/60 p-7 hover-lift hover:border-orange-impact/40"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-impact/15 text-orange-impact">
                <Icon className="h-5 w-5" />
              </div>
              {showPrice && <span className="text-xs font-bold text-lemon">{price}</span>}
            </div>
            <h4 className="mt-5 font-display text-xl font-bold">{title}</h4>
            {note && <div className="mt-1 text-xs text-muted-foreground">{note}</div>}
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-orange-impact" />
                  {it}
                </li>
              ))}
            </ul>
            {cta && (
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lemon hover:gap-3 transition-all"
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

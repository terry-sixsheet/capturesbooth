import { Section } from "./Section";
import {
  CalendarRange,
  Camera,
  Wand2,
  QrCode,
  Printer,
  Briefcase,
  Ticket,
  CreditCard,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const categories = [
  {
    icon: CalendarRange,
    title: "Event Builder",
    items: ["Event creation", "Multi-event setup", "Workflow config", "Session management"],
  },
  {
    icon: Camera,
    title: "Capture Engine",
    items: ["Canon DSLR support", "Webcam support", "GIF & Video", "Multi-shot countdown"],
  },
  {
    icon: Wand2,
    title: "Creative Tools",
    items: ["Frame editor", "Sticker system", "Brand overlays", "Filters"],
  },
  {
    icon: QrCode,
    title: "Share Experience",
    items: ["QR sharing", "Online gallery", "Social-ready outputs", "Instant delivery"],
  },
  {
    icon: Printer,
    title: "Printing System",
    items: ["Strip & full layouts", "Brand print output", "Sticker printing", "Printer config"],
  },
  {
    icon: Briefcase,
    title: "Business Tools",
    items: ["Multi-event mgmt", "Cloud sharing", "Team operations", "Analytics (soon)"],
  },
];

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

export function CoreFeatures() {
  return (
    <Section
      eyebrow="Core Features"
      title={<>Everything you need to <span className="text-lemon">run the experience</span></>}
      description="One platform. Six categories of capability. Built for the realities of live events."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="group rounded-3xl glass p-7 hover-lift hover:border-lemon/30"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon group-hover:bg-lemon group-hover:text-primary-foreground transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-lemon" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h3 className="font-display text-3xl sm:text-4xl font-black">Extend Your Experience</h3>
          <span className="text-sm text-muted-foreground">Add-on ecosystem</span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {addons.map(({ icon: Icon, title, price, items, note, cta }) => (
            <div key={title} className="rounded-3xl border border-border bg-card/60 p-7 hover-lift hover:border-orange-impact/40">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-impact/15 text-orange-impact">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-lemon">{price}</span>
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
      </div>
    </Section>
  );
}

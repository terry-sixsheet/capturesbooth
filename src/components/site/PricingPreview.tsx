import { Section } from "./Section";
import { Check, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Free",
    desc: "Get started — try the platform.",
    price: "0",
    period: "Starter",
    items: ["Single event", "Limited 200 images / event", "Photo + GIF capture", "Basic frames"],
    cta: { label: "Download Trial", to: "/download" as const },
  },
  {
    name: "Pro",
    desc: "Run the experience at full scale.",
    price: "2,500",
    period: "/ month",
    featured: true,
    items: [
      "Multi-event support",
      "Online gallery + QR sharing",
      "Business tools & analytics",
      "DSLR + webcam capture",
      "Frame editor + brand overlays",
      "Printing system",
    ],
    cta: { label: "Buy Now", to: "/pricing" as const },
    extra: "1 Week 1,500 ฿ · 1 Year 5,900 ฿",
  },
  {
    name: "Add-on",
    desc: "Power-ups for serious operators.",
    price: "Custom",
    period: "Add-on Features",
    items: [
      "AI Photo Enhancement",
      "Live Slideshow & Social Wall",
      "Custom Branded Microsites",
      "Advanced Print Layouts",
      "Multi-language Kiosk UI",
      "Priority Support & Onboarding",
    ],
    cta: { label: "Talk to Sales", to: "/contact" as const },
    extra: "Pricing per add-on · Contact us",
  },
];

export function PricingPreview() {
  return (
    <Section
      eyebrow="Pricing"
      title={<>Simple, premium <span className="text-lemon">pricing</span></>}
      description="Free to start. Pro to scale. Add-ons to go further."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-8 hover-lift ${
              p.featured
                ? "bg-gradient-to-br from-lemon/15 via-card to-card border border-lemon/40 glow-lemon"
                : "glass"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 right-6 rounded-full bg-lemon px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
                Most Popular
              </span>
            )}
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.name}</div>
            <h3 className="mt-2 font-display text-3xl font-bold">{p.desc}</h3>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-black">{p.price === "0" ? "Free" : `฿${p.price}`}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </div>
            {p.extra && <div className="mt-1 text-xs text-muted-foreground">{p.extra}</div>}
            <ul className="mt-6 space-y-3 text-sm">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.featured ? "bg-lemon text-primary-foreground" : "bg-muted text-foreground"}`}>
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/90">{it}</span>
                </li>
              ))}
            </ul>
            <Link
              to={p.cta.to}
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                p.featured ? "bg-lemon text-primary-foreground" : "border border-border hover:border-lemon hover:text-lemon"
              }`}
            >
              {!p.featured && <Download className="h-4 w-4" />}
              {p.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

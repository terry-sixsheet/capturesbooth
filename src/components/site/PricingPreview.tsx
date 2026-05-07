import { useState } from "react";
import { Section } from "./Section";
import { Check, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";

type BillingCycle = "week" | "month" | "year";

const proPricing: Record<BillingCycle, { price: string; period: string; note: string }> = {
  week: { price: "1,500", period: "/ week", note: "Perfect for one-off events" },
  month: { price: "2,500", period: "/ month", note: "Flexible monthly billing" },
  year: { price: "5,900", period: "/ year", note: "Best value — save over 80%" },
};

const proItems = [
  "Multi-event support",
  "Online gallery + QR sharing",
  "Business tools & analytics",
  "DSLR + webcam capture",
  "Frame editor + brand overlays",
  "Printing system",
];

const freeItems = [
  "Single event",
  "Limited 200 images / event",
  "DSLR + webcam capture",
  "Frame editor + brand overlays",
  "Printing system",
  "Photo + GIF capture",
  "Basic frames",
];

export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("year");
  const pro = proPricing[cycle];

  return (
    <Section
      eyebrow="Pricing"
      title={<>Simple, premium <span className="text-lemon">pricing</span></>}
      description="Free to start. Pro to scale. No hidden fees."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Free */}
        <div className="relative rounded-3xl p-8 hover-lift glass">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Free</div>
          <h3 className="mt-2 font-display text-3xl font-bold">Get started — try the platform.</h3>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-black">Free</span>
            <span className="text-muted-foreground">Starter</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {freeItems.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-muted text-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{it}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/download"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] border border-border hover:border-lemon hover:text-lemon"
          >
            <Download className="h-4 w-4" />
            Download Trial
          </Link>
        </div>

        {/* Pro */}
        <div className="relative rounded-3xl p-8 hover-lift bg-gradient-to-br from-lemon/15 via-card to-card border border-lemon/40 glow-lemon">
          <span className="absolute -top-3 right-6 rounded-full bg-lemon px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
            Most Popular
          </span>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pro</div>
          <h3 className="mt-2 font-display text-3xl font-bold">Run the experience at full scale.</h3>

          {/* Billing toggle */}
          <div className="mt-5 inline-flex rounded-full border border-border bg-background/40 p-1">
            {(["week", "month", "year"] as BillingCycle[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  cycle === c
                    ? "bg-lemon text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-black">฿{pro.price}</span>
            <span className="text-muted-foreground">{pro.period}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{pro.note}</div>

          <ul className="mt-6 space-y-3 text-sm">
            {proItems.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-lemon text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{it}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/buy"
            search={{ cycle }}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] bg-lemon text-primary-foreground"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </Section>
  );
}

import { useState } from "react";
import { Section } from "./Section";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

type BillingCycle = "week" | "month" | "year";

const growPricing: Record<BillingCycle, { price: string; period: string; note: string }> = {
  week: { price: "1,500", period: "/ week", note: "Perfect for one-off events" },
  month: { price: "2,500", period: "/ month", note: "Flexible monthly billing" },
  year: { price: "5,900", period: "/ year", note: "Best value — save over 80%" },
};

const startFeatures = [
  "Single event",
  "DSLR + webcam support",
  "Photo + GIF capture",
  "Printing system",
  "Frame editor",
  "Basic templates",
  "200 captures per event",
];

const growFeatures = [
  "Everything in START",
  "Multi-event management",
  "Online gallery",
  "QR sharing",
  "Business analytics",
  "Faster workflows",
  "Cloud sharing",
];

export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("year");
  const grow = growPricing[cycle];

  return (
    <Section
      eyebrow="Choose Your Stage"
      title={<>Start. Grow. <span className="text-lemon">Scale.</span></>}
      description="A growth journey for modern event experience businesses — not just another pricing page."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {/* START */}
        <div className="relative rounded-3xl p-8 hover-lift glass flex flex-col">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              Stage 1 · Start
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold">Create your first event experiences.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Perfect for beginners, small events, and testing the platform.
          </p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-black">Free</span>
            <span className="text-muted-foreground">forever</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm flex-1">
            {startFeatures.map((it) => (
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
            Start Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* GROW */}
        <div className="relative rounded-3xl p-8 hover-lift bg-gradient-to-br from-lemon/15 via-card to-card border border-lemon/40 glow-lemon flex flex-col">
          <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-lemon px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-lemon/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lemon">
              Stage 2 · Grow
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold">Turn your booth into a real business.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Built for active operators, event teams, agencies, and wedding businesses.
          </p>

          <div className="mt-5 inline-flex rounded-full border border-border bg-background/40 p-1 self-start">
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
            <span className="font-display text-5xl font-black">฿{grow.price}</span>
            <span className="text-muted-foreground">{grow.period}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{grow.note}</div>

          <ul className="mt-6 space-y-3 text-sm flex-1">
            {growFeatures.map((it) => (
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
            Start Growing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

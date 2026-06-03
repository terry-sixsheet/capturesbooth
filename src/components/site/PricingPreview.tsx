import { useState } from "react";
import { Section } from "./Section";
import { Check, ArrowRight, Sparkles, Crown } from "lucide-react";
import { Link } from "@tanstack/react-router";

type BillingCycle = "week" | "month" | "year";

const proPricing: Record<BillingCycle, { price: string; period: string; note: string }> = {
  week: { price: "1,500", period: "/ week", note: "Perfect for one-off events" },
  month: { price: "2,500", period: "/ month", note: "Flexible monthly billing" },
  year: { price: "7,900", period: "/ year", note: "Best value — save over 80%" },
};

const startFeatures = [
  "Multi-event management — Limited to 25 prints per event",
  "DSLR + webcam support",
  "Photo captures, GIF captures",
  "Printing configure support",
  "Design layout frame",
  "Basic templates (default)",
  "1 connected machine",
];

const proFeatures = [
  "Everything in START",
  "Unlimited captures",
  "Live photo captures",
  "Guest flow timeout & global rotation",
  "QR sharing and online gallery",
  "Filter features",
  "Sticker features",
  "Advanced configuration for Pro (see Manual)",
  "Import & export events template",
  "+1 additional connected machine for testing (e.g. buy 2 licenses, get 3 machines)",
];

const enterpriseFeatures = [
  "Everything in PRO",
  "Unlimited events & captures",
  "Full custom experiences",
  "AI Photobooth features",
  "Custom integrations & API",
  "Dedicated account manager",
  "Priority onsite support",
  "SLA & enterprise security",
];

export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("year");
  const pro = proPricing[cycle];

  return (
    <Section
      eyebrow="Choose Your Stage"
      title={<>Start. Pro. <span className="text-lemon">Scale.</span></>}
      description="A growth journey for modern event experience businesses — not just another pricing page."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-muted text-foreground shrink-0">
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

        {/* PRO */}
        <div className="relative rounded-3xl p-8 hover-lift bg-gradient-to-br from-lemon/15 via-card to-card border border-lemon/40 glow-lemon flex flex-col">
          <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-lemon px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-lemon/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lemon">
              Stage 2 · Pro
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
            <span className="font-display text-5xl font-black">฿{pro.price}</span>
            <span className="text-muted-foreground">{pro.period}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{pro.note}</div>

          <ul className="mt-6 space-y-3 text-sm flex-1">
            {proFeatures.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-lemon text-primary-foreground shrink-0">
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
            Go Pro
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ENTERPRISE */}
        <div className="relative rounded-3xl p-8 hover-lift glass border border-border flex flex-col">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <Crown className="h-3 w-3" />
              Stage 3 · Enterprise
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold">Scale without limits — fully tailored.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For brands, agencies, and large operators that need unlimited usage and full customization.
          </p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-black">Custom</span>
            <span className="text-muted-foreground">talk to sales</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Tailored to your business and event volume</div>

          <ul className="mt-6 space-y-3 text-sm flex-1">
            {enterpriseFeatures.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-muted text-foreground shrink-0">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{it}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] border border-border hover:border-lemon hover:text-lemon"
          >
            Contact Sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

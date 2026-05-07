import { Section } from "./Section";
import { Zap, ShieldCheck, MousePointerClick, Wallet, Sparkles } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Setup", desc: "Ready in minutes, not hours." },
  { icon: ShieldCheck, title: "Reliable", desc: "Offline-ready. Built for live events." },
  { icon: MousePointerClick, title: "Interactive", desc: "Beyond basic photo capture." },
  { icon: Wallet, title: "Monetization Ready", desc: "Payments + coupons built in." },
  { icon: Sparkles, title: "Modern Experience", desc: "Premium UI and workflows." },
];

export function WhyCaptures() {
  return (
    <Section
      eyebrow="Why CAP*TURES"
      title={<>Built for <span className="text-lemon">real</span> events</>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-3xl glass p-6 hover-lift hover:border-lemon/30">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

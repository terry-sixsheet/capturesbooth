import { Check } from "lucide-react";
import { type BillingCycle, PLAN_PRICING } from "./types";

const FEATURES = [
  "Multi-event support",
  "Online gallery + QR sharing",
  "Printing system",
  "GIF / video capture",
  "Creative tools",
  "Business analytics",
];

export function PlanStep({
  cycle,
  onChange,
  onNext,
  onBack,
}: {
  cycle: BillingCycle;
  onChange: (c: BillingCycle) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black">Choose your license</h2>
        <p className="mt-2 text-sm text-muted-foreground">All plans include the full Pro feature set.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {(Object.keys(PLAN_PRICING) as BillingCycle[]).map((c) => {
          const p = PLAN_PRICING[c];
          const active = cycle === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onChange(c)}
              className={`relative text-left rounded-3xl border p-7 transition-all hover-lift ${
                active
                  ? "border-lemon bg-gradient-to-br from-lemon/15 via-card to-card glow-lemon"
                  : "border-border bg-card/40 hover:border-lemon/40"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-lemon px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
                  {p.badge}
                </span>
              )}
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.label}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-black">฿{p.price.toLocaleString()}</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{p.bestFor}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground/85">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-lemon" : "text-muted-foreground"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <Nav onBack={onBack} onNext={onNext} />
    </div>
  );
}

export function Nav({ onBack, onNext, nextLabel = "Continue", disabled }: { onBack?: () => void; onNext: () => void; nextLabel?: string; disabled?: boolean }) {
  return (
    <div className="mt-10 flex items-center justify-between">
      {onBack ? (
        <button onClick={onBack} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back
        </button>
      ) : <span />}
      <button
        onClick={onNext}
        disabled={disabled}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-lemon px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-40"
      >
        {nextLabel}
      </button>
    </div>
  );
}

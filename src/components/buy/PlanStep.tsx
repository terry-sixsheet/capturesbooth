import { Check, Minus, Plus } from "lucide-react";
import { type BillingCycle, PLAN_PRICING, MACHINES_PER_LICENSE } from "./types";

const FEATURES = [
  "Everything in START",
  "Live photo captures",
  "QR sharing and online gallery",
  "Filter features",
  "Sticker features",
  "Advanced configuration for Pro (see Manual)",
  "Import & export events template",
  "2 connected machines per license",
];

export function PlanStep({
  cycle,
  onChange,
  quantity,
  onQuantityChange,
  onNext,
  onBack,
}: {
  cycle: BillingCycle;
  onChange: (c: BillingCycle) => void;
  quantity: number;
  onQuantityChange: (q: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const machines = quantity * MACHINES_PER_LICENSE;
  const unitPrice = PLAN_PRICING[cycle].price;
  const subtotal = unitPrice * quantity;

  return (
    <div>
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black">Choose your license</h2>
        <p className="mt-2 text-sm text-muted-foreground">All Pro licenses include the full feature set. Each license unlocks {MACHINES_PER_LICENSE} connected machines.</p>
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

      {/* Quantity selector */}
      <div className="mt-8 rounded-2xl border border-lemon/30 bg-card/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">License quantity</div>
          <div className="mt-1 text-sm text-foreground/90">
            <span className="font-semibold">{quantity}</span> license{quantity > 1 ? "s" : ""} · unlocks{" "}
            <span className="font-semibold text-lemon">{machines} connected machine{machines > 1 ? "s" : ""}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center rounded-full border border-border bg-background/50 p-1">
            <button
              type="button"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted transition-colors disabled:opacity-40"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                onQuantityChange(Number.isFinite(v) && v > 0 ? Math.min(99, v) : 1);
              }}
              className="w-12 bg-transparent text-center font-display text-lg font-bold outline-none"
            />
            <button
              type="button"
              onClick={() => onQuantityChange(Math.min(99, quantity + 1))}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Subtotal</div>
            <div className="font-display text-xl font-black">฿{subtotal.toLocaleString()}</div>
          </div>
        </div>
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

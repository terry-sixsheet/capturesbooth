import { Check, Plus } from "lucide-react";
import { ADDONS, type AddonId, type BillingCycle, PLAN_PRICING } from "./types";
import { Nav } from "./PlanStep";

export function AddonsStep({
  cycle,
  selected,
  onToggle,
  notes,
  onNotesChange,
  onNext,
  onBack,
}: {
  cycle: BillingCycle;
  selected: AddonId[];
  onToggle: (id: AddonId) => void;
  notes: string;
  onNotesChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const planPrice = PLAN_PRICING[cycle].price;
  const addonsTotal = ADDONS.filter((a) => selected.includes(a.id) && typeof a.price === "number")
    .reduce((s, a) => s + (a.price as number), 0);
  const total = planPrice + addonsTotal;

  return (
    <div>
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black">
          Extend your <span className="text-orange-impact">experience</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Power-ups for serious operators — add only what you need.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {ADDONS.map((a) => {
          const on = selected.includes(a.id);
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => onToggle(a.id)}
              className={`relative text-left rounded-3xl border p-7 transition-all hover-lift ${
                on
                  ? "border-orange-impact bg-gradient-to-br from-orange-impact/15 via-card to-card"
                  : "border-border bg-card/40 hover:border-orange-impact/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-impact/15 text-orange-impact">
                  {on ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
                <span className="text-xs font-bold text-lemon">
                  {typeof a.price === "number" ? `+฿${a.price.toLocaleString()}` : "Custom"}
                </span>
              </div>
              <h4 className="mt-5 font-display text-xl font-bold">{a.title}</h4>
              {a.note && <div className="mt-1 text-xs text-muted-foreground">{a.note}</div>}
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {a.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-orange-impact" />
                    {it}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Live total */}
      <div className="mt-10 rounded-2xl border border-lemon/30 bg-card/60 p-5 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Live total</div>
          <div className="mt-1 font-display text-3xl font-black">
            ฿{total.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/ {cycle}</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground text-right">
          {PLAN_PRICING[cycle].label}
          {selected.length > 0 && ` + ${selected.length} add-on${selected.length > 1 ? "s" : ""}`}
        </div>
      </div>

      <Nav onBack={onBack} onNext={onNext} nextLabel="Continue to checkout" />
    </div>
  );
}

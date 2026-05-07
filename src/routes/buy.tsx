import { useState } from "react";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import { StepIndicator } from "@/components/buy/StepIndicator";
import { AccountStep } from "@/components/buy/AccountStep";
import { PlanStep } from "@/components/buy/PlanStep";
import { AddonsStep } from "@/components/buy/AddonsStep";
import { DEFAULT_STATE, type AddonId, type BillingCycle } from "@/components/buy/types";

const searchSchema = z.object({
  cycle: z.enum(["week", "month", "year"]).optional(),
});

export const Route = createFileRoute("/buy")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Get CAP*TURES — Onboarding" },
      { name: "description", content: "Create your account, choose a plan, and activate your CAP*TURES license." },
    ],
  }),
  component: BuyPage,
});

const STEPS = ["Account", "Plan", "Add-ons", "Checkout"];

function BuyPage() {
  const search = useSearch({ from: "/buy" });
  const [step, setStep] = useState(0);
  const [state, setState] = useState({
    ...DEFAULT_STATE,
    cycle: (search.cycle as BillingCycle) ?? DEFAULT_STATE.cycle,
  });

  const toggleAddon = (id: AddonId) =>
    setState((s) => ({
      ...s,
      addons: s.addons.includes(id) ? s.addons.filter((a) => a !== id) : [...s.addons, id],
    }));

  return (
    <section className="relative py-16 sm:py-24 min-h-[80vh]">
      <div className="container-max">
        <div className="mb-12">
          <StepIndicator steps={STEPS} current={step} />
        </div>

        {step === 0 && (
          <AccountStep
            account={state.account}
            onChange={(account) => setState({ ...state, account })}
            onNext={() => setStep(1)}
          />
        )}
        {step === 1 && (
          <PlanStep
            cycle={state.cycle}
            onChange={(cycle) => setState({ ...state, cycle })}
            onBack={() => setStep(0)}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <AddonsStep
            cycle={state.cycle}
            selected={state.addons}
            onToggle={toggleAddon}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <div className="mx-auto max-w-xl text-center rounded-3xl border border-lemon/30 bg-card/40 p-12">
            <div className="text-xs uppercase tracking-[0.2em] text-lemon">Coming next</div>
            <h2 className="mt-3 font-display text-3xl font-black">Checkout & payment</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Secure checkout, payment, success screen and license dashboard ship in the next phase.
            </p>
            <button
              onClick={() => setStep(2)}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to add-ons
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

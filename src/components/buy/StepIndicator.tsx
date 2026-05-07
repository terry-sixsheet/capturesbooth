import { Check } from "lucide-react";

export function StepIndicator({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between gap-2">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-bold transition-all ${
                done
                  ? "bg-lemon text-primary-foreground border-lemon"
                  : active
                  ? "border-lemon text-lemon glow-lemon"
                  : "border-border text-muted-foreground"
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <div
              className={`hidden sm:block text-xs uppercase tracking-wider ${
                active ? "text-foreground font-bold" : "text-muted-foreground"
              }`}
            >
              {label}
            </div>
            {i < steps.length - 1 && (
              <div className={`h-px flex-1 ${done ? "bg-lemon" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

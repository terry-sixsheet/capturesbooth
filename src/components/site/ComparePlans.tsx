import { Section } from "./Section";
import { Check, Minus } from "lucide-react";

type Cell = boolean | string;

const rows: { label: string; start: Cell; grow: Cell }[] = [
  { label: "Events", start: "Single", grow: "Unlimited" },
  { label: "Images per Event", start: "200", grow: "Unlimited" },
  { label: "QR Sharing", start: false, grow: true },
  { label: "Online Gallery", start: false, grow: true },
  { label: "Analytics", start: false, grow: true },
  { label: "Multi-event Support", start: false, grow: true },
  { label: "Payment Integration", start: false, grow: "Add-on" },
  { label: "Promotions", start: false, grow: "Add-on" },
  { label: "Custom Branding", start: false, grow: "Add-on" },
];

function CellView({ value, accent }: { value: Cell; accent?: boolean }) {
  if (value === true)
    return (
      <span className={`inline-grid h-6 w-6 place-items-center rounded-full ${accent ? "bg-lemon text-primary-foreground" : "bg-muted text-foreground"}`}>
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted/40 text-muted-foreground">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  return <span className={`text-sm font-semibold ${accent ? "text-lemon" : "text-foreground/90"}`}>{value}</span>;
}

export function ComparePlans() {
  return (
    <Section
      eyebrow="Compare Stages"
      title={<>Find your <span className="text-lemon">fit.</span></>}
      description="A clear look at what comes with each stage."
      align="center"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/40 overflow-hidden">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center px-6 py-5 border-b border-border bg-background/40">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Feature</div>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Stage 1</div>
            <div className="font-display text-lg font-bold">Start</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-widest text-lemon">Stage 2</div>
            <div className="font-display text-lg font-bold">Pro</div>
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-6 py-4 ${
              i !== rows.length - 1 ? "border-b border-border/60" : ""
            }`}
          >
            <div className="text-sm text-foreground/90">{row.label}</div>
            <div className="text-center"><CellView value={row.start} /></div>
            <div className="text-center"><CellView value={row.grow} accent /></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

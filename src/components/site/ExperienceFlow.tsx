import { Section } from "./Section";

const steps = [
  { n: "01", title: "Idle Screen", desc: "Tap anywhere to begin." },
  { n: "02", title: "Mode Select", desc: "Photo · GIF · Video." },
  { n: "03", title: "Frame Selection", desc: "Choose layout & experience." },
  { n: "04", title: "Countdown", desc: "Interactive capture moment." },
  { n: "05", title: "Capturing", desc: "Multi-shot sequence." },
  { n: "06", title: "Review", desc: "Preview before continue." },
  { n: "07", title: "Edit", desc: "Stickers · draw · filters." },
  { n: "08", title: "Payment", desc: "Optional QR payment." },
  { n: "09", title: "Printing", desc: "Instant output." },
  { n: "10", title: "Share", desc: "QR · online gallery." },
  { n: "11", title: "Done", desc: "Session complete." },
];

export function ExperienceFlow() {
  return (
    <Section
      eyebrow="Experience Flow"
      title={<>From Start to <span className="text-orange-impact">Share</span></>}
      description="Eleven simple steps — from first tap to final share."
      align="center"
    >
      <ol className="mx-auto max-w-3xl divide-y divide-border/60 rounded-2xl border border-border bg-card/40">
        {steps.map((s) => (
          <li
            key={s.n}
            className="group flex items-center gap-5 px-5 py-4 transition-colors hover:bg-lemon/5"
          >
            <span className="font-display text-xl font-black text-lemon w-10 shrink-0 tabular-nums">
              {s.n}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lemon shrink-0" />
            <span className="font-semibold text-foreground min-w-[140px]">{s.title}</span>
            <span className="text-sm text-muted-foreground truncate">{s.desc}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

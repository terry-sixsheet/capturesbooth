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
      description="Designed for seamless real-world event experiences — every screen, every tap, engineered for speed and joy."
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-lemon/40 to-transparent hidden lg:block" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-border bg-card/40 p-5 hover-lift hover:border-lemon/40"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-black text-lemon">{s.n}</span>
                <span className="h-2 w-2 rounded-full bg-lemon group-hover:animate-pulse" />
              </div>
              <div className="mt-3 font-semibold text-foreground">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

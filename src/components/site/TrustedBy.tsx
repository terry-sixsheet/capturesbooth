const logos = [
  "CAP*TURES PHOTOBOOTH SOLUTION",
  "ANDY & FINE — PHOTOHOUSE",
  "POSE OFFICE (PHUKET)",
  "CAP*TURES (LAOS)",
  "TRUE ALPHA HUB x SUCH A SMALL WORLD",
];

const metrics = [
  { value: "1,200+", label: "Events powered" },
  { value: "2.4M+", label: "Photos delivered" },
  { value: "2", label: "Countries supported" },
  { value: "80+", label: "Locations hosted" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background/40 py-16">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-black text-gradient-lemon">{m.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Trusted by event teams, agencies & studios
        </div>
        <div className="overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="font-display text-2xl font-black tracking-widest text-muted-foreground/70 hover:text-lemon transition-colors whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

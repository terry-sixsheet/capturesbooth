const logos = ["SIXSHEET", "ANDY&FINE", "POSE OFFICE PHUKET", "BACC MARKET", "EXPERIENCE LAB", "STUDIO 88"];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background/40 py-12">
      <div className="container-max">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by event teams & studios
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

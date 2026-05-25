import masterpieceHospital from "@/assets/customers/masterpiece-hospital.png";

type LogoItem = { name: string; image?: string };

const logos: LogoItem[] = [
  { name: "CAP*TURES PHOTOBOOTH SOLUTION" },
  { name: "ANDY & FINE — PHOTOHOUSE" },
  { name: "POSE OFFICE (PHUKET)" },
  { name: "CAP*TURES (LAOS)" },
  { name: "TRUE ALPHA HUB x SUCH A SMALL WORLD" },
  { name: "Masterpiece Hospital", image: masterpieceHospital },
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
          <div className="flex w-max items-center gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, i) =>
              logo.image ? (
                <img
                  key={i}
                  src={logo.image}
                  alt={logo.name}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity bg-white/90 rounded-md px-3 py-1.5"
                />
              ) : (
                <span
                  key={i}
                  className="font-display text-2xl font-black tracking-widest text-muted-foreground hover:text-lemon transition-colors whitespace-nowrap"
                >
                  {logo.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

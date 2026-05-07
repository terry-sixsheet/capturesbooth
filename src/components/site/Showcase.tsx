import { Section } from "./Section";
import dashboard from "@/assets/dashboard-ui.jpg";
import hero from "@/assets/hero-event.jpg";

export function Showcase() {
  return (
    <Section
      eyebrow="Showcase"
      title={<>Real software. <span className="text-lemon">Real events.</span></>}
      description="A glimpse at the dashboards, capture screens, share flows, and prints powering CAP*TURES events."
    >
      <div className="grid gap-5 md:grid-cols-6 md:grid-rows-2">
        <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl border border-border hover-lift">
          <img src={dashboard} alt="CAP*TURES dashboard" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
            <div className="text-xs uppercase tracking-[0.2em] text-lemon">Event Dashboard</div>
            <div className="font-display text-2xl font-bold">All your events. One screen.</div>
          </div>
        </div>
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border hover-lift">
          <img src={hero} alt="Event experience" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 to-transparent">
            <div className="text-xs uppercase tracking-[0.2em] text-orange-impact">Live Event</div>
            <div className="font-display text-lg font-bold">Built for the floor.</div>
          </div>
        </div>
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-lemon/15 to-card p-6 hover-lift">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">QR Share</div>
          <div className="mt-3 font-display text-xl font-bold">Scan. Save. Share.</div>
          <div className="mt-5 grid h-28 w-28 place-items-center rounded-2xl bg-foreground text-background">
            <div className="grid grid-cols-5 gap-0.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className={`h-2 w-2 ${Math.random() > 0.45 ? "bg-background" : "bg-foreground"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

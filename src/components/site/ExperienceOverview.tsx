import { Section } from "./Section";
import { Sparkles, CalendarRange, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Create Experiences",
    body: "Build interactive photo moments with frames, GIFs, video, printing, and live event flows.",
  },
  {
    icon: CalendarRange,
    title: "Run Events",
    body: "Manage events, guests, sharing, galleries, and operations from one platform.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    body: "Unlock monetization, promotions, custom branding, and advanced event experiences.",
  },
];

export function ExperienceOverview() {
  return (
    <Section
      eyebrow="The Platform"
      title={<>One platform. <span className="text-lemon">Three stages of growth.</span></>}
      description="From your first event to a full experience business — CAP*TURES grows with you."
      align="center"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group rounded-3xl glass p-8 hover-lift hover:border-lemon/40 transition-colors"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

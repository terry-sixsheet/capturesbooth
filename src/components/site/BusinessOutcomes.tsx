import { Section } from "./Section";
import { Sparkles, Briefcase, TrendingUp } from "lucide-react";
import outcomeEvent from "@/assets/outcome-event.jpg";
import outcomeOperations from "@/assets/outcome-operations.jpg";
import outcomeGrowth from "@/assets/outcome-growth.jpg";

const groups = [
  {
    icon: Sparkles,
    image: outcomeEvent,
    tag: "Event Experience",
    title: "Turn every event into a branded interactive moment.",
    body: "Live galleries, AI experiences, and instant sharing keep guests engaged long after the booth closes.",
    items: [
      { name: "Live Gallery", body: "A real-time wall guests can't stop watching." },
      { name: "Instant Sharing", body: "Guests receive and share photos in seconds." },
      { name: "AI Experience", body: "Smart effects that feel personal and premium." },
      { name: "Guest Engagement", body: "Interactive flows that drive social reach." },
    ],
  },
  {
    icon: Briefcase,
    image: outcomeOperations,
    tag: "Business Operations",
    title: "Run your entire studio from a single dashboard.",
    body: "Plan events, manage clients, and coordinate teams without juggling spreadsheets and chat threads.",
    items: [
      { name: "Event Dashboard", body: "Every event, every status — at a glance." },
      { name: "Client Management", body: "Briefs, assets, and delivery in one place." },
      { name: "Multi-event Control", body: "Run dozens of activations in parallel." },
      { name: "Team Workflow", body: "Roles, handoffs, and ops without friction." },
    ],
  },
  {
    icon: TrendingUp,
    image: outcomeGrowth,
    tag: "Growth & Branding",
    title: "Grow into an experience business — not just a booth.",
    body: "Branding, lead capture, and analytics turn every event into measurable business value.",
    items: [
      { name: "Branding", body: "On-brand frames, overlays, and galleries." },
      { name: "Analytics", body: "See what's working across every event." },
      { name: "Lead Collection", body: "Capture audience data ethically and instantly." },
      { name: "Custom Experiences", body: "Bespoke flows for premium clients." },
    ],
  },
];

export function BusinessOutcomes() {
  return (
    <Section
      eyebrow="The Platform"
      title={<>Built for <span className="text-lemon">business outcomes</span> — not feature lists.</>}
      description="CAP*TURES brings together everything modern photobooth operators need to deliver, run, and scale premium event experiences."
      align="center"
    >
      <div className="space-y-8">
        {groups.map(({ icon: Icon, tag, title, body, items }) => (
          <div key={tag} className="rounded-3xl glass p-8 sm:p-10 hover-lift">
            <div className="grid lg:grid-cols-[1.1fr_2fr] gap-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-lemon/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-lemon">
                  <Icon className="h-3.5 w-3.5" />
                  {tag}
                </div>
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold leading-tight text-balance">{title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((it) => (
                  <div key={it.name} className="rounded-2xl bg-background/40 border border-border p-5 hover:border-lemon/30 transition-colors">
                    <div className="font-display text-base font-bold">{it.name}</div>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{it.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "./Section";
import {
  CalendarRange,
  Camera,
  Wand2,
  QrCode,
  Printer,
  Briefcase,
} from "lucide-react";

const categories = [
  {
    icon: CalendarRange,
    title: "Event Builder",
    items: ["Event creation", "Multi-event setup", "Workflow config", "Session management"],
  },
  {
    icon: Camera,
    title: "Capture Engine",
    items: ["Canon DSLR support", "Webcam support", "GIF & Video", "Multi-shot countdown"],
  },
  {
    icon: Wand2,
    title: "Creative Tools",
    items: ["Frame editor", "Sticker system", "Brand overlays", "Filters"],
  },
  {
    icon: QrCode,
    title: "Share Experience",
    items: ["QR sharing", "Online gallery", "Social-ready outputs", "Instant delivery"],
  },
  {
    icon: Printer,
    title: "Printing System",
    items: ["Strip & full layouts", "Brand print output", "Sticker printing", "Printer config"],
  },
  {
    icon: Briefcase,
    title: "Business Tools",
    items: ["Multi-event mgmt", "Cloud sharing", "Team operations", "Analytics (soon)"],
  },
];


export function CoreFeatures() {
  return (
    <Section
      eyebrow="Core Features"
      title={<>Everything you need to <span className="text-lemon">run the experience</span></>}
      description="One platform. Six categories of capability. Built for the realities of live events."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="group rounded-3xl glass p-7 hover-lift hover:border-lemon/30"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon group-hover:bg-lemon group-hover:text-primary-foreground transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-lemon" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </Section>
  );
}

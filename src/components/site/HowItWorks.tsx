import { Section } from "./Section";
import { CalendarPlus, Wand2, Camera, Share2, BarChart3 } from "lucide-react";

const steps = [
  { icon: CalendarPlus, title: "Create Event", body: "Spin up a new event in under a minute with reusable templates." },
  { icon: Wand2, title: "Customize Experience", body: "Add brand frames, overlays, AI effects, and guest flows." },
  { icon: Camera, title: "Capture Photos", body: "DSLR, webcam, video, GIF — capture every kind of moment." },
  { icon: Share2, title: "Share Instantly", body: "Guests receive and share photos seconds after the shutter." },
  { icon: BarChart3, title: "Manage & Analyze", body: "Track engagement and deliver clean reports to clients." },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it Works"
      title={<>From setup to scale in <span className="text-lemon">five steps.</span></>}
      description="A workflow built around how real event teams operate — not how software companies think they should."
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map(({ icon: Icon, title, body }, i) => (
          <div key={title} className="relative rounded-2xl glass p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-lemon/15 text-lemon">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display text-3xl font-black text-foreground/15">0{i + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

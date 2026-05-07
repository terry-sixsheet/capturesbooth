import { Section } from "./Section";
import { Wrench, Camera, Share2 } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Build Events",
    desc: "Create branded experiences, configure flows, manage sessions and presets across multiple events.",
    accent: "lemon",
  },
  {
    icon: Camera,
    title: "Capture Moments",
    desc: "Photo, GIF, video — DSLR or webcam. Multi-shot sequences with countdown and live preview.",
    accent: "orange",
  },
  {
    icon: Share2,
    title: "Share Experiences",
    desc: "Instant prints, QR sharing, and online galleries. Social-ready outputs in seconds.",
    accent: "lemon",
  },
];

export function WhatIs() {
  return (
    <Section
      eyebrow="What is CAP*TURES"
      title={<>A Modern Photo Booth as a <span className="text-lemon">Service</span> Platform</>}
      description="CAP*TURES combines software, event workflows, and interactive experiences into one powerful platform for modern event businesses."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc, accent }, i) => (
          <div
            key={title}
            className="group relative rounded-3xl glass p-8 hover-lift hover:border-lemon/30 animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-lemon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl ${
                accent === "lemon" ? "bg-lemon/15 text-lemon" : "bg-orange-impact/15 text-orange-impact"
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

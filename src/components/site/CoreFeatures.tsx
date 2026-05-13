import { Section } from "./Section";
import {
  CalendarRange,
  Camera,
  Wand2,
  QrCode,
  Printer,
  Briefcase,
} from "lucide-react";
import type { ReactNode } from "react";

/* ---------- Mock UIs (lightweight, on-brand) ---------- */

function MockEventBuilder() {
  return (
    <div className="rounded-xl bg-background/60 border border-border p-3 text-[10px]">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-foreground">Events</span>
        <span className="rounded-full bg-lemon px-2 py-0.5 text-[9px] font-bold text-primary-foreground">+ New</span>
      </div>
      {[
        { n: "Wedding · Andy & Fine", d: "Sat 12 Apr", live: true },
        { n: "Brand Launch · Nike", d: "Tue 22 Apr" },
        { n: "Festival · Wonderfruit", d: "Fri 09 May" },
      ].map((e) => (
        <div key={e.n} className="flex items-center justify-between py-1.5 border-t border-border/60 first:border-t-0">
          <div>
            <div className="text-foreground/90">{e.n}</div>
            <div className="text-muted-foreground">{e.d}</div>
          </div>
          {e.live && <span className="h-1.5 w-1.5 rounded-full bg-lemon animate-pulse" />}
        </div>
      ))}
    </div>
  );
}

function MockCapture() {
  return (
    <div className="relative rounded-xl bg-background/60 border border-border p-3 text-[10px] overflow-hidden">
      <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-orange-impact/30 via-lemon/10 to-background grid place-items-center">
        <div className="font-display text-3xl font-black text-lemon drop-shadow">3</div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="rounded-md bg-card px-1.5 py-0.5 text-foreground/80">DSLR</span>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-lemon" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        </div>
        <span className="text-muted-foreground">GIF · 4 shots</span>
      </div>
    </div>
  );
}

function MockCreative() {
  return (
    <div className="rounded-xl bg-background/60 border border-border p-3 text-[10px]">
      <div className="flex gap-2">
        <div className="aspect-[3/4] flex-1 rounded-md border-2 border-lemon bg-gradient-to-br from-orange-impact/40 to-background relative">
          <span className="absolute top-1 left-1 rounded bg-lemon px-1 text-[8px] font-bold text-primary-foreground">FRAME</span>
          <span className="absolute bottom-1 right-1 text-[8px] text-foreground/70">★</span>
        </div>
        <div className="flex flex-col gap-1.5 w-12">
          {["Frame", "Sticker", "Filter", "Logo"].map((t, i) => (
            <div key={t} className={`rounded px-1.5 py-1 text-[9px] text-center ${i === 0 ? "bg-lemon text-primary-foreground font-bold" : "bg-card text-muted-foreground"}`}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockShare() {
  return (
    <div className="rounded-xl bg-background/60 border border-border p-3 text-[10px] flex items-center gap-3">
      <div className="h-16 w-16 rounded-md bg-foreground/95 grid place-items-center">
        <div className="grid grid-cols-5 gap-px">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className={`h-1 w-1 ${[0,2,4,6,8,12,14,18,20,22,24].includes(i) ? "bg-background" : "bg-foreground/95"}`} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-foreground">Scan to download</div>
        <div className="text-muted-foreground mt-0.5">cap.tures/g/ay83</div>
        <div className="mt-1.5 flex gap-1">
          <span className="rounded bg-card px-1.5 py-0.5 text-foreground/80">IG</span>
          <span className="rounded bg-card px-1.5 py-0.5 text-foreground/80">TT</span>
          <span className="rounded bg-card px-1.5 py-0.5 text-foreground/80">FB</span>
        </div>
      </div>
    </div>
  );
}

function MockPrint() {
  return (
    <div className="rounded-xl bg-background/60 border border-border p-3 text-[10px]">
      <div className="flex gap-2 items-end">
        {[
          { w: "w-6", label: "2×6" },
          { w: "w-10", label: "4×6" },
          { w: "w-12", label: "5×7" },
        ].map((p) => (
          <div key={p.label} className="flex flex-col items-center gap-1">
            <div className={`${p.w} h-16 rounded-sm bg-card border border-border flex flex-col p-0.5 gap-0.5`}>
              <div className="flex-1 rounded-[2px] bg-orange-impact/40" />
              <div className="flex-1 rounded-[2px] bg-lemon/40" />
              <div className="flex-1 rounded-[2px] bg-foreground/30" />
            </div>
            <span className="text-muted-foreground">{p.label}</span>
          </div>
        ))}
        <div className="ml-auto text-right">
          <div className="text-foreground font-semibold">Queue</div>
          <div className="text-muted-foreground">3 / 120</div>
        </div>
      </div>
    </div>
  );
}

function MockBusiness() {
  const bars = [40, 65, 50, 80, 72, 95, 88];
  return (
    <div className="rounded-xl bg-background/60 border border-border p-3 text-[10px]">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-muted-foreground">Captures this week</div>
          <div className="font-display text-base font-black text-foreground">12,480</div>
        </div>
        <span className="rounded-full bg-lemon/15 text-lemon px-2 py-0.5 font-bold">+24%</span>
      </div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-lemon" : "bg-foreground/20"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const categories: {
  icon: typeof CalendarRange;
  title: string;
  items: string[];
  mock: ReactNode;
}[] = [
  {
    icon: CalendarRange,
    title: "Event Builder",
    items: ["Event creation", "Multi-event setup", "Workflow config", "Session management"],
    mock: <MockEventBuilder />,
  },
  {
    icon: Camera,
    title: "Capture Engine",
    items: ["Canon DSLR support", "Webcam support", "GIF & Video", "Multi-shot countdown"],
    mock: <MockCapture />,
  },
  {
    icon: Wand2,
    title: "Creative Tools",
    items: ["Frame editor", "Sticker system", "Brand overlays", "Filters"],
    mock: <MockCreative />,
  },
  {
    icon: QrCode,
    title: "Share Experience",
    items: ["QR sharing", "Online gallery", "Social-ready outputs", "Instant delivery"],
    mock: <MockShare />,
  },
  {
    icon: Printer,
    title: "Printing System",
    items: ["Strip & full layouts", "Brand print output", "Sticker printing", "Printer config"],
    mock: <MockPrint />,
  },
  {
    icon: Briefcase,
    title: "Business Tools",
    items: ["Multi-event management", "Online gallery", "QR sharing", "Cloud sharing Gallery"],
    mock: <MockBusiness />,
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
        {categories.map(({ icon: Icon, title, items, mock }) => (
          <div
            key={title}
            className="group rounded-3xl glass p-6 hover-lift hover:border-lemon/30 flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-lemon/15 text-lemon group-hover:bg-lemon group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
            </div>

            <div className="mt-5">{mock}</div>

            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
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

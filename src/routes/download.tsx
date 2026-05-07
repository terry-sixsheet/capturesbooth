import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Download, Cpu, HardDrive, Monitor, Camera } from "lucide-react";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download — CAP*TURES Free Trial" },
      { name: "description", content: "Download the CAP*TURES Windows installer and start running events in minutes." },
      { property: "og:title", content: "Download CAP*TURES" },
      { property: "og:description", content: "Free trial. Windows installer. Quick setup." },
    ],
  }),
  component: DownloadPage,
});

const requirements = [
  { icon: Monitor, label: "OS", value: "Windows 10 / 11 (64-bit)" },
  { icon: Cpu, label: "CPU", value: "Intel i5 / Ryzen 5 or better" },
  { icon: HardDrive, label: "Storage", value: "2 GB free disk space" },
  { icon: Camera, label: "Camera", value: "Canon DSLR or USB Webcam" },
];

const changelog = [
  { v: "v2.4", date: "May 2026", notes: ["New frame editor", "Chillpay integration GA", "Performance improvements"] },
  { v: "v2.3", date: "Mar 2026", notes: ["Online gallery", "Multi-event dashboard", "GIF export upgrade"] },
  { v: "v2.2", date: "Jan 2026", notes: ["Coupon system", "DSLR auto-focus presets"] },
];

function DownloadPage() {
  return (
    <>
      <Section
        eyebrow="Download"
        title={<>Get CAP*TURES for <span className="text-lemon">Windows</span></>}
        description="Free trial includes 200 images per event. Upgrade anytime to Pro."
        align="center"
      >
        <div className="mx-auto max-w-xl rounded-3xl glass p-8 text-center glow-lemon">
          <div className="font-display text-2xl font-bold">CAP*TURES Booth · v2.4</div>
          <div className="mt-1 text-sm text-muted-foreground">Windows installer · 184 MB</div>
          <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-lemon px-6 py-3.5 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow">
            <Download className="h-4 w-4" /> Download Free Trial
          </button>
        </div>
      </Section>

      <Section eyebrow="System Requirements" title="What you'll need">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-border bg-card/50 p-6 hover-lift">
              <Icon className="h-5 w-5 text-lemon" />
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
              <div className="mt-1 font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Changelog" title="Latest releases">
        <div className="space-y-4">
          {changelog.map((c) => (
            <div key={c.v} className="rounded-2xl glass p-6">
              <div className="flex items-baseline justify-between">
                <div className="font-display text-xl font-bold">{c.v}</div>
                <div className="text-sm text-muted-foreground">{c.date}</div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {c.notes.map((n) => (
                  <li key={n} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-lemon" />{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

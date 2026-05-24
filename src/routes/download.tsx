import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Download, Cpu, HardDrive, Monitor, Camera, MemoryStick, Gpu, Usb, Fan } from "lucide-react";

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
  { icon: Cpu, label: "CPU", value: "Intel Core i7-12700H / 13620H or AMD Ryzen 7 6800H / 7735HS (8C/16T or better)" },
  { icon: MemoryStick, label: "RAM", value: "16 GB DDR4/DDR5" },
  { icon: HardDrive, label: "Storage", value: "512 GB NVMe Gen3 (TLC only — no QLC)" },
  { icon: Gpu, label: "GPU", value: "Integrated (Iris Xe / Radeon 680M)" },
  { icon: Monitor, label: "Display", value: "15.6\" 1920×1080" },
  { icon: Usb, label: "Ports", value: "2× USB-A + 1× USB-C, GbE or USB-Ethernet adapter" },
  { icon: Fan, label: "Cooling / PSU", value: "Dual-fan chassis, ≥150 W charger" },
  { icon: Camera, label: "OS", value: "Windows 11 Home/Pro x64" },
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

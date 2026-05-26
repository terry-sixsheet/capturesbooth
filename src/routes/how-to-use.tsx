import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FileText, BookOpen, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/how-to-use")({
  head: () => ({
    meta: [
      { title: "How To Use — CAP*TURES" },
      { name: "description", content: "Video tutorials, step-by-step setup, and troubleshooting for CAP*TURES." },
      { property: "og:title", content: "How To Use CAP*TURES" },
      { property: "og:description", content: "Tutorials and setup guides for your photobooth platform." },
    ],
  }),
  component: HowTo,
});

const tutorials = [
  { title: "Install & First Event", time: "4 min", desc: "From download to first capture in under 5 minutes." },
  { title: "Configure Camera", time: "6 min", desc: "Connect Canon, set focus, dial in lighting presets." },
  { title: "Setup Event Cover Images", time: "5 min", desc: "Set up AI cutout and chroma backgrounds for branded scenes." },
  { title: "Frame Editor", time: "8 min", desc: "Design strips, full-frames, GIFs, and brand overlays." },
  { title: "Printer Configuration", time: "5 min", desc: "DNP, Canon, and Epson setup with print queue tuning." },
  { title: "QR Sharing & Online Gallery", time: "5 min", desc: "Cloud upload, photoshare gallery, and download links." },
  { title: "Payments & Coupons", time: "7 min", desc: "Chillpay integration, pricing, and promo redemption." },
  { title: "Report and Dashboard", time: "5 min", desc: "Manage workflows and devices across simultaneous events." },
];



function HowTo() {
  return (
    <>
      <Section
        eyebrow="How To Use"
        title={<>Learn CAP*TURES in <span className="text-lemon">minutes</span></>}
        description="Short videos, clear steps, real answers."
        align="center"
      />
      <Section eyebrow="Manual" title={<>Full <span className="text-lemon">Documentation</span></>} description="Complete product manual, advanced configuration, and reference guides — hosted on GitBook.">
        <div className="max-w-3xl">
          <a
            href="https://www.gitbook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-3xl glass p-6 hover-lift hover:border-lemon/40 transition"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lemon/15 text-lemon">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="font-display text-lg font-bold">CAP*TURES Manual on GitBook</div>
              <div className="mt-1 text-sm text-muted-foreground">Browse the full handbook — setup, features, integrations, and troubleshooting.</div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-lemon transition" />
          </a>
        </div>
      </Section>
      <Section eyebrow="Tutorials" title="Video walkthroughs">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((t) => (
            <div key={t.title} className="group rounded-3xl glass overflow-hidden hover-lift hover:border-lemon/30">
              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube.com/embed/6lmCiC0IU1Y"
                  title={t.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Setup Guide" title="Step-by-step">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Install Windows app", "Connect camera & printer", "Set up Cutout", "Create event, run flow"].map((s, i) => (
            <div key={s} className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="font-display text-3xl font-black text-lemon">0{i + 1}</div>
              <div className="mt-3 font-semibold">{s}</div>
              <FileText className="mt-4 h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>

      </Section>
    </>
  );
}

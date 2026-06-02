import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/compare/best-photobooth-software")({
  head: () => ({
    meta: [
      { title: "Best Photo Booth Software 2026: CAP*TURES vs Snappic vs LumaBooth" },
      {
        name: "description",
        content:
          "Compare CAP*TURES, Snappic, and LumaBooth side by side. See why an integrated photo booth Business OS beats single-app tools for agencies, weddings, and brand events.",
      },
      { property: "og:title", content: "CAP*TURES vs Snappic vs LumaBooth — Photo Booth Software Compared" },
      {
        property: "og:description",
        content:
          "Snappic and LumaBooth alternative: capture, AI experiences, live gallery, multi-event dashboard, and client delivery in one platform.",
      },
      { property: "og:url", content: "https://capturesbooth.lovable.app/compare/best-photobooth-software" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://capturesbooth.lovable.app/compare/best-photobooth-software" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Best Photo Booth Software 2026: CAP*TURES vs Snappic vs LumaBooth",
          description:
            "An in-depth comparison of CAP*TURES, Snappic, and LumaBooth for modern photo booth operators and event agencies.",
          author: { "@type": "Organization", name: "CAP*TURES" },
        }),
      },
    ],
  }),
  component: ComparePage,
});

type Cell = boolean | string;

const rows: { feature: string; captures: Cell; snappic: Cell; lumabooth: Cell }[] = [
  { feature: "Approach", captures: "Business OS — capture + manage + deliver", snappic: "iPad capture app", lumabooth: "iPad capture app" },
  { feature: "Multi-event dashboard", captures: true, snappic: false, lumabooth: false },
  { feature: "Live online gallery", captures: true, snappic: "Limited", lumabooth: false },
  { feature: "QR & instant sharing", captures: true, snappic: true, lumabooth: true },
  { feature: "AI experiences (cutout, styles)", captures: true, snappic: "Add-ons", lumabooth: "Limited" },
  { feature: "DSLR & pro camera support", captures: true, snappic: false, lumabooth: false },
  { feature: "Frame editor & branding", captures: true, snappic: true, lumabooth: true },
  { feature: "Client delivery portal", captures: true, snappic: false, lumabooth: false },
  { feature: "Reports & analytics", captures: true, snappic: false, lumabooth: false },
  { feature: "Works on Windows + macOS", captures: true, snappic: "iPad only", lumabooth: "iPad only" },
  { feature: "Free plan to start", captures: true, snappic: false, lumabooth: false },
];

function CellView({ value }: { value: Cell }) {
  if (value === true) return <Check className="h-5 w-5 text-lemon" aria-label="Yes" />;
  if (value === false) return <X className="h-5 w-5 text-muted-foreground/60" aria-label="No" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

function ComparePage() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
        <div className="container-max relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
              <Sparkles className="h-3.5 w-3.5" />
              Comparison guide
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]">
              CAP*TURES vs Snappic vs LumaBooth
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Looking for the best photo booth software in 2026? Here's an honest
              comparison of three popular options — and why operators running
              real event businesses are moving from single-app tools to an
              integrated Business OS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition">
                Try CAP*TURES free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/5 transition">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="At a glance"
        title="Feature comparison"
        description="A side-by-side look at what each platform actually ships."
      >
        <div className="overflow-x-auto rounded-2xl glass">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Feature</th>
                <th className="px-5 py-4 text-xs uppercase tracking-wider text-lemon font-semibold">CAP*TURES</th>
                <th className="px-5 py-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Snappic</th>
                <th className="px-5 py-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">LumaBooth</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-4 text-sm font-medium">{r.feature}</td>
                  <td className="px-5 py-4"><CellView value={r.captures} /></td>
                  <td className="px-5 py-4"><CellView value={r.snappic} /></td>
                  <td className="px-5 py-4"><CellView value={r.lumabooth} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        eyebrow="The difference"
        title="Business OS vs single-app tools"
        description="Snappic and LumaBooth are great capture apps. CAP*TURES is the operating system around your entire booth business."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Snappic",
              body: "iPad-first capture app with strong social sharing. Stops at the device — no multi-event dashboard, no client portal, no reporting across your event roster.",
            },
            {
              title: "LumaBooth",
              body: "Reliable iPad photobooth app loved by hobbyists. Limited online gallery, no centralized dashboard, and no path from capture to client delivery.",
            },
            {
              title: "CAP*TURES",
              body: "Capture (DSLR + tablet), AI experiences, live gallery, QR sharing, multi-event dashboard, reporting, and client delivery — one platform, one login.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl glass p-6">
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="When to pick what"
        title="Which one fits you?"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Pick Snappic if…", body: "You run a casual iPad booth and only need social filters + quick sharing." },
            { title: "Pick LumaBooth if…", body: "You want a simple, one-off iPad app for weddings or hobby events with no business workflow." },
            { title: "Pick CAP*TURES if…", body: "You run multiple events, want pro-camera quality, AI experiences, and a real dashboard to scale your business." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl glass p-6">
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl glass p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black">Ready to upgrade your booth business?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Start free with CAP*TURES — keep your existing hardware, add AI experiences, and run every event from one dashboard.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition">
              Download CAP*TURES <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/5 transition">
              Explore all features
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

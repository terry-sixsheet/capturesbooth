import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Camera, Film, Video, Aperture, Zap, Image as ImageIcon,
  Palette, Layout, Sparkles, Tag, Layers, MonitorSmartphone,
  QrCode, Cloud, Share2, Smartphone, Download,
  Printer, Cpu, Server, Settings2,
  Ticket, CreditCard, BarChart3, Activity, CalendarRange,
  Wand2, Route as RouteIcon, Brush, Workflow, Crown,
  Rocket, ShieldCheck, Gauge, Globe2,
  ArrowRight, Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import eventCoverDefault from "@/assets/event-cover-default.png";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Modern Event Experience Platform | CAP*TURES" },
      { name: "description", content: "Capture, customize, share, and manage premium event experiences with a fast, modern, cloud-based photobooth platform." },
      { property: "og:title", content: "Features — CAP*TURES" },
      { property: "og:description", content: "Everything you need to create modern event experiences." },
    ],
  }),
  component: FeaturesPage,
});

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="container-max relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
            <span className="h-1.5 w-1.5 rounded-full bg-lemon animate-pulse" />
            Modern Event Experience Platform
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] text-balance">
            Everything you need to create{" "}
            <span className="text-gradient-lemon">modern event experiences</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Capture, customize, share, and manage premium event experiences with a fast,
            modern, cloud-based photobooth platform.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-full bg-lemon px-7 py-4 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow"
            >
              Start Free Version <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold hover:text-lemon hover-lift"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Generic blocks ---------------- */
function SectionShell({
  eyebrow, title, accent, description, children, tone = "default",
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  description: string;
  children: ReactNode;
  tone?: "default" | "soft";
}) {
  return (
    <section className={`relative py-24 sm:py-28 ${tone === "soft" ? "bg-card/30" : ""}`}>
      <div className="container-max">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
            <span className="h-1.5 w-1.5 rounded-full bg-lemon" />
            {eyebrow}
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] text-balance">
            {title} {accent && <span className="text-gradient-lemon">{accent}</span>}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc?: string }) {
  return (
    <div className="group rounded-3xl glass p-6 hover-lift hover:border-lemon/30">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon group-hover:bg-lemon group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
      {desc && <p className="mt-2 text-sm text-muted-foreground">{desc}</p>}
    </div>
  );
}

/* ---------------- 1. Capture ---------------- */
function CaptureSection() {
  const items = [
    { icon: Camera, title: "Photo Capture" },
    { icon: Film, title: "GIF Capture" },
    { icon: Zap, title: "Boomerang" },
    { icon: Video, title: "Video Booth" },
    { icon: Aperture, title: "DSLR Camera Support" },
    { icon: ImageIcon, title: "Instant Capture Workflow" },
  ];
  return (
    <SectionShell
      eyebrow="Capture Experiences"
      title={<>Create interactive</>}
      accent="capture moments."
      description="Designed for modern events with fast and intuitive capture experiences."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => <FeatureCard key={i.title} {...i} />)}
      </div>
    </SectionShell>
  );
}

/* ---------------- 2. Customization ---------------- */
function CustomizationSection() {
  const items = [
    { icon: Layout, title: "Custom Templates" },
    { icon: Layers, title: "Overlay Design" },
    { icon: Sparkles, title: "Event Branding" },
    { icon: Palette, title: "Custom Layouts" },
    { icon: Tag, title: "Brand Frames" },
    { icon: MonitorSmartphone, title: "Personalized Screens" },
  ];
  return (
    <SectionShell
      tone="soft"
      eyebrow="Customization"
      title={<>Fully customize</>}
      accent="every experience."
      description="Create unique visual experiences for weddings, brands, creators, and activations."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Preview */}
        <div className="lg:col-span-2 rounded-3xl glass p-6 flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">Template Preview</div>
          <div className="grid grid-cols-3 gap-3">
            {[
              "from-orange-impact/40 to-lemon/10",
              "from-lemon/40 to-orange-impact/10",
              "from-foreground/30 to-card",
            ].map((g, i) => (
              <div key={i} className={`aspect-[3/4] rounded-xl border border-border bg-gradient-to-br ${g} relative overflow-hidden`}>
                <span className="absolute top-2 left-2 rounded bg-background/70 px-1.5 py-0.5 text-[9px] font-bold text-foreground">FRAME</span>
                <span className="absolute bottom-2 right-2 text-[9px] text-foreground/70">★ Brand</span>
              </div>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Switch templates, overlays, and brand assets in seconds.</p>
        </div>
        {/* Cards */}
        <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
          {items.map((i) => <FeatureCard key={i.title} {...i} />)}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 3. Sharing ---------------- */
function SharingSection() {
  const items = [
    { icon: QrCode, title: "QR Download" },
    { icon: ImageIcon, title: "Instant Gallery Access" },
    { icon: Smartphone, title: "Mobile-Friendly Sharing" },
    { icon: Share2, title: "Social Media Ready Output" },
    { icon: Cloud, title: "Cloud Gallery" },
  ];
  return (
    <SectionShell
      eyebrow="Sharing Experience"
      title={<>Instant sharing</>}
      accent="made simple."
      description="Guests instantly access and share memories directly from their phones."
    >
      {/* Highlight card */}
      <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 mb-10 glow-lemon">
        <div className="absolute inset-0 radial-glow opacity-60 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          {[
            { icon: Camera, label: "Capture" },
            { icon: Download, label: "Download" },
            { icon: Share2, label: "Share" },
          ].map((s, i, arr) => (
            <div key={s.label} className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-lemon text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="font-display text-xl font-bold">{s.label}</span>
              </div>
              {i < arr.length - 1 && <ArrowRight className="hidden sm:block h-6 w-6 text-lemon" />}
            </div>
          ))}
        </div>
        <p className="relative mt-6 text-center text-sm text-muted-foreground">
          From shutter to shareable in seconds — no app, no friction.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => <FeatureCard key={i.title} {...i} />)}
      </div>
    </SectionShell>
  );
}

/* ---------------- 4. Hardware ---------------- */
function HardwareSection() {
  const items = [
    { icon: Camera, title: "Multi Camera Support" },
    { icon: Printer, title: "Multi Printer Support" },
    { icon: Aperture, title: "DSLR Integration" },
    { icon: Server, title: "High-Volume Event Ready" },
    { icon: Cpu, title: "Fast Print Workflow" },
    { icon: Settings2, title: "Pro Hardware Config" },
  ];
  return (
    <SectionShell
      tone="soft"
      eyebrow="Professional Hardware"
      title={<>Built for</>}
      accent="professional event operations."
      description="Designed for agencies, activations, and high-volume event environments."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => <FeatureCard key={i.title} {...i} />)}
      </div>
    </SectionShell>
  );
}

/* ---------------- 5. Business ---------------- */
function BusinessSection() {
  const items = [
    { icon: Ticket, title: "Coupon System" },
    { icon: CreditCard, title: "Payment Gateway Integration" },
    { icon: BarChart3, title: "Event Analytics" },
    { icon: Activity, title: "Session Tracking" },
    { icon: CalendarRange, title: "Multi Event Management" },
  ];
  const bars = [40, 65, 50, 80, 72, 95, 88];
  return (
    <SectionShell
      eyebrow="Business & Monetization"
      title={<>Monetize & scale</>}
      accent="your event business."
      description="Built to help operators manage, monetize, and scale modern event experiences."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
          {items.map((i) => <FeatureCard key={i.title} {...i} />)}
        </div>
        {/* Dashboard mock */}
        <div className="lg:col-span-2 rounded-3xl glass p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Captures this week</div>
              <div className="font-display text-3xl font-black">12,480</div>
            </div>
            <span className="rounded-full bg-lemon/15 text-lemon px-2.5 py-0.5 text-xs font-bold">+24%</span>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {bars.map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-lemon" : "bg-foreground/15"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-background/50 border border-border p-3">
              <div className="text-muted-foreground">Revenue</div>
              <div className="font-bold text-foreground mt-1">฿ 248,900</div>
            </div>
            <div className="rounded-xl bg-background/50 border border-border p-3">
              <div className="text-muted-foreground">Live events</div>
              <div className="font-bold text-foreground mt-1">3 active</div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 6. Custom Experiences ---------------- */
function CustomExperiencesSection() {
  const items = [
    { icon: Wand2, title: "Tailored Event Experiences" },
    { icon: RouteIcon, title: "Interactive Guest Journey" },
    { icon: Brush, title: "Personalized Branding" },
    { icon: Workflow, title: "Custom Activation Flows" },
    { icon: Crown, title: "Luxury Event Experience Design" },
  ];
  return (
    <SectionShell
      tone="soft"
      eyebrow="Custom Event Experiences"
      title={<>Customized experiences</>}
      accent="beyond the booth."
      description="Create immersive and memorable experiences for weddings, brands, festivals, and activations."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => <FeatureCard key={i.title} {...i} />)}
      </div>
    </SectionShell>
  );
}

/* ---------------- 7. Why ---------------- */
function WhySection() {
  const items = [
    { icon: Sparkles, title: "Modern User Experience" },
    { icon: Share2, title: "Social-First Workflow" },
    { icon: Rocket, title: "Fast Event Setup" },
    { icon: Crown, title: "Premium Event Aesthetic" },
    { icon: Cloud, title: "Cloud-Based Simplicity" },
    { icon: ShieldCheck, title: "Professional Operations Ready" },
  ];
  return (
    <SectionShell
      eyebrow="Why CAP*TURES"
      title={<>Built for</>}
      accent="modern events."
      description="Designed for modern creators, agencies, brands, and event operators."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl glass p-6 hover-lift hover:border-lemon/30 flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lemon/15 text-lemon">
              <i.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">{i.title}</h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-lemon" /> Included on every plan
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-90 pointer-events-none" />
      <div className="container-max relative text-center">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1] text-balance">
          Ready to create <span className="text-gradient-lemon">better event experiences?</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Modern photobooth and event experience platform for creators, weddings, brands, and interactive activations.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-lemon px-7 py-4 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow"
          >
            Start Free Version <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold hover:text-lemon hover-lift"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesPage() {
  return (
    <>
      <Hero />
      <CaptureSection />
      <CustomizationSection />
      <SharingSection />
      <HardwareSection />
      <BusinessSection />
      <CustomExperiencesSection />
      <WhySection />
      <FinalCta />
    </>
  );
}

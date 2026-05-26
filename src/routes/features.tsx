import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Camera, Film, Video, Aperture, Zap, Image as ImageIcon,
  Palette, Layout, Sparkles, Tag, Layers, MonitorSmartphone,
  QrCode, Cloud, Share2, Smartphone, Download,
  Printer, Cpu, Server, Settings2,
  Ticket, CreditCard, BarChart3, Activity, CalendarRange,
  Wand2, Route as RouteIcon, Brush, Workflow, Crown,
  Rocket, ShieldCheck, Gauge, Globe2, Scissors,
  ArrowRight, Check,
} from "lucide-react";
import captureFrames from "@/assets/capture-frames.png";
import hardwareConsole from "@/assets/hardware-console.png";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import eventCoverDefault from "@/assets/event-cover-default.png";
import photoshareGallery from "@/assets/photoshare-gallery.png";
import dashboardReports from "@/assets/dashboard-reports.png";
import dashboardDevices from "@/assets/dashboard-devices.png";

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
    { icon: Scissors, title: "Cutout" },
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
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Frame selection preview */}
        <div className="lg:col-span-2 rounded-3xl glass p-6 flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">Select A Frame</div>
          <div className="rounded-xl border border-border overflow-hidden bg-black">
            <img
              src={captureFrames}
              alt="In-booth frame selection screen showing branded photo strip layouts"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Guests pick a branded frame layout right at the booth.</p>
        </div>
        {/* Feature cards */}
        <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
          {items.map((i) => <FeatureCard key={i.title} {...i} />)}
        </div>
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
          <div className="rounded-xl border border-border overflow-hidden bg-[#efece4]">
            <img
              src={eventCoverDefault}
              alt="Your event template preview with branded photo strip"
              className="w-full h-auto block"
              loading="lazy"
            />
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
        <div className="relative rounded-2xl overflow-hidden border border-border">
          <img
            src={photoshareGallery}
            alt="Photoshare gallery dashboard showing per-kiosk session history"
            className="w-full h-auto block"
            loading="lazy"
          />
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
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Console preview */}
        <div className="lg:col-span-3 rounded-3xl glass p-3 sm:p-4 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-border bg-background">
            <img
              src={hardwareConsole}
              alt="CAP*TURES operator console — Events & Frames configuration with camera, printer, sharing, filters, and system controls"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="mt-3 px-2 pb-1 text-xs text-muted-foreground">
            Operator console — configure cameras, printers, sharing, filters & system per event.
          </p>
        </div>
        {/* Feature cards */}
        <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 order-1 lg:order-2">
          {items.map((i) => <FeatureCard key={i.title} {...i} />)}
        </div>
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
  return (
    <SectionShell
      eyebrow="Business & Monetization"
      title={<>Monetize & scale</>}
      accent="your event business."
      description="Built to help operators manage, monetize, and scale modern event experiences."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Reports dashboard preview */}
        <div className="lg:col-span-3 rounded-3xl glass p-2 sm:p-3 bg-background border border-border overflow-hidden">
          <img
            src={dashboardReports}
            alt="Kiosk activity reports dashboard with revenue, payments, and conversion metrics"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
        {/* Feature cards */}
        <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((i) => <FeatureCard key={i.title} {...i} />)}
        </div>
        {/* Devices dashboard preview - full width below */}
        <div className="lg:col-span-5 rounded-3xl glass p-2 sm:p-3 bg-background border border-border overflow-hidden">
          <img
            src={dashboardDevices}
            alt="Activated kiosks device management dashboard"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
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

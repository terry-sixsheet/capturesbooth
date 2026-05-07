import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HeroVisual } from "./HeroVisual";

const tags = ["Photo", "GIF", "Video", "Printing", "QR Sharing", "Payment"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
      <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
      <div className="container-max relative grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.22em] text-lemon">
            <Sparkles className="h-3.5 w-3.5" />
            Modern Photo Booth Platform
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-balance">
            Run More Than a Booth.
            <br />
            <span className="text-gradient-lemon">Run the Experience.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty">
            Modern photobooth software built for events, weddings, activations, and experience businesses.
            Capture, share, and monetize — all from one platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/download"
              className="group inline-flex items-center gap-2 rounded-full bg-lemon px-6 py-3.5 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow"
            >
              <Download className="h-4 w-4" />
              Download Free Trial
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:text-lemon hover-lift"
            >
              View Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-1 self-center">Supports</span>
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-90 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
      <div className="container-max relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.22em] text-lemon">
          Ready when you are
        </span>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1] text-balance">
          Scale your photobooth business <br className="hidden sm:block" />
          <span className="text-gradient-lemon">with CAP*TURES.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join modern operators and agencies running premium event experiences on one platform.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-lemon px-7 py-4 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold hover:text-lemon hover-lift"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

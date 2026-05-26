import { Link } from "@tanstack/react-router";
import { Download, MessageCircle } from "lucide-react";

export function DownloadCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-90 pointer-events-none" />
      <div className="container-max relative text-center">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1] text-balance">
          Start building your <span className="text-gradient-lemon">event experience</span> today.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Download the free version and run your first event in minutes — or talk to our team about custom builds.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-lemon px-7 py-4 text-sm font-bold text-primary-foreground hover:scale-[1.03] transition-transform animate-pulse-glow"
          >
            <Download className="h-4 w-4" />
            Download Free Version
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold hover:text-lemon hover-lift"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

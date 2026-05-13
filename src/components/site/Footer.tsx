import { Link } from "@tanstack/react-router";
import { Instagram, Music2, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-max py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="http://www.captures.photo" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
            <Logo />
          </a>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Capture Moments. Create Impact. The modern photo booth platform built for events, weddings,
            activations, and experience businesses.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            by{" "}
            <a
              href="http://www.sixsheet.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-lemon transition-colors"
            >
              SIXSHEET Company
            </a>
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Music2, label: "TikTok" },
              { icon: Facebook, label: "Facebook" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:text-lemon hover-lift"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-4">Product</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/features" className="hover:text-lemon">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-lemon">Pricing</Link></li>
            <li><Link to="/download" className="hover:text-lemon">Download</Link></li>
            <li><Link to="/how-to-use" className="hover:text-lemon">Documentation</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-4">Company</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/showcase" className="hover:text-lemon">Showcase & Use Cases</Link></li>
            <li><Link to="/contact" className="hover:text-lemon">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-max py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} CAP*TURES. All rights reserved.</span>
          <span className="font-display tracking-wide">Capture Moments. Create Impact.</span>
        </div>
      </div>
    </footer>
  );
}

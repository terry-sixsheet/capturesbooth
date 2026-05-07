import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-1 font-display text-xl font-black tracking-tight ${className}`}>
      <span className="text-foreground">CAP</span>
      <span className="text-lemon transition-transform group-hover:rotate-90 duration-500">*</span>
      <span className="text-foreground">TURES</span>
    </Link>
  );
}

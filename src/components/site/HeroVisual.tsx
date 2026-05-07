import { Camera, Image as ImageIcon, Video, QrCode, Printer, CreditCard } from "lucide-react";

function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute glass rounded-2xl p-4 shadow-2xl animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative h-[520px] w-full">
      {/* Booth screen */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[440px] w-[280px] rounded-[2rem] border border-border bg-card p-3 glow-lemon">
          <div className="h-full w-full rounded-[1.6rem] bg-gradient-to-br from-background to-card overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 text-[10px] text-muted-foreground">
              <span className="font-display font-bold tracking-tight text-foreground">CAP*TURES</span>
              <span className="text-lemon">● LIVE</span>
            </div>
            <div className="flex-1 m-3 rounded-2xl bg-gradient-to-b from-orange-impact/30 via-background to-lemon/20 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-lemon/20 ring-2 ring-lemon grid place-items-center">
                  <span className="font-display text-5xl font-black text-lemon">3</span>
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-cream/80">Get Ready</div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-full bg-lemon py-2 text-center text-[11px] font-bold text-primary-foreground">
                TAP ANYWHERE
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCard className="left-0 top-6 w-[200px]" delay={0}>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-lemon/15 text-lemon">
            <Camera className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Mode</div>
            <div className="text-sm font-semibold">Photo · GIF · Video</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="right-0 top-16 w-[210px]" delay={1.2}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">QR Sharing</div>
            <div className="text-sm font-semibold">Scan to download</div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-impact/15 text-orange-impact">
            <QrCode className="h-5 w-5" />
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="left-2 bottom-12 w-[220px]" delay={0.6}>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cream/10 text-cream">
            <Printer className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground">Printing</div>
            <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[65%] rounded-full bg-lemon" />
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="right-2 bottom-6 w-[220px]" delay={1.8}>
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-lemon/15 text-lemon">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Payment</div>
            <div className="text-sm font-semibold">฿120 · 4 Shots + Print</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="left-1/2 -translate-x-1/2 -top-2 w-[180px]" delay={2.4}>
        <div className="flex items-center gap-2 text-xs">
          <Video className="h-4 w-4 text-orange-impact" />
          <span className="text-muted-foreground">Recording</span>
          <span className="ml-auto font-mono text-foreground">00:04</span>
        </div>
      </FloatingCard>

      <FloatingCard className="left-1/2 -translate-x-1/2 -bottom-2 w-[200px]" delay={3}>
        <div className="flex items-center gap-2 text-xs">
          <ImageIcon className="h-4 w-4 text-lemon" />
          <span className="text-muted-foreground">Gallery</span>
          <span className="ml-auto font-semibold">+ 1,248 photos</span>
        </div>
      </FloatingCard>
    </div>
  );
}

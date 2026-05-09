import { Section } from "./Section";
import { AlertTriangle, ArrowRight, Layers, MailX, CalendarX, UsersRound, TrendingDown } from "lucide-react";

const pains = [
  { icon: MailX, title: "Manual photo delivery", body: "Hours spent uploading, zipping, and chasing files for every event." },
  { icon: Layers, title: "Disconnected tools", body: "Capture, sharing, branding, and analytics scattered across apps." },
  { icon: CalendarX, title: "Messy event management", body: "Spreadsheets, paper checklists, and miscommunication on event day." },
  { icon: UsersRound, title: "Low guest engagement", body: "Static photos that guests forget the moment they leave the booth." },
  { icon: TrendingDown, title: "Hard to scale", body: "Adding more booths or events means more chaos, not more revenue." },
];

export function ProblemSection() {
  return (
    <Section
      eyebrow="The Problem"
      title={<>Photobooth operations are still <span className="text-orange-impact">messy.</span></>}
      description="Most operators run their business across five tools and a spreadsheet. CAP*TURES brings it all into one platform."
      align="center"
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {pains.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl glass p-6 hover-lift">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-impact/15 text-orange-impact">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-base font-bold leading-tight">{title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl glass p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-lemon">The CAP*TURES way</div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-balance">
              One platform. Every event. Every guest. Every moment.
            </h3>
          </div>
        </div>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-3 text-sm font-bold text-primary-foreground hover-lift shrink-0"
        >
          See how it works <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}

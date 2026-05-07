import { Section } from "./Section";
import wedding from "@/assets/usecase-wedding.jpg";
import brand from "@/assets/usecase-brand.jpg";
import festival from "@/assets/usecase-festival.jpg";
import studio from "@/assets/usecase-studio.jpg";
import corporate from "@/assets/usecase-corporate.jpg";
import photobooth from "@/assets/usecase-photobooth.jpg";

const cases = [
  { img: photobooth, title: "Photobooth Business", desc: "Run rentals at scale with consistent quality." },
  { img: wedding, title: "Weddings", desc: "Branded, beautiful, unforgettable nights." },
  { img: corporate, title: "Corporate Event", desc: "Networking moments worth sharing." },
  { img: brand, title: "Brand Activation", desc: "Turn engagement into shareable content." },
  { img: studio, title: "Photometric Studio", desc: "Self-photo experiences, premium feel." },
  { img: festival, title: "Festival Experience", desc: "High-volume, energetic, on-brand." },
];

export function UseCases() {
  return (
    <Section
      eyebrow="Use Cases"
      title={<>Built for every kind of <span className="text-orange-impact">experience</span></>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="group relative overflow-hidden rounded-3xl border border-border hover-lift aspect-[4/5]">
            <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-lemon">Use Case</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  { q: "Does it support Canon DSLR?", a: "Yes. CAP*TURES has native support for Canon DSLR cameras for the best image quality, plus webcam fallback for lighter setups." },
  { q: "Can I use a webcam?", a: "Absolutely — webcams work out of the box, ideal for lighter installations and self-photo studios." },
  { q: "How does licensing work?", a: "Choose a free trial, or buy a Pro license by week, month, or year. Each license is tied to your account and activates the platform." },
  { q: "Can I print instantly?", a: "Yes — the built-in printing system supports strip and full-frame layouts with branded overlays for instant output." },
  { q: "How does QR sharing work?", a: "After capture, guests scan a QR to download photos, GIFs, and videos directly to their phone or via the online gallery." },
  { q: "Is internet required?", a: "Capture and printing run fully offline. Online gallery and QR sharing require internet only when uploading." },
  { q: "Can I customize the UI?", a: "Yes — frames, stickers, brand overlays, and presentation are fully configurable. Custom software builds are available on request." },
];

export function FAQ() {
  return (
    <Section eyebrow="FAQ" title="Questions, answered." align="center">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass px-5 border-0 data-[state=open]:border-lemon/30"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline hover:text-lemon">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

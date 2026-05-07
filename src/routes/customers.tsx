import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — CAP*TURES" },
      { name: "description", content: "Studios and event teams running CAP*TURES across weddings, brand activations, and festivals." },
      { property: "og:title", content: "Customers — CAP*TURES" },
      { property: "og:description", content: "Trusted by event teams and studios." },
    ],
  }),
  component: Customers,
});

const stories = [
  {
    name: "SIXSHEET",
    role: "Experience Studio · Bangkok",
    quote: "CAP*TURES turned our photobooth side-business into a real product line. Setup is trivial, the UI feels premium, and clients ask about it.",
  },
  {
    name: "Andy & Fine",
    role: "Wedding Photo Studio",
    quote: "Our wedding clients love the QR gallery. We stopped chasing files and started focusing on the experience.",
  },
  {
    name: "Pose Office Phuket",
    role: "Photometric Studio",
    quote: "The frame editor and printing system finally let us deliver on-brand outputs every time. The reliability has been a game changer.",
  },
];

function Customers() {
  return (
    <>
      <Section
        eyebrow="Customers"
        title={<>Loved by <span className="text-lemon">event teams</span></>}
        description="From wedding studios to brand-activation agencies — CAP*TURES powers the moments that matter."
        align="center"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="rounded-3xl glass p-7 hover-lift">
              <Quote className="h-6 w-6 text-lemon" />
              <p className="mt-4 text-foreground/90">{s.quote}</p>
              <div className="mt-6">
                <div className="font-display text-lg font-bold">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

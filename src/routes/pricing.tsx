import { createFileRoute } from "@tanstack/react-router";
import { PricingPreview } from "@/components/site/PricingPreview";
import { AddonsExtend } from "@/components/site/AddonsExtend";
import { ExperienceOverview } from "@/components/site/ExperienceOverview";
import { FAQ, faqs } from "@/components/site/FAQ";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CAP*TURES" },
      { name: "description", content: "Start free. Go Pro to grow your booth into a business. Scale into a premium event experience platform." },
      { property: "og:title", content: "Pricing — CAP*TURES" },
      { property: "og:description", content: "A growth journey for modern event experience businesses." },
      { property: "og:url", content: "https://capturesbooth.lovable.app/pricing" },
    ],
    links: [
      { rel: "canonical", href: "https://capturesbooth.lovable.app/pricing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => (
    <>
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
        <div className="container-max relative">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] text-balance">
              Pricing — <span className="text-lemon">Start free. Scale smart.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              A growth journey for modern event experience businesses — not just another pricing page.
            </p>
          </div>
        </div>
      </section>

      <ExperienceOverview />
      <PricingPreview />
      <AddonsExtend showPrice={true} />
      <FAQ />
    </>
  ),
});

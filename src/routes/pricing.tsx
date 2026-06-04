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

      <ExperienceOverview />
      <PricingPreview />
      <AddonsExtend showPrice={true} />
      <FAQ />
    </>
  ),
});

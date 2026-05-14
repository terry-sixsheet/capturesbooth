import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { ProblemSection } from "@/components/site/ProblemSection";
import { BusinessOutcomes } from "@/components/site/BusinessOutcomes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { UseCases } from "@/components/site/UseCases";
import { Customers } from "@/components/site/Customers";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAP*TURES — The Photobooth Business OS" },
      {
        name: "description",
        content:
          "Event management, AI experience, instant sharing, live gallery, and client delivery — built for modern photobooth operators and agencies.",
      },
      { property: "og:title", content: "CAP*TURES — The Photobooth Business OS" },
      {
        property: "og:description",
        content:
          "Run your entire photobooth business on one platform. Built for operators, agencies, and event teams.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CAP*TURES",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows, macOS",
          description:
            "The operating system for modern photobooth businesses — multi-event management, AI experiences, online gallery, QR sharing, and cloud delivery.",
          url: "https://capturesbooth.lovable.app",
          offers: { "@type": "Offer", price: "0", priceCurrency: "THB" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <BusinessOutcomes />
      <HowItWorks />
      <UseCases />
      <Customers />
      <FinalCta />
    </>
  );
}

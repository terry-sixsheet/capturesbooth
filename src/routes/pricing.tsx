import { createFileRoute } from "@tanstack/react-router";
import { PricingPreview } from "@/components/site/PricingPreview";
import { ComparePlans } from "@/components/site/ComparePlans";
import { AddonsExtend } from "@/components/site/AddonsExtend";
import { ExperienceOverview } from "@/components/site/ExperienceOverview";
import { FAQ } from "@/components/site/FAQ";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CAP*TURES" },
      { name: "description", content: "Start free. Grow your booth into a business. Scale into a premium event experience platform." },
      { property: "og:title", content: "Pricing — CAP*TURES" },
      { property: "og:description", content: "A growth journey for modern event experience businesses." },
    ],
  }),
  component: () => (
    <>
      <Section
        eyebrow="Pricing"
        title={<>Capture moments. <span className="text-lemon">Create impact.</span></>}
        description="A simple growth journey: Start free, grow your business, scale your experience."
        align="center"
      />
      <ExperienceOverview />
      <PricingPreview />
      <ComparePlans />
      <AddonsExtend showPrice={true} />
      <FAQ />
    </>
  ),
});

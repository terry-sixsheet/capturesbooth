import { createFileRoute } from "@tanstack/react-router";
import { PricingPreview } from "@/components/site/PricingPreview";
import { FAQ } from "@/components/site/FAQ";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CAP*TURES" },
      { name: "description", content: "Free trial. Pro plans by week, month, or year. Premium SaaS pricing for event businesses." },
      { property: "og:title", content: "Pricing — CAP*TURES" },
      { property: "og:description", content: "Simple, premium pricing for the modern photo booth platform." },
    ],
  }),
  component: () => (
    <>
      <Section
        eyebrow="Pricing"
        title={<>Choose your <span className="text-lemon">plan</span></>}
        description="Start free. Upgrade when your events grow. Cancel anytime."
        align="center"
      />
      <PricingPreview />
      <FAQ />
    </>
  ),
});

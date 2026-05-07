import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { WhatIs } from "@/components/site/WhatIs";
import { ExperienceFlow } from "@/components/site/ExperienceFlow";
import { CoreFeatures } from "@/components/site/CoreFeatures";
import { Showcase } from "@/components/site/Showcase";
import { UseCases } from "@/components/site/UseCases";
import { Customers } from "@/components/site/Customers";
import { WhyCaptures } from "@/components/site/WhyCaptures";
import { PricingPreview } from "@/components/site/PricingPreview";
import { DownloadCta } from "@/components/site/DownloadCta";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatIs />
      <ExperienceFlow />
      <CoreFeatures />
      <Showcase />
      <UseCases />
      <Customers />
      <WhyCaptures />
      <PricingPreview />
      <DownloadCta />
      <FAQ />
    </>
  );
}

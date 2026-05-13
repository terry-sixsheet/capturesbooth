import { createFileRoute } from "@tanstack/react-router";
import { CoreFeatures } from "@/components/site/CoreFeatures";
import { AddonsExtend } from "@/components/site/AddonsExtend";
import { ExperienceFlow } from "@/components/site/ExperienceFlow";
import { DownloadCta } from "@/components/site/DownloadCta";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — CAP*TURES Photo Booth Platform" },
      { name: "description", content: "Event Builder, Capture Engine, Creative Tools, Sharing, Printing, Business Tools — every CAP*TURES feature in one place." },
      { property: "og:title", content: "Features — CAP*TURES" },
      { property: "og:description", content: "Every feature of the modern photo booth platform." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <>
      <CoreFeatures />
      <AddonsExtend showPrice={false} />
      <ExperienceFlow />
      <DownloadCta />
    </>
  );
}

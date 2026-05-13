import { createFileRoute } from "@tanstack/react-router";
import { Showcase } from "@/components/site/Showcase";
import { UseCases } from "@/components/site/UseCases";
import { Section } from "@/components/site/Section";
import { DownloadCta } from "@/components/site/DownloadCta";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Showcase & Use Cases — CAP*TURES" },
      { name: "description", content: "See real CAP*TURES software in action and explore use cases across weddings, festivals, brand activations and more." },
      { property: "og:title", content: "Showcase & Use Cases — CAP*TURES" },
      { property: "og:description", content: "Real software. Real events." },
    ],
  }),
  component: () => (
    <>
      <Showcase />
      <Section
        eyebrow="Use Cases"
        title={<>Built for every kind of <span className="text-orange-impact">experience</span></>}
        description="From intimate weddings to high-volume festivals, CAP*TURES adapts to the moment."
        align="center"
      />
      <UseCases />
      <DownloadCta />
    </>
  ),
});

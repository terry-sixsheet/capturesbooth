import { createFileRoute } from "@tanstack/react-router";
import { UseCases } from "@/components/site/UseCases";
import { DownloadCta } from "@/components/site/DownloadCta";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — CAP*TURES" },
      { name: "description", content: "Photobooths, weddings, corporate events, brand activations, photometric studios, and festivals." },
      { property: "og:title", content: "Use Cases — CAP*TURES" },
      { property: "og:description", content: "Built for every kind of experience." },
    ],
  }),
  component: () => (
    <>
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

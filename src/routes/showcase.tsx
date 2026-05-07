import { createFileRoute } from "@tanstack/react-router";
import { Showcase } from "@/components/site/Showcase";
import { Section } from "@/components/site/Section";
import { DownloadCta } from "@/components/site/DownloadCta";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Showcase — CAP*TURES" },
      { name: "description", content: "See real CAP*TURES software in action: dashboards, capture, sharing, payments, prints." },
      { property: "og:title", content: "Showcase — CAP*TURES" },
      { property: "og:description", content: "Real software. Real events." },
    ],
  }),
  component: () => (
    <>
      <Section
        eyebrow="Showcase"
        title={<>Real software. <span className="text-lemon">Real events.</span></>}
        align="center"
      />
      <Showcase />
      <DownloadCta />
    </>
  ),
});

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
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
        <div className="container-max relative">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] text-balance">
              Showcase &amp; <span className="text-lemon">Use Cases</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              See real CAP*TURES software in action and explore use cases across weddings, festivals, brand activations and more.
            </p>
          </div>
        </div>
      </section>

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

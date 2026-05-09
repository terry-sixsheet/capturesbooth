import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to our Expert — CAP*TURES" },
      { name: "description", content: "Talk to our photobooth experts about pricing, custom builds, partnerships, or support." },
      { property: "og:title", content: "Talk to our Expert — CAP*TURES" },
      { property: "og:description", content: "We'd love to hear about your event." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "photoboothexpert@sixsheet.me",
      href: "mailto:photoboothexpert@sixsheet.me",
    },
    {
      icon: MessageCircle,
      label: "LINE Official Account",
      value: "@sixsheet",
      href: "https://line.me/R/ti/p/@sixsheet",
    },
    {
      icon: MapPin,
      label: "Based in",
      value: "Bangkok, Thailand",
    },
  ];

  return (
    <Section
      eyebrow="Contact"
      title={<>Talk to our <span className="text-lemon">Expert</span></>}
      description="Tell us about your event, your studio, or your custom build idea — our photobooth experts will get back to you fast."
      align="center"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {channels.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="mt-1 font-display text-lg font-bold break-words">{value}</div>
              </div>
              {href && (
                <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground group-hover:text-lemon transition" />
              )}
            </>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative rounded-2xl glass p-6 hover-lift hover:border-lemon/40 transition"
            >
              {content}
            </a>
          ) : (
            <div key={label} className="relative rounded-2xl glass p-6">
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

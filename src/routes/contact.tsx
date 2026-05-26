import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Mail, MessageCircle, MapPin, Phone, ArrowUpRight, Headphones, Clock, ShieldCheck, Sparkles, Crown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertsImg from "@/assets/contact-experts.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to our Expert — CAP*TURES" },
      { name: "description", content: "Talk to our photobooth experts about pricing, custom builds, partnerships, or support." },
      { property: "og:title", content: "Talk to our Expert — CAP*TURES" },
      { property: "og:description", content: "We'd love to hear about your event." },
      { property: "og:url", content: "https://capturesbooth.lovable.app/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://capturesbooth.lovable.app/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "CAP*TURES by SIXSHEET Company",
          url: "https://capturesbooth.lovable.app",
          email: "photoboothexpert@sixsheet.me",
          telephone: "+66-80-268-6632",
          address: {
            "@type": "PostalAddress",
            streetAddress: "33 Soi Pradipat 17, Pradipat Road",
            addressLocality: "Samsennai, Phayathai",
            addressRegion: "Bangkok",
            postalCode: "10400",
            addressCountry: "TH",
          },
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: "photoboothexpert@sixsheet.me", href: "mailto:photoboothexpert@sixsheet.me" },
    { icon: MessageCircle, label: "LINE Official Account", value: "@sixsheet", href: "https://line.me/R/ti/p/@sixsheet" },
    { icon: Phone, label: "Phone", value: "080-268-6632", href: "tel:+66802686632" },
    { icon: MapPin, label: "Office", value: "33 Soi Pradipat 17, Pradipat Road, Samsennai, Phayathai, Bangkok 10400", href: "https://maps.google.com/?q=33+Soi+Pradipat+17+Bangkok+10400" },
  ];

  const promises = [
    { icon: Heart, title: "We actually pick up the phone", body: "No bots, no ticket queues. Real Thai photobooth pros, reply within 1 hour (Mon–Sat, 9:00–19:00)." },
    { icon: Headphones, title: "One friendly expert, start to finish", body: "Same person from your first 'สวัสดีครับ' on LINE all the way through event day." },
    { icon: ShieldCheck, title: "We've been in your shoes", body: "500+ events across Thailand — weddings, brand activations, concerts. We know what game-day looks like." },
  ];

  return (
    <>
      <Section
        eyebrow="Contact"
        title={<>Talk to our <span className="text-lemon">Expert</span></>}
        description="Real photobooth professionals — not a ticket queue. Tell us about your event, studio, or custom build and we'll guide you end-to-end."
        align="center"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] max-w-6xl mx-auto items-center">
          <div className="relative rounded-3xl overflow-hidden glass border border-lemon/20">
            <img
              src={expertsImg}
              alt="CAP*TURES expert support team"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
                <Sparkles className="h-3 w-3" />
                Meet your Photobooth Experts
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black leading-tight">
                สวัสดีครับ — <span className="text-lemon">we're Captures.</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                A small Bangkok-based team of photobooth nerds who genuinely love event day. Tell us what you're planning — we'll help you make it unforgettable.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {promises.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl glass p-5 flex items-start gap-4 hover-lift">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lemon/15 text-lemon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold">{title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Get in touch" title={<>Reach us your <span className="text-lemon">way</span></>} align="center">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {channels.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-lemon/15 text-lemon">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-base font-bold break-words">{value}</div>
                </div>
                {href && <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground group-hover:text-lemon transition" />}
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
    </>
  );
}

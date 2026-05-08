import { Section } from "./Section";
import { Megaphone, CreditCard, Wand2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import chillpayLogo from "@/assets/chillpay-logo.png";

type Module = {
  icon: typeof Megaphone;
  name: string;
  headline: string;
  price: string;
  features: string[];
  outcome: string;
  cta: { label: string; to: "/contact" | "/buy" };
  partnerLogo?: { src: string; href: string; alt: string };
};

const modules: Module[] = [
  {
    icon: Megaphone,
    name: "Promotion Engine",
    headline: "Bring guests back with interactive promotions.",
    price: "+1,000 THB",
    features: ["Promo campaigns", "QR redemption", "Discount codes", "Reward experiences"],
    outcome: "Increase engagement and repeat customers.",
    cta: { label: "Add to Plan", to: "/buy" },
  },
  {
    icon: CreditCard,
    name: "CAP*TURES PAY",
    headline: "Turn every booth into a revenue channel.",
    price: "+10,000 THB",
    features: ["QR payment", "Credit card", "Paid event flows", "Instant checkout"],
    outcome: "Accept payments directly inside the event experience.",
    cta: { label: "Add to Plan", to: "/buy" },
    partnerLogo: { src: chillpayLogo, href: "https://www.chillpay.co/en/", alt: "ChillPay" },
  },
  {
    icon: Wand2,
    name: "Custom Experience Studio",
    headline: "Build fully branded interactive experiences.",
    price: "Custom",
    features: [
      "Custom event flow",
      "CRM integration",
      "Registration system",
      "Gamification",
      "Live gallery",
      "Vending integration",
      "Custom layouts",
      "Advanced interaction logic",
    ],
    outcome: "Create unforgettable premium experiences for brands and clients.",
    cta: { label: "Book Consultation", to: "/contact" },
  },
];

export function AddonsExtend({ showPrice = true }: { showPrice?: boolean }) {
  return (
    <Section
      eyebrow="Stage 3 · Scale"
      title={<>Scale Your <span className="text-orange-impact">Experience</span></>}
      description="Power-ups for modern event businesses — expand what your booth can do."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {modules.map(({ icon: Icon, name, headline, price, features, outcome, cta, partnerLogo }) => (
          <div
            key={name}
            className="group flex flex-col rounded-3xl border border-border bg-card/60 p-7 hover-lift hover:border-orange-impact/40 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-impact/15 text-orange-impact">
                <Icon className="h-5 w-5" />
              </div>
              {showPrice && <span className="text-xs font-bold text-lemon">{price}</span>}
            </div>

            <div className="mt-5 text-[10px] uppercase tracking-widest text-muted-foreground">{name}</div>
            <h4 className="mt-1 font-display text-xl font-bold leading-snug">{headline}</h4>

            {partnerLogo && (
              <a
                href={partnerLogo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center self-start rounded-md bg-white px-3 py-1.5 hover:opacity-90 transition-opacity"
              >
                <img src={partnerLogo.src} alt={partnerLogo.alt} className="h-5 w-auto" />
              </a>
            )}

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-orange-impact" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-semibold text-lemon leading-snug">{outcome}</p>

            <Link
              to={cta.to}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-orange-impact hover:gap-3 transition-all"
            >
              {cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

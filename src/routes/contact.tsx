import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CAP*TURES" },
      { name: "description", content: "Talk to our team about pricing, custom builds, partnerships, or support." },
      { property: "og:title", content: "Contact CAP*TURES" },
      { property: "og:description", content: "We'd love to hear about your event." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Section
        eyebrow="Contact"
        title={<>Let's create unforgettable <span className="text-lemon">experiences</span></>}
        description="Tell us about your event, your studio, or your custom build idea."
        align="center"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@captures.app" },
              { icon: MessageCircle, label: "Sales", value: "sales@captures.app" },
              { icon: MapPin, label: "Based in", value: "Bangkok, Thailand" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl glass p-5 flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lemon/15 text-lemon">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl glass p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company" name="company" />
            <Field label="Message" name="message" textarea />
            <button
              type="submit"
              className="w-full rounded-full bg-lemon py-3 text-sm font-bold text-primary-foreground hover:scale-[1.02] transition-transform"
            >
              {sent ? "Thanks — we'll be in touch ✱" : "Send Message"}
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-lemon transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={`${cls} mt-2`} />
      ) : (
        <input type={type} name={name} className={`${cls} mt-2`} />
      )}
    </label>
  );
}

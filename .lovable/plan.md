
# CAP*TURES — Pricing & Growth Experience Rework

Reframe pricing from "Free / Pro / Add-ons" into a business journey:
**START → GROW → SCALE**. UI-only, no backend.

## Scope

Touched files only — keep all unrelated UI/business logic intact.

- `src/components/site/PricingPreview.tsx` → rebuild as **Choose Your Stage** (START + GROW)
- `src/components/site/AddonsExtend.tsx` → rebuild as **Scale Your Experience** with renamed modules
- `src/components/site/ComparePlans.tsx` *(new)* → minimal START vs GROW comparison table
- `src/components/site/ExperienceOverview.tsx` *(new)* → 3-card overview (Create / Run / Grow)
- `src/routes/pricing.tsx` → new section order
- `src/routes/index.tsx` → insert ExperienceOverview after Hero block
- `src/components/buy/types.ts` → rename addon labels (Promotion Engine, CAP*TURES PAY, Custom Experience Studio) so the /buy flow stays in sync
- `src/components/buy/AddonsStep.tsx` → display new copy if needed (verify only)

No changes to Hero, route structure, or the existing /buy step machine.

## Section-by-section

### 1. Experience Overview (new, home + above pricing)
3 cards on dark bg, neon-yellow icon chips, hover-lift:
- **Create Experiences** — frames, GIFs, video, printing, live flows
- **Run Events** — events, guests, sharing, galleries, ops
- **Grow Your Business** — monetization, promos, branding, advanced experiences

### 2. Choose Your Stage (replaces PricingPreview)
Two stage cards, journey-styled (tag chips: START / MOST POPULAR):

**STAGE 1 — START** (Free)
- Headline: "Create your first event experiences."
- Audience: beginners, small events, testing
- Features: Single event · DSLR + webcam · Photo + GIF · Printing · Frame editor · Basic templates · 200 captures/event
- CTA: **Start Free** → /download

**STAGE 2 — GROW** (Most Popular, lemon glow)
- Headline: "Turn your booth into a real business."
- Audience: operators, agencies, weddings
- Billing tabs Week / Month / Year (1,500 / 2,500 / 5,900 THB)
- Features: Everything in START + Multi-event · Online gallery · QR sharing · Analytics · Faster workflows · Cloud sharing
- CTA: **Start Growing** → /buy?cycle=…

### 3. Compare Plans (new, /pricing only)
Minimal 2-column table (START / GROW). Rows: Events, Images/Event, QR Sharing, Online Gallery, Analytics, Multi-event, Payment Integration, Promotions, Custom Branding. Neon check / dim dot.

### 4. Scale Your Experience (replaces AddonsExtend)
Title: "Scale Your Experience" — "Power-ups for modern event businesses."
Three modules with outcome-led copy:

| Module | Headline | Price | CTA |
|---|---|---|---|
| **Promotion Engine** | Bring guests back with interactive promotions. | +1,000 THB | Add to Plan |
| **CAP*TURES PAY** | Turn every booth into a revenue channel. | +10,000 THB | Add to Plan (Chillpay logo) |
| **Custom Experience Studio** | Build fully branded interactive experiences. | Custom | **Book Consultation** → /contact |

Each card: outcome line in lemon, feature dots in muted, hover orange glow.

### 5. /pricing route order
Hero Section → ExperienceOverview → Choose Your Stage → Compare Plans → Scale Your Experience → FAQ

### 6. /buy types sync
Update labels in `ADDONS` so the buy flow shows the new module names (Promotion Engine / CAP*TURES PAY / Custom Experience Studio). IDs unchanged → no router/state breakage.

## Design tokens (already in styles.css)

Use existing `text-lemon`, `glow-lemon`, `text-orange-impact`, `glass`, `hover-lift`. No new colors. Typography stays Inter/display. No new deps.

## Out of scope

- Hero rewrite (already matches the brief)
- Mobile sticky CTA / swipeable carousel (current cards already stack responsively)
- New animations beyond existing hover-lift / glow utilities
- Backend, auth, real checkout

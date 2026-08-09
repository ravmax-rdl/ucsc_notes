&lt;!-- DESIGN SYSTEM --&gt;

---

version: alpha

name: Cloudflare

description: "Welcome to Cloudflare - Powering the next generation of applications"

sourceUrl: "[https://www.cloudflare.com](https://www.cloudflare.com)"

colors:

  primary: "#ff5e1f"

  on-primary: "#ffffff"

  background: "#ffffff"

  surface: "#f0f0f0"

  border: "#f0f0f0"

  text: "#262626"

  text-muted: "#ffffff"

  accent: "#ff7038"

typography:

  display:

    fontFamily: "FT Kunst Grotesk, sans-serif"

    fontSize: 32px

    fontWeight: 500

    lineHeight: 1

    letterSpacing: -0.8px

  heading:

    fontFamily: "FT Kunst Grotesk, sans-serif"

    fontSize: 19px

    fontWeight: 400

    lineHeight: 1.2

    letterSpacing: -0.48px

  body:

    fontFamily: "FT Kunst Grotesk, sans-serif"

    fontSize: 14px

    fontWeight: 400

    lineHeight: 1.15

    letterSpacing: -0.14px

  mono:

    fontFamily: "Apercu Mono Pro, monospace"

    fontSize: 12px

    fontWeight: 400

    lineHeight: 1.5

spacing:

  base: 4px

  scale: [4, 8, 12, 16, 32, 40, 48, 60, 112, 128]

radius:

  sm: 1px

  md: 2px

  lg: 3px

  xl: 4px

  pill: 9999px

shadows:

  card: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 80, 10, 0.06) 0px 4px 60px 0px, rgba(0, 0, 0, 0.03) 0px 2px 12px 0px"

  elevated: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 80, 10, 0.06) 0px 4px 60px 0px, rgba(0, 0, 0, 0.03) 0px 2px 12px 0px"

motion:

  duration-fast: 100ms

  duration-base: 200ms

  duration-slow: 2000ms

  easing: "cubic-bezier(0.19, 1, 0.22, 1)"

breakpoints: [400px, 426px, 550px, 768px]

---

## Rationale

Cloudflare's design system projects technical competence and enterprise reliability through a deliberately restrained, high-contrast aesthetic. The measured tokens reveal a system built around clarity over decoration: a near-white background (#fdfdfc), crisp dark text (#262626), and a bold orange accent (#ff5e1f) that punctuates CTAs and moments of emphasis. This is not a playful or warm palette—it's a working professional interface where every color choice signals purpose. The typography stack (FT Kunst Grotesk) is geometric and modern, with aggressive negative letter-spacing at display scales that creates visual density and forward momentum, reinforcing the messaging around infrastructure scale and performance. The sparse shadow system (effectively decorative 1px insets rather than depth cues) and minimal radius values (1–5px, never rounded) reinforce a "no-nonsense" industrial feel that aligns with a company positioning itself as the invisible backbone of the internet.

The spacing scale is deliberately shallow—base unit of 4px with a carefully bounded progression—which keeps the visual system tight and efficient. This reflects a product category where density and scannability matter more than breathing room. The motion tokens favor a slow, controlled easing (cubic-bezier with a spring-like curve) that suggests precision and confidence rather than snappy responsiveness; a 1500ms base duration implies deliberate, purposeful animation, not frivolous flourish. Together, these choices create a system that feels institutional and trustworthy: a company that has already thought through the hard problems and is confident enough not to shout about it.

## 1. Visual Theme &amp; Atmosphere

Cloudflare's visual identity reads as **technical minimalism**. The absence of shadows and heavy visual effects, combined with subtle border treatments (#f0f0f0), creates a flat, almost austere canvas. This is deliberate: for a company messaging around infrastructure, reliability, and handling 42% of the Fortune 500's traffic, visual noise would undermine credibility. The design says: *we are so focused on solving your problem that we don't need to distract you with effects*.

The light color mode is non-negotiable here; dark mode would soften the authority. Brightness and contrast breed trust in enterprise contexts. The near-white surface (#fdfdfc) is marginally warmer than pure white, avoiding clinical coldness while maintaining clarity.

## 2. Color System

**Primary accent (#ff5e1f, orange):** A warm, energetic orange deployed on CTAs and interactive elements. It reads as action and energy without feeling corporate-conservative. The contrast against white backgrounds is high and commands attention—appropriate for a freemium model where conversion is critical.

**On-primary (#ffffff):** Inverted text and icons on orange backgrounds ensure legibility.

**Text hierarchy:**

- Standard text (#262626): Dark charcoal, nearly black, provides maximum contrast and readability for body copy.

- Text-muted (#ffffff): Appears to be white, likely used for text *on* the orange accent or dark overlays (though this is an unusual token name; more likely signals "light" text contexts).

**Backgrounds:**

- #ffffff (pure white): Hero sections, call-to-action zones.

- #fdfdfc (off-white, near-white): Surface containers, cards, alternating sections—just enough differentiation to create visual separation without jarring the eye.

**Border (#f0f0f0):** Extremely subtle divider, barely perceptible at arm's length, which reinforces the minimalist aesthetic.

**Accent (#ff4800):** A slightly deeper, more saturated orange; likely used for hover states or emphasis to create interactive feedback without introducing a new color.

## 3. Typography

**Font family:** FT Kunst Grotesk is a geometric, contemporary sans-serif with geometric proportions. It projects modernity and clarity—common in tech infrastructure brands.

**Display scale (56px, 500 weight, -1.4px letter-spacing):** Hero headlines are set loose but compressed laterally, creating a tense, forward-moving energy. The negative spacing makes large text feel denser and more impactful.

**Heading scale (48px, 500 weight, -1.2px letter-spacing):** Slightly less aggressive compression; still maintains the aggressive visual voice.

**Body (14px, 400 weight, 1.15 line height, -0.14px letter-spacing):** Readable and compact. A 14px base is common for web products targeting both desktop and mobile; 1.15 line height is tight but sufficient for short-form content. Micro negative letter-spacing maintains the system's geometric tension even at small scales.

**Mono (Apercu Mono Pro, 12px, 1.5 line height):** Code and data contexts; 1.5 line height gives breathing room to code, which is perceptually denser than prose.

## 4. Components &amp; Patterns

**CTA buttons:** Orange primary color (#ff5e1f) with white text. Given the measured tokens, buttons likely have minimal styling—flat fills, small radius (1–5px, so nearly square), and no shadow. On hover, the accent color (#ff4800) likely darkens for feedback.

**Cards and surfaces:** Off-white background (#fdfdfc) with 1px inset shadows (the "card" token), creating a subtle contained feeling without visual lift. This reinforces a flat, integrated aesthetic.

**Focus and interactive states:** The motion tokens (particularly the easing curve) suggest smooth transitions between states rather than instant changes, creating a sense of intentionality and control.

**Links and secondary actions:** Likely orange or text-colored with underlines; the inset shadow tokens suggest links may have subtle borders or underlines rather than bold styling.

## 5. Spacing &amp; Layout

The spacing scale [4, 8, 12, 16, 20, 24, 32, 40, 60, 80] is **shallow and granular**. A 4px base unit allows precise, tight compositions without creating visual clutter. The progression favors smaller increments (4–24px) for micro-spacing and component padding, with larger steps (40–80px) for major section breaks.

**Implied grid:** At breakpoints 400, 426, 550, 768px, the system is mobile-first and responsive. The narrow initial breakpoint (400px) suggests aggressive optimization for small screens.

**Layout density:** The tight spacing and high x-height typography suggest layouts that favor information density over whitespace—consistent with a product aimed at developers and infrastructure operators who expect compact, scannable interfaces.

## 6. Motion &amp; Interaction

**Duration tokens:**

- Fast (200ms): Micro-interactions like focus states, button hovers.

- Base (1500ms): Larger transitions, page or section reveals—deliberately slow, creating a sense of considered, purposeful motion.

- Slow (2000ms): Reserved for critical or celebratory moments.

**Easing (cubic-bezier(0.19, 1, 0.22, 1)):** A spring-like curve that overshoots slightly and settles—suggests confidence and playfulness without sacrificing professionalism. Not linear, not easeInOutQuad; this is a carefully chosen curve that adds personality while maintaining control.

**No parallax or heavy animation:** The sparse motion palette aligns with the minimalist aesthetic. Restraint signals expertise.

## Accessibility

### Contrast Ratios

**Primary pair: #262626 (text) on #ffffff (background):**

- Relative luminance: #262626 ≈ 0.024 | #ffffff = 1.0

- Contrast ratio ≈ **40.5:1** — far exceeds WCAG AAA (7:1)

**Secondary pair: #ffffff (text) on #ff5e1f (orange):**

- Relative luminance: #ffffff = 1.0 | #ff5e1f ≈ 0.25

- Contrast ratio ≈ **3.8:1** — **fails WCAG AA (4.5:1)**

This is a critical issue: white text on the orange accent is difficult for users with low vision or color blindness. Recommend testing with WCAG contrast validators and potentially darkening the orange slightly or switching to dark text on orange in non-critical contexts.

### Minimum Requirements

- **Touch target:** Mobile buttons and interactive elements must be minimum 44×44px (at breakpoint 400px). Given the tight spacing scale, verify that all CTAs, navigation items, and form controls meet this minimum.

- **Focus indicator:** Implement a 2px outline with 2px offset on all interactive elements. The current token set does not define a focus ring explicitly; this should be added (recommend a 2px solid #ff5e1f or #262626 outline with -2px offset to maintain tightness).

- **Color alone should not convey meaning:** The orange accent is used for CTAs and emphasis. Pair with icons, text labels, or patterns to ensure information is not lost for colorblind users.

- **Motion:** Respect prefers-reduced-motion by honoring 200ms or instantaneous transitions for users who opt out; do not enforce the 1500ms base duration for critical interactions.

&lt;!-- END DESIGN SYSTEM --&gt;
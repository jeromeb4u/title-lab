# TitleLab - SPEC.md

## 1. Concept & Vision

TitleLab AI is a precision tool for YouTube creators who know the wrong title kills great content before it gets a single view. It generates 10 high-CTR YouTube titles ranked by predicted click-through rate, paired with 5 thumbnail headline suggestions. The product feels like a professional editing suite — sharp, focused, confident. Every element communicates "this is the tool that serious creators use."

## 2. Design Language

### Aesthetic Direction
Editor-focused dark UI with gold (YouTube-inspired) accents. Think Figma meets YouTube Studio — precise, capable, premium.

### Color Palette
- Background: `#0f172a` (slate-900)
- Surface: `#1e293b` (slate-800)
- Border: `#334155` (slate-700)
- Primary: `#eab308` (yellow-500 — YouTube gold)
- Secondary: `#dc2626` (red-600)
- Success: `#22c55e` (green-500)
- Text: `#f8fafc` (slate-50)
- Muted: `#94a3b8` (slate-400)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, large scale
- Body: Regular weight, comfortable line-height

### Motion Philosophy
- Subtle entrance animations on scroll
- Smooth hover transitions (150ms ease)
- Loading state with pulsing skeleton cards

## 3. Layout & Structure

### NavBar
Logo | Features | Use Cases | Pricing | [Try Free button]

### Sections (top to bottom)
1. **Hero** — Headline: "Your next viral title. Generated in seconds." + subtext + CTA
2. **Title Preview** — Interactive demo with mock generation flow
3. **Features Grid** — 6 features in a 3×2 grid
4. **How It Works** — 3-step horizontal flow
5. **Stats Bar** — 3-4 key metrics
6. **Testimonials** — 3 YouTuber cards with name, quote, view improvement
7. **Pricing** — 3-tier cards (Starter, Growth, Pro)
8. **CTA** — Final conversion section
9. **Footer** — Links, copyright

### Responsive
- Desktop-first grid layouts collapse to single column on mobile
- Nav bar collapses to hamburger on mobile

## 4. Features & Interactions

### Title Preview Demo
- Topic input field (text)
- Niche dropdown (Gaming, Tech, Lifestyle, Finance, Education, Fitness, Cooking, Travel)
- Audience input (text)
- "Generate" button → 2s loading state → 10 title cards appear
- Each card shows: rank number, title, CTR score bar (animated), copy button
- "Copy" button → copies to clipboard, button changes to "Copied!" for 2s

### Features Grid (6 cards)
1. 10 CTR-Ranked Titles — AI generates and ranks by predicted CTR
2. Thumbnail Headline Suggestions — 5 additional thumbnail-ready headlines
3. Niche-Specific Optimization — Titles tailored to your category
4. A/B Title Pairs — Side-by-side comparison pairs
5. Emotion & Pattern Library — Built on proven viral patterns
6. Title History & Comparison — Track and compare past outputs

### How It Works
1. Enter Topic & Niche — type your video idea, pick your niche, define audience
2. AI Generates Titles — GPT-powered title generation with CTR scoring
3. Pick & Use — copy the best title, paste it into YouTube

### Pricing Tiers
| Tier | Price | Features |
|------|-------|----------|
| Starter | $0/mo | 10 titles/search, basic patterns |
| Growth | $12/mo | 50 titles/search, thumbnail headlines, niche optimization |
| Pro | $29/mo | Unlimited, history, comparison mode, priority support |

### Stats Bar
- "500K+ Titles Generated"
- "40% Average CTR Improvement"
- "10K+ Creators Trust TitleLab"

### Testimonials
1. Maya Chen — Gaming — "+180% views in 3 months"
2. Jake Thompson — Tech Reviews — "Titles that actually rank"
3. Sarah Rodriguez — Lifestyle — "My CTR doubled overnight"

## 5. Component Inventory

### NavBar
- Logo (text-based, gold accent)
- Nav links (hover: yellow underline)
- CTA button (yellow bg, dark text)

### HeroSection
- H1 large bold
- Subtext muted
- Primary CTA button

### TitlePreview (interactive demo)
- Input fields with dark surface styling
- Generate button (yellow, loading spinner state)
- Title cards: rank badge, title text, progress bar, copy button

### FeatureCard
- Icon (Lucide)
- Title bold
- Description muted

### PricingCard
- Tier name
- Price prominent
- Feature list with checkmarks
- CTA button (varies by tier)

### TestimonialCard
- Avatar placeholder
- Name + niche
- Quote
- Metric badge

### Footer
- Links grid
- Copyright

## 6. Technical Approach

### Stack
- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4 (with `@import "tailwindcss"` and `@theme {}`)
- Lucide React for icons

### File Structure
```
title-lab/
├── SPEC.md
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

### Key Implementation Notes
- All sections in a single page.tsx (landing page)
- Mock title generation with realistic sample data (no API calls)
- Client component for interactive demo section
- CSS variables via Tailwind @theme block
- Lucide icons imported as needed
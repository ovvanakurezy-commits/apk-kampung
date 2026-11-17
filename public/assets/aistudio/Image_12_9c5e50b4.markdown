---
name: Lereng Asri Nature Sanctuary
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#414943'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#717972'
  outline-variant: '#c1c8c1'
  surface-tint: '#3e674f'
  primary: '#04301c'
  on-primary: '#ffffff'
  primary-container: '#1e4731'
  on-primary-container: '#89b598'
  inverse-primary: '#a4d1b3'
  secondary: '#994703'
  on-secondary: '#ffffff'
  secondary-container: '#fc934f'
  on-secondary-container: '#6d3000'
  tertiary: '#003111'
  on-tertiary: '#ffffff'
  tertiary-container: '#004a1e'
  on-tertiary-container: '#00c55b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0edce'
  primary-fixed-dim: '#a4d1b3'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#264f38'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68c'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the tranquil, lush vitality of an Indonesian highland tourism village nestled in mountain mist and fertile volcanic soil. The experience evokes the refreshing sensation of morning dew on tea leaves, warm tropical sun breaking over the ridge, and genuine highland hospitality.

### Visual Style
- **Lush Tropical Naturalism**: Deep, oxygenated botanical greens paired with sun-baked volcanic earth and soft woven sand tones.
- **Warm Tactility**: Softly curved organic surfaces, subtle ambient shadows mimicking tropical mountain sunlight, and airy, breathable whitespace.
- **Friendly & Accessible**: Generous, ergonomically weighted touch targets, unmistakable interactive states, and an authentic Indonesian ecotourism feel that avoids sterile corporate minimalism.

## Colors

The color palette captures the living ecosystem of Mount Merapi/Ungaran highlands: deep canopy shade, volcanic terracotta, morning sunlight, and instant communal accessibility.

### Roles & Accents
- **Primary (`#1E4731` - Deep Highland Pine)**: Anchors identity, navigation headers, primary headlines, active states, and dominant brand moments.
- **Secondary (`#D97736` - Terracotta Dawn)**: Adds sun-drenched warmth, highlighting key callouts, discount ribbons, badges, ratings, and culinary/cultural experiences.
- **Tertiary (`#25D366` - WhatsApp Vibrant Green)**: Reserved exclusively for immediate contact touchpoints, live bookings via concierge chat, and rapid reservation floating actions.
- **Neutral (`#F9F6F0` - Warm Morning Sand)**: Base canvas tone that eliminates sterile mobile glare while enhancing readability under outdoor sunlight.
- **Supportive Accents**: Emerald (`#2D734C`) for progress and availability tags; Sage (`#A3B899`) for quiet background highlights and secondary category chips.

## Typography

Plus Jakarta Sans provides high clarity, soft geometric terminals, and balanced open counters that retain legibility across variable mobile screen brightness and outdoor sunlight.

### Rules & Hierarchy
- **Weights**: Restrict weights to `400` (Body text, tour descriptions), `600` (Labels, subheadings, UI interactive text), `700`/`800` (Destinations, prices, package titles).
- **Scale**: Mobile viewport scales gracefully with dedicated mobile heading alternatives to avoid aggressive wrapping on narrow viewports.
- **Numbers & Prices**: Package rates and review ratings utilize tight tracking (`-0.02em`) with bold weighting for rapid visual parsing.

## Layout & Spacing

A fluid grid optimized for thumb-driven one-handed navigation on mobile, adapting smoothly up to desktop breakpoints.

### Ergonomics & Grid
- **Mobile First (360px - 767px)**: Single column with `margin: 1.25rem` (20px), edge-to-edge touch carousels for homestays and attractions with `gutter: 1rem`.
- **Tablet (768px - 1023px)**: 8-column layout with 24px gutters, enabling two-column booking flows and visual card pairs.
- **Desktop (1024px+)**: 12-column layout centered with max width of 1200px, 32px gutters, and generous 64px horizontal canvas margins.
- **Vertical Rhythm**: Inter-section gaps default to `space-xl` (40px) on mobile to maintain clean visual breaks between attractions, homestay packages, and tour guides.

## Elevation & Depth

Visual hierarchy uses warm, sun-tinted diffused ambient shadows rather than harsh grey blurs, evoking daylight falling across organic mountain surfaces.

### Elevation Levels
- **Level 0 (Flat)**: Base canvas on `#F9F6F0` (Sand Cream) or nested sub-surfaces on pure `#FFFFFF`.
- **Level 1 (Card Resting)**: `0 4px 16px -2px rgba(30, 71, 49, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)`. Soft forest-tinted shadow for tour listing cards and package units.
- **Level 2 (Active / Hover / Popover)**: `0 10px 24px -4px rgba(30, 71, 49, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)`. Lifted destination cards, sticky bottom action bar, and dropdown selectors.
- **Level 3 (Floating Direct Action)**: `0 12px 32px -4px rgba(37, 211, 102, 0.35)`. Specifically tuned for the floating WhatsApp booking bubble to maintain distinct focus.

## Shapes

Rounded contours echo the soft rolling hills and terraced rice paddies of Lereng Asri.

### Border Radius Distribution
- **Small Elements (0.5rem / 8px)**: Input fields, filter buttons, status chips, date selectors.
- **Medium Elements (1rem / 16px)**: Destination image thumbnails, tour package cards, modal sheets, and homestay amenity tiles.
- **Large Surfaces (1.5rem / 24px)**: Hero visual cards, bottom sheet drawers, and featured booking blocks.
- **Pill (9999px)**: Floating WhatsApp trigger, category pill filters, and key action buttons.

## Components

### Buttons & Interactive Targets
- **Minimum Target**: Every clickable element strictly respects a minimum 48×48px physical touch target.
- **Primary CTA**: Background `#1E4731` with `#FFFFFF` text, `border-radius: 9999px`, height `52px`, `padding: 0 1.75rem`, bold label with slight spring scale on tap.
- **WhatsApp Action Button**: Background `#25D366` with `#FFFFFF` text, paired with WhatsApp icon, height `52px`. Used in bottom sticky action bars for instant trip booking and guide inquiries.
- **Secondary CTA**: Terracotta stroke `#D97736`, transparent background, `#D97736` text.

### Destination & Package Cards
- **Base**: Crisp `#FFFFFF` surface resting on `#F9F6F0` canvas.
- **Border & Shadow**: Subtle 1px border `#EAE4D9` combined with Level 1 forest-tinted shadow.
- **Image Treatment**: 16:10 or 4:3 aspect ratio with `rounded-top: 1rem`. Image overlays feature an organic gradient from transparent to 30% black for badge contrast.
- **Details**: Price shown in bold `headline-sm` with `/malam` or `/orang` in muted `body-sm`.

### Filter Chips & Tags
- **Category Chips**: Horizontal scrolling container with zero scrollbar friction. Inactive chips use `#FFFFFF` with 1px border `#E0D8CB`. Active chips use `#1E4731` background with white text.
- **Badges**: Terracotta sunrise badges (`#D97736` at 12% opacity with `#B35619` text) for "Popular" or "Paket Favorit". Emerald badges for "Tersedia Hari Ini" (Available Today).

### Form Inputs & Date Pickers
- **Height**: Minimum 50px input height to guarantee thumb comfort.
- **Background**: Solid `#FFFFFF` with 1.5px border `#DDD6C9`. Focused state shifts to 2px primary green border (`#1E4731`) without jarring displacement.

### Bottom Sticky Bar (Mobile Only)
- Fixed at the bottom of the viewport with a blurred background (`backdrop-filter: blur(12px)`, `rgba(249, 246, 240, 0.9)`), containing destination pricing and the direct WhatsApp booking CTA.
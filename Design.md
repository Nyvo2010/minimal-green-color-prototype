# Design notes — exact values from implementation

## Colours (Tailwind @theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ink` | `#121213` | Dark page background; inverted box on light |
| `--color-ink-box` | `#1F1F21` | Boxes on dark |
| `--color-paper` | `#FFFFFF` | Light page background |
| `--color-paper-box` | `#F2F2F3` | Boxes on light; also box on dark |
| `--color-forest` | `#2C5F2D` | Dark green accent (buttons, rings on light) |
| `--color-moss` | `#97BC62` | Light green accent (buttons, rings on dark) |

Pastels (gradient only, not main colors):
- Pink: `rgba(244, 169, 196, 0.95)` → `#F4A9C4`
- Orange: `rgba(246, 162, 94, 0.95)` → `#F6A25E`
- Lilac: `rgba(189, 169, 242, 0.85)` → `#BDA9F2`
- Sky: `rgba(165, 216, 240, 0.85)` → `#A5D8F0`

## Type

| Role | Font | Size | Weight | Tracking | Other |
|------|------|------|--------|----------|-------|
| Display serif | Newsreader (var, `opsz` 96) | 48px / 60px (`text-5xl`/`sm:text-6xl`) | 430 | `-0.02em` | `.serif` class |
| Section title | Newsreader | 48px / 60px | 430 | `-0.02em` | `.serif` |
| Page title | Newsreader | 48px / 60px | 430 | `-0.02em` | `.serif` |
| Specimen large | Newsreader | 60px (`text-6xl`) | 430 | `-0.02em` | `.serif` |
| Stat number | Newsreader | 72px (`text-7xl`) | 430 | `-0.02em` | `.serif leading-none` |
| Quote / statement | Newsreader | 30px (`text-3xl`) | 430 | `-0.02em` | `.serif leading-tight` |
| Chip value (nested box) | Newsreader | 24px (`text-2xl`) | 430 | `-0.02em` | `.serif leading-none` |
| UI font | Inter | — | 400 / 500 | — | `--font-sans` |
| Body copy | Inter | 14px (`text-sm`) | 400/500 | — | |
| Small copy | Inter | 12px (`text-xs`) | 400/500 | — | |
| Labels | Inter | 12px (`text-xs`) | 500 | `0.14em` | uppercase, `opacity-50` |
| Dimension marks | mono (font-mono) | 9px (`text-[9px]`) | — | `0.08em` | uppercase, `text-forest/70` |

## Spacing

| Context | Value | Tailwind |
|---------|-------|----------|
| Page horizontal gutter | 24px / 40px from `sm` | `px-6 sm:px-10` |
| Content max-width | 1152px | `max-w-6xl` |
| Page header top | 64px | `pt-16` |
| Page header bottom | 80px | `pb-20` |
| Spec block gap | 48px | `mt-12` / `mt-14` |
| Colour row gap | 12px | `gap-3` |
| Colour chip height | 176px | `h-44` |
| Colour chip padding | 16px | `p-4` |
| Type panel padding | 28px | `p-7` |
| Gradient swatch height | 144px | `h-36` |
| Bento container padding | 24px / 32px from `sm` | `p-6 sm:p-8` |
| Bento gutter | 16px | grid `1rem` column |
| Outer card padding | 28px | `p-7` |
| Outer card padding inset (dashed) | 28px | `inset-7` |
| Nested box padding | 12px | `p-3` |
| Nested box padding inset (dashed) | 12px | `inset-3` |
| Preview vertical padding | 64px | `py-16` |
| Preview card padding | 28px | `p-7` |
| Preview grid gap | 16px | `gap-4` |
| Button horizontal padding | 24px | `px-6` |
| Button vertical padding | 12px | `py-3` |
| Tag horizontal padding | 12px | `px-3` |
| Tag vertical padding | 6px | `py-1.5` |
| Input horizontal padding | 16px | `px-4` |
| Input vertical padding | 14px | `py-3.5` |
| Toggle track | 44×24px | `h-6 w-11` |
| Toggle knob | 20×20px | `h-5 w-5` |
| Checkbox | 24×24px | `h-6 w-6` |
| Tab horizontal padding | 12px | `px-3` |
| Tab vertical padding | 8px | `py-2` |
| Progress track height | 8px | `h-2` |
| Toast icon circle | 36×36px | `h-9 w-9` |
| Text card min-height | 256px | `min-h-64` |
| Accent dot | 8×8px | `h-2 w-2` |

## Radii

| Element | Radius | Tailwind |
|---------|--------|----------|
| Cards, gradient panels, toast | 24px | `rounded-3xl` |
| Spec panels, colour chips, gradient swatch, floating card | 16px | `rounded-2xl` |
| Inputs, nested boxes | 12px | `rounded-xl` |
| Checkbox | 6px | `rounded-md` |
| Buttons, tags, toggles, tabs, progress | full (9999px) | `rounded-full` |

## Components — exact classes

### Buttons (all `rounded-full px-6 py-3 text-sm font-medium transition`)
| Variant | Light mode | Dark mode | Hover |
|---------|------------|-----------|-------|
| Primary | `bg-forest text-paper` | `bg-moss text-ink` | `opacity-90` |
| Secondary | `bg-moss text-ink` | `bg-forest text-paper` | `opacity-90` |
| Neutral | `bg-paper text-ink` | `bg-ink text-paper` | `opacity-80` |
| Inverted | `bg-ink-box text-paper` | `bg-paper-box text-ink` | `opacity-90` |
| Text link | `text-forest` | `text-moss` | `opacity-70` (no bg) |

### Tags (all `rounded-full px-3 py-1.5 text-xs font-medium`)
| Variant | Light mode | Dark mode |
|---------|------------|-----------|
| Live | `bg-forest text-paper` | `bg-moss text-ink` |
| Approved | `bg-moss text-ink` | `bg-forest text-paper` |
| Draft | `bg-paper text-ink` | `bg-ink text-paper` |
| Archived | `bg-ink-box text-paper` | `bg-paper-box text-ink` |

### Inputs
- `rounded-xl` (12px)
- `px-4 py-3.5` (16/14 padding)
- `text-sm` (14px)
- `placeholder:opacity-40`
- `outline-none`
- `focus:ring-2` — `focus:ring-forest` (light) / `focus:ring-moss` (dark)
- Background: surface colour (`bg-paper` light / `bg-ink` dark)

### Toggle
- Track: `h-6 w-11 rounded-full`
- Off: surface colour; On: accent background (`bg-forest` light / `bg-moss` dark)
- Knob: `h-5 w-5 rounded-full`, `top-0.5`
- Off position: `left-0.5` with accent background
- On position: `left-[22px]` with surface colour
- Transition: `transition-all`

### Checkbox
- Box: `h-6 w-6 rounded-md`
- Off: surface colour; On: accent background
- Check icon: 16×16 (`h-4 w-4`), stroke-width 3, `knobText` colour

### Tabs
- Container: surface background, `rounded-full p-1 gap-1`
- Button: `flex-1 rounded-full px-3 py-2 text-sm transition`
- Active: accent background
- Inactive: `opacity-60 hover:opacity-100`

### Progress
- Track: surface background, `h-2 rounded-full`
- Fill: accent background (`bg-forest` light / `bg-moss` dark)
- Width transition: `transition-all duration-500`
- Day: 40% (`w-2/5`); Week: 75% (`w-3/4`)

### Stat cards
- Padding: `p-7` (28px)
- Radius: `rounded-3xl` (24px)
- Label: `text-sm opacity-60`
- Value: `.serif mt-8 text-7xl leading-none` (72px)
- Surfaces: inverted / `bg-forest text-paper` / `bg-moss text-ink`

### Gradient panel (`.grad`)
- Base: `#2C5F2D`
- Blobs: 7 radial gradients + 1 diagonal linear (moss highlight)
- Blur: `blur(10px) contrast(1.12)` on `::before` (inset -10%)
- Grain: two SVG turbulence layers (260px @ 0.9 baseFreq, 520px @ 0.35), `mix-blend-mode: overlay`, opacity 0.55
- Single recipe used everywhere

### Floating card on gradient
- Card: `rounded-2xl p-6` (16px radius, 24px padding)
- Shadow (`.soft-shadow`): `0 30px 60px -20px rgba(18,18,19,.4), 0 8px 20px -8px rgba(18,18,19,.15)`

### Toast / inverted box
- Box: `rounded-3xl p-7` (24px radius, 28px padding)
- Icon circle: `h-9 w-9 rounded-full` (36px), accent background
- Buttons: `flex-1 rounded-full py-3 text-sm font-medium transition`
  - Confirm: accent background, hover `opacity-90`
  - Cancel: surface background, hover `opacity-80`

### Text cards
- `min-h-64` (256px), `rounded-3xl p-7` (24px radius, 28px padding)
- Statement: `.serif text-3xl leading-tight` (30px)
- Accent dot: `h-2 w-2 rounded-full` (8px), accent background

## Motion / interaction

| Element | Behaviour |
|---------|-----------|
| Buttons, tags, tabs, toast buttons | Hover: `opacity-80`–`opacity-90`; no transform, no shadow |
| Toggle knob | `transition-all` (position + background) |
| Progress fill | `transition-all duration-500` (width) |
| Checkbox | Background transition only |
| Page | `scroll-behavior: smooth` on `html` |
| No entrance, scroll, or layout animations | |

## Surface pairs (mode-dependent)

| Context | Light | Dark |
|---------|-------|------|
| Page background | `paper` / `ink` | `ink` / `paper` |
| Standard box | `paper-box` | `ink-box` |
| Inverted box | `ink-box` / `paper` | `paper-box` / `ink` |
| Primary accent | `forest` / `paper` | `moss` / `ink` |
| Secondary accent | `moss` / `ink` | `forest` / `paper` |
| Text link | `text-forest` | `text-moss` |
| Focus ring | `focus:ring-forest` | `focus:ring-moss` |
| Toggle track (off) | surface | surface |
| Toggle track (on) | `forest` | `moss` |
| Toggle knob (off) | `forest` | `moss` |
| Toggle knob (on) | surface | surface |
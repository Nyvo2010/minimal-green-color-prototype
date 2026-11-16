# Palette & type — design notes

## Purpose

- One prototype page: a spec sheet (colour, type, gradient, layout) followed by the same UI kit rendered once in light mode and once in dark mode.
- Stack: Vite + React + TypeScript + Tailwind CSS v4 (`src/index.css` uses `@theme`).
- All values below match the code in `src/index.css` and `src/App.tsx`.

## Colour

- `ink` `#121213` — dark page background; also an inverted box on white.
- `ink-box` `#1F1F21` — boxes on dark.
- `paper` `#FFFFFF` — light page background.
- `paper-box` `#F2F2F3` — boxes on light; also a box on dark.
- `forest` `#2C5F2D` — dark green accent.
- `moss` `#97BC62` — light green accent.

- Green and white lead. The four pastels are accents only and appear inside the gradient, never on flat UI.
- Pink `#F4A9C4`, orange `#F6A25E`, lilac `#BDA9F2`, sky `#A5D8F0`.

### Surface pairs

- Light page: `paper` background, `ink` text. Boxes `paper-box`. Inverted box `ink-box` with `paper` text.
- Dark page: `ink` background, `paper` text. Boxes `ink-box`. Inverted box `paper-box` with `ink` text.
- Light accent: `forest` background with `paper` text. Dark accent: `moss` background with `ink` text.
- Forest is never used as text on ink; moss is the accent that reads on dark.

## Type

- Display serif: Newsreader (variable, `opsz` 96, weight 430, tracking `-0.02em`).
- Used for page titles, section titles, stat numbers, quotes and short statements.
- Italic serif appears only in the type specimen.
- Interface: Inter, weights 400 and 500. Semibold is loaded but not used in the UI.
- Body copy: 14px (`text-sm`) and 12px (`text-xs`).
- Labels: 12px, uppercase, tracking `0.14em`, 50% opacity.
- Scale in use: page title 48/60px, section title 48/60px, quote 30px, stat number 72px, specimen 60px, chip value 24px.

## Radii

- 24px: cards, gradient panels, toast.
- 16px: spec panels, colour chips, the gradient swatch, the floating card.
- 12px: inputs, nested boxes.
- 6px: checkbox.
- Full: buttons, tags, toggles, tabs, progress bar.

## Spacing

- Page gutter: 24px, 40px from `sm` up.
- Content width: `max-w-6xl` (1152px).
- Bento gutters: 16px.
- Card padding: 28px.
- Nested box padding: 12px.
- Page header: 64px top, 80px bottom. Spec blocks sit 48px apart; the colour row sits 56px under the title.

## Bento schematic

- Two cards on one grid; the 16px gutter is a real grid track, so the dimension mark sits exactly on both card edges.
- Outer card: 28px padding, 24px radius. The dashed inset marks the content edge.
- Nested box: 12px padding, 12px radius.
- Dimension marks: 1px strokes at 40% forest, dashed padding line at 25% forest, labels 9px mono uppercase at 0.08em tracking.
- Labels sit inside the padding lanes, never over content: `gap 16` above the gutter, `r 24` in the top lane, `pad 28` on a 28px vertical rule, `r 12` in the nested box's bottom lane.

## Gradient

- One recipe, used everywhere. No variants.
- Base `#2C5F2D`.
- Moss light entering from the top left, a soft diagonal highlight, ink shadow in the bottom corners, small pink/orange/lilac flecks top right.
- Layers: base colour, blurred radial blobs (`blur(10px) contrast(1.12)`), then two SVG turbulence grain layers at 260px and 520px, blended `overlay`.
- Grain opacity 0.55.
- Appears as the single swatch in the spec sheet and as the panel behind the floating card in both previews.
- The only shadow in the system sits on the card floating over this gradient: `0 30px 60px -20px rgba(18,18,19,.4)` plus a tighter second layer.

## Components

- Buttons: pill, `px` 24 / `py` 12, 14px medium text. Variants: accent, secondary, neutral (surface), inverted, text link.
- Tags: pill, `px` 12 / `py` 6, 12px medium text. Same four surface variants.
- Inputs: `rounded-xl` (12px), `px` 16 / `py` 14, 14px text, placeholder at 40%, 2px focus ring in forest (light) or moss (dark).
- Toggle: 44×24 track, 20px knob, track moves between surface and accent.
- Checkbox: 24×24, 6px radius, 3px check stroke.
- Tabs: pill container with 4px inner padding, equal-width pill buttons.
- Progress: 8px track, accent fill, width animates over 500ms.
- Stat cards: inverted, forest and moss surfaces; label at 60% opacity, number in the displayed serif at 72px.
- Toast: check icon in an accent circle, medium title, 60% body line.
- Text cards: minimum height 256px, serif statement at 30px, 8px accent dot.

## Layout of the previews

- Each preview is a full-width band: light mode on white, dark mode on ink.
- Inner grid: 12 columns at `lg`, 16px gaps.
- Buttons block spans 5, inputs 4, tabs 3, stat cards 4 each, gradient feature 7, toast 5, text cards 6 each.

## Motion

- Hover: opacity to 80–90%; no transforms, no shadows.
- Toggle knob and progress width animate; everything else is instant or opacity-only.
- No scroll animation, no entrance animation.

## Files

- `index.html` — font loading (Inter, Newsreader), page shell.
- `src/index.css` — palette, type tokens, serif class, gradient, grain, shadow.
- `src/App.tsx` — spec header, bento schematic, light and dark previews.

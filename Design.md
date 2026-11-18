# Design System

## Versions

- **v1** — Original: pure white paper (`#FFFFFF`), bright greens (`#2C5F2D` / `#97BC62`), stronger splash colors
- **v2** — Previous: warm beige paper (`#FAF9F6` / `#F0EFE9`), new green palette with 2 main colors + 3 accents in equal proportion
- **v3** — Current: same paper & inks as v2, greens midway between v1 & v2 (`#2D6B44` / `#80B579`), three accents midway between v1 & v3 pastels

All versions are accessible as static routes:
- `/v1` — Original version
- `/v2` — Previous version
- `/v3` — Current version (default)

---

## v3 Colour (Current)

| Token | Hex | Role |
|---|---|---|
| `ink` | `#121213` | Dark page background; also a box on white |
| `ink-box` | `#1F1F21` | Boxes on ink |
| `paper` | `#FAF9F6` | Light page background (warm beige) |
| `paper-box` | `#F0EFE9` | Boxes on light; also a box on ink |
| `forest` | `#2D6B44` | Green, dark (midpoint v1↔v2) |
| `moss` | `#80B579` | Green, light (midpoint v1↔v2) |

Gradient accents — gradients only, never fills or text. Each sits midway between its v1 and v2 equivalents:

| Accent Green | Accent Pink | Accent Orange |
|---|---|---|
| `#9DC672` | `#F5B3BE` | `#F7B380` |

Text hierarchy comes from opacity, not extra greys: secondary `60–70%`, labels `50%`, placeholders `40%`.

**Dark mode** — same six colours, roles swap (identical mapping to v2):

| | Light | Dark |
|---|---|---|
| Background | `paper` | `ink` |
| Box | `paper-box` | `ink-box` |
| Accent | `forest` on `paper` | `moss` on `ink` |
| Secondary accent | `moss` on `ink` | `forest` on `paper` |
| Inverted box | `ink-box` | `paper-box` |

---

## v2 Colour (Previous)

| Token | Hex | Role |
|---|---|---|
| `ink` | `#121213` | Dark page background; also a box on white |
| `ink-box` | `#1F1F21` | Boxes on ink |
| `paper` | `#FAF9F6` | Light page background (warm beige) |
| `paper-box` | `#F0EFE9` | Boxes on light; also a box on ink |
| `forest` | `#2D775B` | Green, dark (main) |
| `moss` | `#68AD90` | Green, light (main) |

Gradient accents — gradients only, never fills or text (used in roughly equal proportion with the two main greens):

| Accent Green | Accent Pink | Accent Cyan |
|---|---|---|
| `#A7C790` | `#FCDCF4` | `#DAF6FD` |

Text hierarchy comes from opacity, not extra greys: secondary `60–70%`, labels `50%`, placeholders `40%`.

**Dark mode** — same six colours, roles swap:

| | Light | Dark |
|---|---|---|
| Background | `paper` | `ink` |
| Box | `paper-box` | `ink-box` |
| Accent | `forest` on `paper` | `moss` on `ink` |
| Secondary accent | `moss` on `ink` | `forest` on `paper` |
| Inverted box | `ink-box` | `paper-box` |

---

## v1 Colour (Archived)

| Token | Hex | Role |
|---|---|---|
| `ink` | `#121213` | Dark page background; also a box on white |
| `ink-box` | `#1F1F21` | Boxes on ink |
| `paper` | `#FFFFFF` | Light page background |
| `paper-box` | `#F2F2F3` | Boxes on white; also a box on ink |
| `forest` | `#2C5F2D` | Green, dark |
| `moss` | `#97BC62` | Green, light |

Splash colours — gradients only, never fills or text:

| Pink | Orange | Lilac | Sky |
|---|---|---|---|
| `#F4A9C4` | `#F6A25E` | `#BDA9F2` | `#A5D8F0` |

---

## Typography

- Display: **Newsreader** — `opsz 96`, weight `430`, tracking `-0.02em`; italic for accents.
- Interface: **Inter** — weights `400` and `500`.

| Use | Size |
|---|---|
| Hero / page title | 48px → 60px at `sm` |
| Section heading | 36–48px, leading-tight |
| Statement | 30px, leading-tight |
| Small headline | 24px |
| Stat number | 72px, leading-none |
| Body | 14px |
| Label | 12px, uppercase, tracking `.14em`, opacity 50% |
| Tag | 12px, weight 500 |

Serif lines often pair a full-opacity phrase with a `50–60%` continuation.

## Radii

| Element | Radius |
|---|---|
| Cards, panels | 24px |
| Inner cards, swatches | 16px |
| Inputs, list rows, nested boxes | 12px |
| Checkbox | 6px |
| Buttons, tags, toggles, tabs | full pill |

## Spacing

| Context | Value |
|---|---|
| Container | 1152px, `24px` padding → `40px` at `sm` |
| Page top / bottom | 64px / 80px |
| Section gap | 48–56px |
| Card padding | 28px; feature panels 24px → 48px at `sm` |
| Grid gap | 12–16px |
| Button | 24px × 12px |
| Tag | 12px × 6px |
| Input | 16px × 14px |

## Components

- **Buttons** — pill, 14px / weight 500, `transition`, hover `opacity 90%` (text link `70%`). Four fills: accent, secondary accent, surface, inverted.
- **Tags** — same four fills, 12px.
- **Inputs** — surface-coloured, 12px radius, no border, focus `2px` accent ring.
- **Toggle** — 44 × 24px track, 20px knob.
- **Checkbox** — 24px, accent fill with check.
- **Tabs** — pill track, accent pill for the active segment.
- **Progress** — 8px pill track, accent fill, 500ms transition.
- **Shadow** — only on cards floating over a gradient:
  `0 30px 60px -20px rgba(18,18,19,.4), 0 8px 20px -8px rgba(18,18,19,.15)`

## v2 Gradient

Two main greens (`#2D775B`, `#68AD90`) with three accents (`#A7C790`, `#FCDCF4`, `#DAF6FD`) — **pink and cyan are much more prominent**. Abstract organic shapes using conic gradients, elliptical gradients with varied ratios, and angular linear sweeps. Higher contrast, more dynamic, consistent visual language.

```
base: #2D775B; inset: -15%; filter: blur(12px) contrast(1.2)

/* Main dark - large angular masses */
linear-gradient(145deg, transparent 10%, #2D775B 22%, #2D775B 48%, transparent 65%)
radial-gradient(ellipse 45% 35% at 12% 18%, #2D775B 0%, #2D775B 40%, transparent 75%)
radial-gradient(ellipse 38% 42% at 88% 82%, #2D775B 0%, #2D775B 35%, transparent 72%)

/* Main light - sweeping diagonals & organic ellipses */
linear-gradient(45deg, transparent 18%, #68AD90 35%, #68AD90 52%, transparent 68%)
radial-gradient(ellipse 30% 22% at 72% 12%, #68AD90 0%, #68AD90 45%, transparent 68%)
radial-gradient(ellipse 22% 28% at 28% 88%, #68AD90 0%, #68AD90 40%, transparent 70%)

/* Accent pink - VERY PROMINENT - large conic bursts (wider angle) */
conic-gradient(from 160deg at 82% 22%, transparent 0deg, #FCDCF4 25deg, #FCDCF4 110deg, #FCDCF4 145deg, transparent 190deg)
radial-gradient(ellipse 28% 32% at 18% 58%, #FCDCF4 0%, #FCDCF4 50%, transparent 72%)

/* Accent cyan - VERY PROMINENT - conic burst & angular sweeps */
conic-gradient(from -80deg at 15% 78%, transparent 0deg, #DAF6FD 45deg, #DAF6FD 120deg, transparent 170deg)
linear-gradient(35deg, transparent 20%, #DAF6FD 38%, #DAF6FD 62%, transparent 80%)
conic-gradient(from 45deg at 65% 18%, transparent 0deg, #DAF6FD 35deg, #DAF6FD 70deg, transparent 110deg)

/* Accent green - organic center shapes + sweep (more prominent) */
radial-gradient(ellipse 32% 24% at 48% 45%, #A7C790 0%, #A7C790 50%, transparent 70%)
radial-gradient(ellipse 24% 18% at 58% 30%, #A7C790 0%, transparent 68%)
linear-gradient(160deg, transparent 30%, #A7C790 50%, transparent 70%)

/* Ink depth anchors - stronger contrast */
radial-gradient(ellipse 55% 48% at 96% 96%, rgba(18,18,19,.95) 0%, rgba(18,18,19,.7) 35%, transparent 70%)
radial-gradient(ellipse 48% 42% at 4% 96%, rgba(18,18,19,.85) 0%, rgba(18,18,19,.5) 40%, transparent 72%)

/* Sharp angular multi-color accent - top edge */
conic-gradient(from 90deg at 50% -10%, transparent 0deg, #68AD90 20deg, #DAF6FD 45deg, #FCDCF4 70deg, #A7C790 95deg, transparent 130deg)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.55`.

## v3 Gradient

Uses the exact v2 composition — same layer stack, same positions, same blur/contrast/grain treatment — with three changes:

1. Base greens are the v1↔v2 midpoints (`#2D6B44` forest, `#80B579` moss).
2. Cyan removed; its bottom-left slot becomes accent orange (`#F7B380` at 75% opacity).
3. Pink (`#F5B3BE` at 90%) and orange inherit the old cyan slot's size/placement; green (`#9DC672` at 100%) keeps the centre cluster.

```
base: #2D6B44; inset: -15%; filter: blur(2px) contrast(1.2)

/* ===== BASE: Forest — deep anchors ===== */
radial-gradient(ellipse 60% 55% at 15% 25%,
  #2D6B44 0%, #2D6B44 35%, transparent 75%),
radial-gradient(ellipse 55% 50% at 85% 75%,
  #2D6B44 0%, #2D6B44 30%, transparent 72%)

/* ===== MAIN GREEN: Moss — sweeping diagonal + organic masses ===== */
linear-gradient(118deg,
  transparent 25%, #80B579 42%, #80B579 58%, transparent 75%),
radial-gradient(ellipse 40% 46% at 20% 22%,
  #80B579 0%, #80B579 42%, transparent 72%),
radial-gradient(ellipse 34% 40% at 55% 45%,
  #80B579 0%, #80B579 35%, transparent 68%),
radial-gradient(ellipse 28% 32% at 70% 62%,
  #80B579 0%, #80B579 30%, transparent 65%)

/* ===== ACCENT PINK: Top-right zone ===== */
radial-gradient(ellipse 32% 28% at 78% 22%,
  #F5B3BEBF 0%, #F5B3BEBF 40%, transparent 68%),
radial-gradient(ellipse 22% 18% at 62% 36%,
  #F5B3BEBF 0%, #F5B3BEBF 30%, transparent 60%),
radial-gradient(ellipse 16% 20% at 68% 48%,
  #F5B3BEBF 0%, #F5B3BEBF 25%, transparent 58%)

/* ===== ACCENT ORANGE: Bottom-left zone (replaces cyan) ===== */
radial-gradient(ellipse 36% 32% at 22% 76%,
  #F7B380BF 0%, #F7B380BF 42%, transparent 70%),
radial-gradient(ellipse 26% 22% at 38% 62%,
  #F7B380BF 0%, #F7B380BF 35%, transparent 62%),
radial-gradient(ellipse 20% 18% at 44% 56%,
  #F7B380BF 0%, #F7B380BF 28%, transparent 58%)

/* ===== ACCENT GREEN: Center cluster ===== */
radial-gradient(ellipse 30% 24% at 50% 48%,
  #9DC672 0%, #9DC672 45%, transparent 68%),
radial-gradient(ellipse 22% 18% at 44% 34%,
  #9DC672 0%, #9DC672 35%, transparent 62%),
radial-gradient(ellipse 18% 20% at 56% 56%,
  #9DC672 0%, #9DC672 30%, transparent 60%)

/* ===== EDGE CONVERGENCE ===== */
conic-gradient(from 88deg at 50% -8%,
  transparent 0deg,
  #80B579 12deg,
  #F5B3BEBF 48deg,
  #9DC672 78deg,
  #2D6B44 102deg,
  transparent 125deg)

/* ===== INK ANCHORS ===== */
radial-gradient(ellipse 55% 48% at 98% 98%,
  rgba(18,18,19,0.95) 0%, rgba(18,18,19,0.65) 30%, transparent 68%),
radial-gradient(ellipse 50% 42% at 2% 98%,
  rgba(18,18,19,0.9) 0%, rgba(18,18,19,0.55) 35%, transparent 70%),
radial-gradient(ellipse 40% 32% at 96% 4%,
  rgba(18,18,19,0.5) 0%, transparent 60%),
radial-gradient(ellipse 34% 28% at 4% 4%,
  rgba(18,18,19,0.45) 0%, transparent 58%)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.35`.

## v1 Gradient (Original proportions, abstract shapes)

**Same color proportions as original** — green dominates, small accent splashes only. Abstract organic shapes: sweeping diagonals, conic bursts, elliptical wedges. Higher contrast than original.

```
base: #2C5F2D; inset: -15%; filter: blur(12px) contrast(1.2)

/* Main light - sweeping diagonal (was 115deg at 28-58%) */
linear-gradient(115deg, transparent 25%, #97BC62 40%, #97BC62 55%, transparent 70%)

/* Main light - organic elliptical mass top-left (was 38% 45% at 16% 14%) */
radial-gradient(ellipse 38% 45% at 16% 14%, #97BC62 0%, #97BC62 30%, transparent 70%)

/* Main light - organic elliptical mass mid-right (was 34% 40% at 60% 38%) */
radial-gradient(ellipse 34% 40% at 60% 38%, #97BC62 0%, #97BC62 20%, transparent 70%)

/* Accent lilac - conic burst top-right (was radial 9% 12% at 74% 9%) */
conic-gradient(from 180deg at 74% 9%, transparent 0deg, #BDA9F2 25deg, #BDA9F2 55deg, transparent 90deg)

/* Accent orange - angular sweep top-right (was radial 10% 14% at 92% 27%) */
conic-gradient(from -45deg at 92% 27%, transparent 0deg, #F6A25E 40deg, #F6A25E 75deg, transparent 110deg)

/* Accent pink - elliptical wedge top-right (was radial 15% 20% at 84% 17%) */
radial-gradient(ellipse 18% 22% at 84% 17%, #F4A9C4 0%, #F4A9C4 35%, transparent 70%)

/* Accent sky - small conic bottom-left for balance */
conic-gradient(from 90deg at 15% 85%, transparent 0deg, #A5D8F0 30deg, transparent 60deg)

/* Ink depth - bottom right anchor (was 45% 50% at 88% 94%) */
radial-gradient(ellipse 48% 50% at 92% 92%, rgba(18,18,19,.9) 0%, rgba(18,18,19,.5) 40%, transparent 72%)

/* Ink depth - bottom left anchor (was 40% 40% at 6% 96%) */
radial-gradient(ellipse 42% 38% at 8% 96%, rgba(18,18,19,.7) 0%, rgba(18,18,19,.35) 45%, transparent 72%)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.55`.

## Tokens (v3 — current)

```css
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-serif: "Newsreader", Georgia, "Times New Roman", serif;

  --color-ink: #121213;
  --color-ink-box: #1f1f21;
  --color-paper: #faf9f6;
  --color-paper-box: #f0efe9;
  --color-forest: #2d6b44;
  --color-moss: #80b579;

  --radius-card: 24px;
  --radius-inner: 16px;
  --radius-control: 12px;
  --radius-checkbox: 6px;

  --container: 1152px;
  --gutter: 24px;
  --card-padding: 28px;
  --grid-gap: 16px;
  --section-gap: 48px;

  --shadow-float: 0 30px 60px -20px rgba(18, 18, 19, 0.4),
                  0 8px 20px -8px rgba(18, 18, 19, 0.15);
}
```

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Newsreader", Georgia, serif;
  --color-ink: #121213;
  --color-ink-box: #1f1f21;
  --color-paper: #faf9f6;
  --color-paper-box: #f0efe9;
  --color-forest: #2d6b44;
  --color-moss: #80b579;
}
```

## Local Development

```bash
npm run dev
# Opens at http://localhost:5173/
# - /v1 shows original version
# - /v2 shows previous version
# - /v3 shows current version (default)
```

## GitHub Pages Deployment

The site is deployed to `https://nyvo2010.github.io/minimal-green-color-prototype/` with routes:
- `/` → redirects to `/v3`
- `/v1` → original version
- `/v2` → previous version
- `/v3` → current version
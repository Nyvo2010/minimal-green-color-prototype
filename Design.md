# Design System

## Versions

- **v1** — Original: pure white paper (`#FFFFFF`), bright greens (`#2C5F2D` / `#97BC62`), stronger splash colors
- **v2** — Current: warm beige paper (`#FAF9F6` / `#F0EFE9`), new green palette with 2 main colors + 3 accents in equal proportion

Both versions are accessible as routes in the same SPA:
- `/v1` — Original version
- `/v2` — Current version (default)

---

## v2 Colour (Current)

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

Two main greens (`#2D775B`, `#68AD90`) with three accents (`#A7C790`, `#FCDCF4`, `#DAF6FD`) — **pink and cyan are more prominent**. Abstract organic shapes using conic gradients, elliptical gradients with varied ratios, and angular linear sweeps. Higher contrast, less uniform blobs.

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

/* Accent pink - PROMINENT - large conic bursts */
conic-gradient(from 180deg at 82% 22%, transparent 0deg, #FCDCF4 35deg, #FCDCF4 95deg, #FCDCF4 130deg, transparent 180deg)
radial-gradient(ellipse 25% 30% at 18% 58%, #FCDCF4 0%, #FCDCF4 50%, transparent 72%)

/* Accent cyan - PROMINENT - conic burst & angular sweep */
conic-gradient(from -60deg at 15% 78%, transparent 0deg, #DAF6FD 50deg, #DAF6FD 110deg, transparent 160deg)
linear-gradient(20deg, transparent 25%, #DAF6FD 42%, #DAF6FD 58%, transparent 75%)

/* Accent green - organic center shapes */
radial-gradient(ellipse 28% 20% at 48% 45%, #A7C790 0%, #A7C790 45%, transparent 68%)
radial-gradient(ellipse 20% 16% at 58% 30%, #A7C790 0%, transparent 65%)

/* Ink depth anchors - stronger */
radial-gradient(ellipse 55% 48% at 96% 96%, rgba(18,18,19,.95) 0%, rgba(18,18,19,.7) 35%, transparent 70%)
radial-gradient(ellipse 48% 42% at 4% 96%, rgba(18,18,19,.85) 0%, rgba(18,18,19,.5) 40%, transparent 72%)

/* Sharp angular multi-color accent - top edge */
conic-gradient(from 90deg at 50% -10%, transparent 0deg, #68AD90 25deg, #DAF6FD 50deg, #FCDCF4 75deg, transparent 120deg)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.55`.

## v1 Gradient (Archived)

Green base with abstract organic shapes — sweeping diagonals, conic bursts, elliptical wedges. Higher contrast than original.

```
base: #2C5F2D; inset: -15%; filter: blur(12px) contrast(1.2)

/* Main light - sweeping diagonal band */
linear-gradient(125deg, transparent 15%, #97BC62 30%, #97BC62 45%, transparent 60%)

/* Accent pink - conic burst from top-right */
conic-gradient(from 210deg at 85% 10%, transparent 0deg, #F4A9C4 45deg, #F4A9C4 90deg, transparent 135deg)

/* Accent lilac - elliptical wedge */
radial-gradient(ellipse 35% 50% at 75% 15%, #BDA9F2 0%, #BDA9F2 40%, transparent 75%)

/* Accent orange - angular sweep */
conic-gradient(from -30deg at 92% 30%, transparent 0deg, #F6A25E 60deg, transparent 120deg)

/* Main light - organic blob cluster top-left */
radial-gradient(ellipse 40% 30% at 18% 20%, #97BC62 0%, #97BC62 35%, transparent 70%)
radial-gradient(ellipse 25% 35% at 35% 8%, #97BC62 0%, transparent 65%)

/* Ink anchors - deep corners */
radial-gradient(ellipse 50% 45% at 92% 92%, rgba(18,18,19,.95) 0%, rgba(18,18,19,.6) 40%, transparent 75%)
radial-gradient(ellipse 45% 40% at 8% 94%, rgba(18,18,19,.8) 0%, rgba(18,18,19,.4) 45%, transparent 75%)

/* Accent green sweep */
linear-gradient(60deg, transparent 40%, #97BC62 55%, transparent 70%)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.55`.

## Tokens (v2)

```css
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-serif: "Newsreader", Georgia, "Times New Roman", serif;

  --color-ink: #121213;
  --color-ink-box: #1f1f21;
  --color-paper: #faf9f6;
  --color-paper-box: #f0efe9;
  --color-forest: #2d775b;
  --color-moss: #68ad90;

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
  --color-forest: #2d775b;
  --color-moss: #68ad90;
}
```

## Local Development

```bash
npm run dev
# Opens at http://localhost:5173/
# - /v1 shows original version
# - /v2 shows current version (default)
```

## GitHub Pages Deployment

The site is deployed to `https://nyvo2010.github.io/minimal-green-color-prototype/` with routes:
- `/` → redirects to `/v2`
- `/v1` → original version
- `/v2` → current version
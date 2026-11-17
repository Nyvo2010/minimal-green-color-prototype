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

Two main greens (`#2D775B`, `#68AD90`) with three accents (`#A7C790`, `#FCDCF4`, `#DAF6FD`) in roughly equal visual proportion.

```
base: #2D775B; inset: -10%; filter: blur(10px) contrast(1.12)

/* Main dark - large, deep */
radial-gradient(28% 32% at 15% 20%, #2D775B 0%, transparent 75%)
radial-gradient(22% 26% at 85% 80%, #2D775B 0%, transparent 75%)

/* Main light - medium */
radial-gradient(20% 24% at 75% 15%, #68AD90 0%, transparent 70%)
radial-gradient(18% 22% at 25% 85%, #68AD90 0%, transparent 70%)

/* Accent green - medium */
radial-gradient(16% 20% at 45% 10%, #A7C790 0%, transparent 65%)
radial-gradient(14% 18% at 55% 90%, #A7C790 0%, transparent 65%)

/* Accent pink - medium */
radial-gradient(15% 18% at 80% 40%, #FCDCF4 0%, transparent 65%)
radial-gradient(13% 16% at 20% 60%, #FCDCF4 0%, transparent 65%)

/* Accent cyan - medium */
radial-gradient(14% 17% at 10% 35%, #DAF6FD 0%, transparent 65%)
radial-gradient(16% 20% at 90% 65%, #DAF6FD 0%, transparent 65%)

/* Connective linear gradient between main colors */
linear-gradient(135deg, transparent 30%, #68AD90 50%, transparent 70%)

/* Ink depth corners */
radial-gradient(40% 45% at 95% 95%, rgba(18,18,19,.7) 0%, transparent 70%)
radial-gradient(35% 40% at 5% 95%, rgba(18,18,19,.55) 0%, transparent 70%)
```

Overlay two desaturated `feTurbulence` noise tiles (260px, 520px), `mix-blend-mode: overlay`, opacity `0.55`.

## v1 Gradient (Archived)

Green base with moss light, ink depth and small warm flecks.

```
base: #2C5F2D; inset: -10%; filter: blur(10px) contrast(1.12)

radial-gradient( 9% 12% at 74%  9%, rgba(189,169,242,.85), transparent 100%)
radial-gradient(10% 14% at 92% 27%, rgba(246,162, 94,.95), transparent 100%)
radial-gradient(15% 20% at 84% 17%, rgba(244,169,196,.95), transparent 100%)
linear-gradient(115deg, transparent 28%, rgba(151,188,98,.5) 42%, transparent 58%)
radial-gradient(38% 45% at 16% 14%, rgba(151,188,98,.95), transparent 70%)
radial-gradient(34% 40% at 60% 38%, rgba(151,188,98,.35), transparent 70%)
radial-gradient(45% 50% at 88% 94%, rgba( 18, 18, 19,.9), transparent 72%)
radial-gradient(40% 40% at  6% 96%, rgba( 18, 18, 19,.7), transparent 72%)
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
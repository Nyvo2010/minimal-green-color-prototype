# Design spec

Colour, type and layout rules for this palette.

---

## Colour

| Token | Hex | Role |
|---|---|---|
| Ink | `#121213` | Dark background; also a box on light |
| Ink box | `#1F1F21` | Boxes on dark |
| Paper | `#FAF9F6` | Light background (warm off-white) |
| Paper box | `#F0EFE9` | Boxes on light; also a box on dark |
| Forest | `#2D6B44` | Green, dark — primary accent |
| Moss | `#80B579` | Green, light — secondary accent |

Three splash colours, used **only inside gradients** — never as fills, text or UI:

| Accent green | Accent pink | Accent orange |
|---|---|---|
| `#9DC672` | `#F5B3BE` | `#F7B380` |

Pink and orange render at 75% opacity in the gradient; green sits at full strength.

Text hierarchy comes from opacity, not extra greys: secondary `60–70%`, labels `50%`, placeholders `40%`.

### Light / dark

Same six colours, roles swap.

| | Light | Dark |
|---|---|---|
| Background | Paper | Ink |
| Box | Paper box | Ink box |
| Primary fill | Forest on Paper | Moss on Ink |
| Secondary fill | Moss on Ink | Forest on Paper |
| Inverted box | Ink box | Paper box |

---

## Type

- **Display: Newsreader** — `opsz 96`, weight `430`, tracking `-0.02em`. Italic for accent phrases.
- **Interface: Inter** — weights `400` and `500` only.

| Use | Size |
|---|---|
| Page title | 48px → 60px at `sm` |
| Section heading | 36–48px, tight leading |
| Statement | 30px, tight leading |
| Small headline | 24px |
| Stat number | 72px, leading-none |
| Body | 14px |
| Label | 12px, uppercase, tracking `.14em`, 50% opacity |
| Tag | 12px, weight 500 |

Serif lines usually pair a full-opacity phrase with a `50–60%` continuation.

---

## Radii

| Element | Radius |
|---|---|
| Cards, panels | 24px |
| Inner cards, swatches | 16px |
| Inputs, list rows | 12px |
| Checkbox | 6px |
| Buttons, tags, toggles, tabs | Full pill |
| Gradient panels | 16–24px |

## Spacing

| Context | Value |
|---|---|
| Container | 1152px wide, 24px padding → 40px at `sm` |
| Page top / bottom | 64px / 80px |
| Section gap | 48–56px |
| Card padding | 28px; feature panels 24px → 48px at `sm` |
| Grid gap | 12–16px |
| Button | 24px × 12px |
| Tag | 12px × 6px |
| Input | 16px × 14px |

---

## Gradient

A grainy organic mesh in the two greens, with three soft splashes of colour. This is the signature visual — keep it to large panels, never small chips.

Base `Forest`, layer inset `-15%`, `blur(2px) contrast(1.2)`, grain overlay at `0.35` opacity (`overlay` blend, two `feTurbulence` tiles at 260px and 520px).

```
base: #2D6B44

/* Forest — deep anchors */
radial-gradient(ellipse 60% 55% at 15% 25%, #2D6B44 35%, transparent 75%)
radial-gradient(ellipse 55% 50% at 85% 75%, #2D6B44 30%, transparent 72%)

/* Moss — sweeping diagonal plus organic masses */
linear-gradient(118deg, transparent 25%, #80B579 42%, #80B579 58%, transparent 75%)
radial-gradient(ellipse 40% 46% at 20% 22%, #80B579 42%, transparent 72%)
radial-gradient(ellipse 34% 40% at 55% 45%, #80B579 35%, transparent 68%)
radial-gradient(ellipse 28% 32% at 70% 62%, #80B579 30%, transparent 65%)

/* Pink splash — upper right */
radial-gradient(ellipse 32% 28% at 78% 22%, #F5B3BEBF 40%, transparent 68%)
radial-gradient(ellipse 22% 18% at 62% 36%, #F5B3BEBF 30%, transparent 60%)
radial-gradient(ellipse 16% 20% at 68% 48%, #F5B3BEBF 25%, transparent 58%)

/* Orange splash — lower left */
radial-gradient(ellipse 36% 32% at 22% 76%, #F7B380BF 42%, transparent 70%)
radial-gradient(ellipse 26% 22% at 38% 62%, #F7B380BF 35%, transparent 62%)
radial-gradient(ellipse 20% 18% at 44% 56%, #F7B380BF 28%, transparent 58%)

/* Green splash — centre */
radial-gradient(ellipse 30% 24% at 50% 48%, #9DC672 45%, transparent 68%)
radial-gradient(ellipse 22% 18% at 44% 34%, #9DC672 35%, transparent 62%)
radial-gradient(ellipse 18% 20% at 56% 56%, #9DC672 30%, transparent 60%)

/* Edge convergence, top */
conic-gradient(from 88deg at 50% -8%,
  transparent 0deg, #80B579 12deg, #F5B3BEBF 48deg,
  #9DC672 78deg, #2D6B44 102deg, transparent 125deg)

/* Ink anchors — corners */
radial-gradient(ellipse 55% 48% at 98% 98%, rgba(18,18,19,.95), transparent 68%)
radial-gradient(ellipse 50% 42% at 2% 98%, rgba(18,18,19,.9), transparent 70%)
radial-gradient(ellipse 40% 32% at 96% 4%, rgba(18,18,19,.5), transparent 60%)
radial-gradient(ellipse 34% 28% at 4% 4%, rgba(18,18,19,.45), transparent 58%)
```

Green dominates; splashes stay soft and edge-fading. Cards floating on the gradient use the only shadow in the system:

```
0 30px 60px -20px rgba(18,18,19,.4), 0 8px 20px -8px rgba(18,18,19,.15)
```

---

## Components

- **Buttons** — pill, 14px / weight 500, hover `opacity 90%` (text link `70%`). Four fills: primary (forest), secondary (moss), surface (paper/ink), inverted.
- **Tags** — same four fills, 12px.
- **Inputs** — surface-coloured, 12px radius, no border, focus ring `2px` in the accent green.
- **Toggle** — 44 × 24px track, 20px knob.
- **Checkbox** — 24px, accent fill with check.
- **Tabs** — pill track, accent pill on the active segment.
- **Progress** — 8px pill track, accent fill, 500ms transition.

---

## Tokens

```css
:root {
  --color-ink: #121213;
  --color-ink-box: #1f1f21;
  --color-paper: #faf9f6;
  --color-paper-box: #f0efe9;
  --color-forest: #2d6b44;
  --color-moss: #80b579;

  --grad-base: #2d6b44;
  --grad-accent-green: #9dc672;
  --grad-accent-pink: #f5b3be;
  --grad-accent-orange: #f7b380;

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

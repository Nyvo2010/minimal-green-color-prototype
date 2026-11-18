import { useState, useEffect, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, NavLink } from "react-router-dom";

/* ---------------- Spec data ---------------- */

const v1Colors = [
  { name: "Ink", role: "Dark bg · or box on white", hex: "#121213", cls: "bg-ink text-paper" },
  { name: "Ink box", role: "Box on light", hex: "#1F1F21", cls: "bg-ink-box text-paper" },
  { name: "White", role: "Light bg", hex: "#FFFFFF", cls: "bg-paper text-ink ring-1 ring-ink/10" },
  { name: "Paper box", role: "Box on light · or on dark", hex: "#F2F2F3", cls: "bg-paper-box text-ink" },
  { name: "Forest", role: "Green, dark", hex: "#2C5F2D", cls: "bg-forest text-paper" },
  { name: "Moss", role: "Green, light", hex: "#97BC62", cls: "bg-moss text-ink" },
];

const v2Colors = [
  { name: "Ink", role: "Dark bg · or box on white", hex: "#121213", cls: "bg-ink text-paper" },
  { name: "Ink box", role: "Box on light", hex: "#1F1F21", cls: "bg-ink-box text-paper" },
  { name: "Paper", role: "Light bg (warm)", hex: "#FAF9F6", cls: "bg-paper text-ink ring-1 ring-ink/10" },
  { name: "Paper box", role: "Box on light · or on dark", hex: "#F0EFE9", cls: "bg-paper-box text-ink" },
  { name: "Forest", role: "Green, dark (v2)", hex: "#2D775B", cls: "bg-forest text-paper" },
  { name: "Moss", role: "Green, light (v2)", hex: "#68AD90", cls: "bg-moss text-ink" },
];

const v1Splashes = [
  { name: "Pink", hex: "#F4A9C4" },
  { name: "Orange", hex: "#F6A25E" },
  { name: "Lilac", hex: "#BDA9F2" },
  { name: "Sky", hex: "#A5D8F0" },
];

const v2Splashes = [
  { name: "Accent Green", hex: "#A7C790" },
  { name: "Accent Pink", hex: "#FCDCF4" },
  { name: "Accent Cyan", hex: "#DAF6FD" },
];

/* ---------------- Helpers ---------------- */

function Gradient({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`grad ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs uppercase tracking-[0.14em] opacity-50">{children}</p>;
}

function DimLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`pointer-events-none whitespace-nowrap font-mono text-[9px] uppercase leading-none tracking-[0.08em] text-forest/70 ${className}`}
    >
      {children}
    </span>
  );
}

function PadInset({ inset = "inset-6", rounded = "rounded-2xl" }: { inset?: string; rounded?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${inset} ${rounded} border border-dashed border-forest/25`}
    />
  );
}

/* ---------------- Bento schematic ---------------- */

function BentoSchematic() {
  return (
    <div className="mt-12">
      <Label>Layout · bento & spacing</Label>
      <div className="rounded-3xl bg-paper-box p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-[1fr_1rem_1fr]">
          <div className="hidden sm:block" aria-hidden />
          <div className="relative hidden h-6 items-end justify-center sm:flex">
            <DimLabel className="absolute top-0 left-1/2 -translate-x-1/2">gap 16</DimLabel>
            <div className="h-2.5 w-full border-x border-b border-forest/40" />
          </div>
          <div className="hidden sm:block" aria-hidden />

          {/* Card with a nested box */}
          <div className="relative rounded-3xl bg-paper p-7">
            <PadInset inset="inset-7" />

            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-6 w-6 rounded-tl-3xl border-l border-t border-forest/40"
            />
            <DimLabel className="absolute left-7 top-3.5 -translate-y-1/2">r 24</DimLabel>

            <div className="pointer-events-none absolute left-1/2 top-0 flex h-7 -translate-x-1/2 items-center">
              <span className="relative h-7 w-px bg-forest/40">
                <span className="absolute left-1/2 top-0 h-px w-1.5 -translate-x-1/2 bg-forest/40" />
                <span className="absolute left-1/2 bottom-0 h-px w-1.5 -translate-x-1/2 bg-forest/40" />
              </span>
              <DimLabel className="ml-1.5">pad 28</DimLabel>
            </div>

            <div className="relative">
              <div className="relative rounded-xl bg-paper-box p-3">
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 rounded-bl-xl border-b border-l border-forest/40"
                />
                <DimLabel className="absolute bottom-1 left-4">r 12</DimLabel>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium">Sessions</span>
                  <span className="serif text-2xl leading-none">1.2k</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden />

          {/* Accent card */}
          <div className="relative rounded-3xl bg-forest p-7 text-paper">
            <p className="serif text-3xl leading-tight">
              Green leads. <span className="opacity-60">White holds it down.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI preview (rendered once per mode) ---------------- */

function Preview({ mode }: { mode: "light" | "dark" }) {
  const dark = mode === "dark";
  const [on, setOn] = useState(true);
  const [tab, setTab] = useState("Day");
  const [check, setCheck] = useState(true);

  const surface = dark ? "bg-ink text-paper" : "bg-paper text-ink";
  const box = dark ? "bg-ink-box" : "bg-paper-box";
  const inv = dark ? "bg-paper-box text-ink" : "bg-ink-box text-paper";
  const accent = dark ? "bg-moss text-ink" : "bg-forest text-paper";
  const alt = dark ? "bg-forest text-paper" : "bg-moss text-ink";
  const accentText = dark ? "text-moss" : "text-forest";
  const accentBg = dark ? "bg-moss" : "bg-forest";
  const knob = dark ? "bg-ink" : "bg-paper";
  const knobText = dark ? "text-ink" : "text-paper";
  const ring = dark ? "focus:ring-moss" : "focus:ring-forest";
  const invAccent = dark ? "bg-forest text-paper" : "bg-moss text-ink";
  const invAccentBg = dark ? "bg-forest" : "bg-moss";

  return (
    <div className={`${surface} px-6 py-16 sm:px-10`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="serif text-5xl sm:text-6xl">{dark ? "Dark mode preview" : "Light mode preview"}</h2>
          <p className="text-sm opacity-50">
            {dark ? "Ink bg · ink box or paper box" : "White bg · paper box or ink box"}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* Buttons + tags */}
          <div className={`${box} rounded-3xl p-7 lg:col-span-5`}>
            <Label>Buttons</Label>
            <div className="flex flex-wrap gap-3">
              <button className={`${accent} rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-90`}>
                Primary
              </button>
              <button className={`${alt} rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-90`}>
                Secondary
              </button>
              <button className={`${surface} rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-80`}>
                Neutral
              </button>
              <button className={`${inv} rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-90`}>
                Inverted
              </button>
              <button className={`${accentText} rounded-full px-4 py-3 text-sm font-medium transition hover:opacity-70`}>
                Text link
              </button>
            </div>

            <div className="mt-8">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className={`${accent} rounded-full px-3 py-1.5`}>Live</span>
                <span className={`${alt} rounded-full px-3 py-1.5`}>Approved</span>
                <span className={`${surface} rounded-full px-3 py-1.5`}>Draft</span>
                <span className={`${inv} rounded-full px-3 py-1.5`}>Archived</span>
              </div>
            </div>
          </div>

          {/* Form controls */}
          <div className={`${box} rounded-3xl p-7 lg:col-span-4`}>
            <Label>Inputs</Label>
            <div className="space-y-3">
              <input
                placeholder="Name"
                className={`${surface} w-full rounded-xl px-4 py-3.5 text-sm outline-none placeholder:opacity-40 focus:ring-2 ${ring}`}
              />
              <input
                placeholder="Email"
                className={`${surface} w-full rounded-xl px-4 py-3.5 text-sm outline-none placeholder:opacity-40 focus:ring-2 ${ring}`}
              />
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Notifications</span>
                <button
                  onClick={() => setOn(!on)}
                  aria-pressed={on}
                  className={`relative h-6 w-11 rounded-full transition ${on ? accentBg : surface}`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full transition-all ${
                      on ? `left-[22px] ${knob}` : `left-0.5 ${accentBg}`}
                    }`}
                  />
                </button>
              </div>
              <button onClick={() => setCheck(!check)} className="flex w-full items-center justify-between">
                <span>Remember me</span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md transition ${
                    check ? accentBg : surface
                  }`}
                >
                  {check && (
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 ${knobText}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Tabs + progress */}
          <div className={`${box} rounded-3xl p-7 lg:col-span-3`}>
            <Label>Tabs</Label>
            <div className={`${surface} flex gap-1 rounded-full p-1`}>
              {["Day", "Week"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 rounded-full px-3 py-2 text-sm transition ${
                    tab === t ? accent : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Label>Progress</Label>
              <div className={`${surface} flex h-2 overflow-hidden rounded-full`}>
                <div className={`${accentBg} h-full ${tab === "Day" ? "w-2/5" : "w-3/4"} transition-all duration-500`} />
              </div>
              <p className="mt-3 text-sm opacity-60">{tab === "Day" ? "40%" : "75%"} complete</p>
            </div>
          </div>

          {/* Stat cards: inverted, forest, moss */}
          {[
            { t: "Active", v: "24", c: inv },
            { t: "Completed", v: "128", c: "bg-forest text-paper" },
            { t: "In review", v: "7", c: "bg-moss text-ink" },
          ].map((s) => (
            <div key={s.t} className={`${s.c} rounded-3xl p-7 lg:col-span-4`}>
              <p className="text-sm opacity-60">{s.t}</p>
              <p className="serif mt-8 text-7xl leading-none">{s.v}</p>
            </div>
          ))}

          {/* Signature: card floating on grainy gradient */}
          <Gradient className="rounded-3xl lg:col-span-7">
            <div className="p-6 sm:p-12">
              <div className={`${dark ? "bg-ink text-paper" : "bg-paper text-ink"} soft-shadow rounded-2xl p-6`}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Unified inbox</span>
                  <span className={`${accent} rounded-full px-2.5 py-1 text-xs font-medium`}>3 new</span>
                </div>
                <p className="serif mt-8 text-4xl leading-tight">Good morning.</p>
                <p className="mt-1 text-sm opacity-60">Everything in one place.</p>
                <div className="mt-6 space-y-2">
                  {[
                    ["Email", "2,648"],
                    ["Voice", "174"],
                    ["Website", "143"],
                  ].map(([k, v]) => (
                    <div key={k} className={`${box} flex items-center justify-between rounded-xl px-4 py-3 text-sm`}>
                      <span>{k}</span>
                      <span className="opacity-60">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Gradient>

          {/* Toast + actions, on an inverted box */}
          <div className={`${inv} flex flex-col justify-between rounded-3xl p-7 lg:col-span-5`}>
            <Label>Inverted box</Label>
            <div className="flex items-center gap-3 text-sm">
              <span className={`${invAccent} flex h-9 w-9 shrink-0 items-center justify-center rounded-full`}>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <div>
                <p className="font-medium">Saved</p>
                <p className="opacity-60">Your changes are live.</p>
              </div>
            </div>
            <p className="serif mt-10 text-3xl leading-tight">
              {dark ? "Paper boxes" : "Ink boxes"} <span className="opacity-50">work on {dark ? "ink" : "white"} too.</span>
            </p>
            <div className="mt-8 flex gap-2">
              <button className={`${invAccent} flex-1 rounded-full py-3 text-sm font-medium transition hover:opacity-90`}>
                Confirm
              </button>
              <button className={`${surface} flex-1 rounded-full py-3 text-sm font-medium transition hover:opacity-80`}>
                Cancel
              </button>
            </div>
          </div>

          {/* Plain text cards */}
          <div className={`${box} flex min-h-64 flex-col justify-between rounded-3xl p-7 lg:col-span-6`}>
            <p className="serif text-3xl leading-tight">
              Guide. <span className="opacity-50">Handhold shows what to do, when it matters most.</span>
            </p>
            <span className={`h-2 w-2 rounded-full ${accentBg}`} />
          </div>

          <div className={`${inv} flex min-h-64 flex-col justify-between rounded-3xl p-7 lg:col-span-6`}>
            <p className="serif text-3xl leading-tight">
              Learn. <span className="opacity-50">Understand the product, not just the manual.</span>
            </p>
            <span className={`h-2 w-2 rounded-full ${invAccentBg}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Version Layout ---------------- */

function VersionLayout({ version, children }: { version: "v1" | "v2"; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-version", version);
  }, [version]);

  return <div className="bg-paper text-ink min-h-screen">{children}</div>;
}

/* ---------------- Spec Page ---------------- */

function SpecPage({ version }: { version: "v1" | "v2" }) {
  const colors = version === "v1" ? v1Colors : v2Colors;
  const splashes = version === "v1" ? v1Splashes : v2Splashes;
  const versionLabel = version === "v1" ? "v1 (Original)" : "v2 (Current)";

  return (
    <VersionLayout version={version}>
      <header className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="serif text-5xl sm:text-6xl">Palette & type</h1>
          <nav className="flex gap-4">
            <NavLink to="/v1" className="px-4 py-2 rounded-full text-sm font-medium transition hover:opacity-70" end>
              v1
            </NavLink>
            <NavLink to="/v2" className="px-4 py-2 rounded-full text-sm font-medium transition hover:opacity-70" end>
              v2
            </NavLink>
          </nav>
        </div>

        <p className="mb-8 text-sm opacity-50">Viewing: {versionLabel}</p>

        <div className="mt-14">
          <Label>Colours</Label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {colors.map((c) => (
              <div key={c.hex} className={`${c.cls} flex h-44 flex-col justify-end rounded-2xl p-4`}>
                <p className="text-sm font-medium">{c.name}</p>
                <p className="text-xs leading-snug opacity-60">{c.role}</p>
                <p className="mt-1 font-mono text-xs opacity-60">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-paper-box p-7">
            <Label>Display · Newsreader</Label>
            <p className="serif text-6xl leading-none">
              Aa <span className="italic text-forest">Aa</span>
            </p>
            <p className="serif mt-4 text-2xl opacity-70">Headings, numbers, quiet statements.</p>
          </div>
          <div className="rounded-2xl bg-paper-box p-7">
            <Label>Interface · Inter</Label>
            <p className="text-6xl font-medium leading-none tracking-tight">
              Aa <span className="font-normal opacity-50">Aa</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Body text, buttons, labels and everything else in the interface. Regular and medium weights only.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Label>Gradients</Label>
          <Gradient className="h-36 rounded-2xl" />
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="opacity-50">Green and white lead. Splashes only:</span>
            {splashes.map((s) => (
              <span key={s.hex} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: s.hex }} />
                <span className="opacity-70">
                  {s.name} <span className="font-mono opacity-60">{s.hex}</span>
                </span>
              </span>
            ))}
          </div>
        </div>

        <BentoSchematic />
      </header>

      <Preview mode="light" />
      <Preview mode="dark" />
    </VersionLayout>
  );
}

/* ---------------- Landing Page ---------------- */

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-redirect to v2 on root (handle both with and without basename)
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      navigate("/v2", { replace: true });
    }
  }, [location.pathname, navigate]);

  // Render nothing while redirecting
  if (location.pathname === "/" || location.pathname === "") {
    return null;
  }

  return (
    <div className="bg-paper text-ink min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="serif text-5xl sm:text-6xl mb-4">Colour Palette Test Site</h1>
        <p className="mb-8 opacity-60">Select a version to view the design system</p>
        <div className="flex flex-col gap-4">
          <NavLink to="/v2" className="bg-forest text-paper px-8 py-4 rounded-full font-medium transition hover:opacity-90">
            v2 — Current (muted greens, warm paper)
          </NavLink>
          <NavLink to="/v1" className="bg-paper-box text-ink px-8 py-4 rounded-full font-medium transition hover:opacity-70 border border-ink/10">
            v1 — Original (bright greens, pure white)
          </NavLink>
        </div>
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */

const BASENAME = import.meta.env.BASE_URL || "/";

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/v1" element={<SpecPage version="v1" />} />
        <Route path="/v2" element={<SpecPage version="v2" />} />
        <Route path="*" element={<div className="bg-paper text-ink min-h-screen flex items-center justify-center"><h1 className="serif text-4xl">404 - Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}
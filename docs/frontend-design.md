# v3s Frontend Design — Light, Minimal, Cozy Theme

## Purpose
This design doc defines a light, pleasing, minimalistic UI theme with soft, cozy/fuzzy textures and subtle depth cues for the v3s frontend. It gives design tokens, component guidance, and implementation notes so developers and designers can deliver a consistent, warm product surface that complements realtime 3D editing.

## Design Goals
- Light and airy: prioritize a bright, high-contrast base while keeping visual noise low.
- Minimal: reduce chrome and focus on the scene canvas; UI controls are lightweight and purposeful.
- Cozy/fuzzy texture: use soft highlights, gentle blur, and tactile micro-textures (paper, felt-like) in subtle areas — not on the canvas.
- Calm motion: slow, pleasing micro-interactions and easing to feel relaxed and deliberate.
- Accessibility: maintain sufficient contrast, keyboard focus states, and scalable typography.

## Theme Overview
- Mood: warm neutrals, muted pastels, soft shadows, and slight grain.
- Primary surface: an off-white with a warm tint for a cozy feel.
- Accent: desaturated pastel colors for selection, presence, and CTAs.
- Texture usage: subtle grain overlays and soft gradients applied sparingly to panels and overlays.

## Color Tokens (CSS variables)
Use CSS variables as the canonical tokens. Example values (adjust for brand):

```
:root {
  --bg-100: #fbfaf9; /* primary app background (warm off-white) */
  --surface-100: #ffffff; /* primary panel */
  --surface-90: #fbf8f6; /* slightly tinted surface */
  --muted-1: #e9e6e2; /* dividers, subtle borders */
  --text-900: #222222; /* primary text */
  --text-600: #5b5b5b; /* secondary text */
  --accent-100: #b6e3d8; /* soft mint */
  --accent-200: #ffd6c3; /* warm coral */
  --accent-300: #d8d0ff; /* soft lavender */
  --presence-blue: #8fb7ff; /* presence cursor */
  --presence-orange: #ffb58f; /* alternate presence */
  --shadow-1: 0 6px 18px rgba(33,33,33,0.06);
  --shadow-2: 0 12px 34px rgba(33,33,33,0.08);
  --grain-opacity: 0.03; /* overlay grain intensity */
}
```

Notes:
- Keep accents desaturated and pastel to avoid visual competition with colored 3D content.
- Provide multiple presence colors; map them to users consistently.

## Typography
- Scale should be simple and accessible. Example token set:
  - --font-base: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  - --type-xxl: 28px / 36px
  - --type-xl: 20px / 28px
  - --type-md: 16px / 24px
  - --type-sm: 14px / 20px
  - --type-xs: 12px / 16px

Guidelines:
- Use generous line-height for readability.
- Use weight contrast for hierarchy (400 body, 600 headings).

## Spacing & Layout
- Base unit: 8px. Use multiples for consistent rhythm.
- Shell layout: minimal top bar (48px), optional left rail (280px), flexible center canvas.
- Panels: 16–20px internal padding; small controls use 8px spacing.

## Elevation & Shadows
- Prefer soft, diffuse shadows rather than sharp strokes.
- Use `--shadow-1` for floating panels and `--shadow-2` for modals and strong focus surfaces.
- Keep elevation subtle to preserve minimalism.

## Texture & Grain (Cozy / Fuzzy Ideas)
Textures should be extremely subtle and used sparingly to preserve clarity.

- Grain overlay: a very low-opacity, high-frequency grain PNG or SVG filter applied to large panels (not the canvas). Use blend mode `overlay` or `soft-light` with `--grain-opacity` around 0.02-0.05.
- Soft border: instead of 1px sharp borders, prefer 1px soft borders using `box-shadow` inset with low opacity, or a 1px border with a slightly lighter color than the surface.
- Felt/paper accent: for side panels, add a very subtle linear-gradient (same hue, 1–2% difference) to produce depth.
- Rounded corners: 8px default radius for panels; 6px for smaller chips.

Example CSS snippet for a cozy panel:

```
.panel {
  background: linear-gradient(180deg, var(--surface-100), var(--surface-90));
  box-shadow: var(--shadow-1);
  border-radius: 8px;
  position: relative;
}
.panel::after {
  content: '';
  pointer-events: none;
  position: absolute; inset: 0;
  background-image: url('/assets/grain-small.png');
  opacity: var(--grain-opacity);
  mix-blend-mode: overlay;
  border-radius: inherit;
}
```

## Controls & Components
Design small, unobtrusive controls that fade into the periphery of the canvas.

- Top Bar:
  - Height: 48px
  - Minimal items: app name, scene switcher, primary actions in soft accent buttons.
  - Background: transparent or `--surface-100` with subtle blur (backdrop-filter) to maintain focus on the canvas.

- Left Rail (optional):
  - Width: 280px
  - Contains object tree, search, and quick actions.
  - Use soft dividers and subtle hover backgrounds (semi-transparent accent overlay).

- Floating Controls (scene tools/gizmos):
  - Minimal icon-only buttons with circular hit targets (40px). Use low-contrast background and elevate with `--shadow-1`.
  - Active state: pastel fill + subtle inset glow.

- Buttons:
  - Primary: pastel accent background, medium weight text.
  - Secondary: outline or ghost style with soft hover.

- Chips & Tags:
  - Rounded, low-contrast background, small grain if used on persistent lists.

## Presence & Selection UI
- Cursor indicators: small, soft circular cursors with a halo and user initials; color mapped to presence token.
- Selections: use a soft pastel outline with low-opacity fill; avoid harsh full-color overlays that occlude scene content.

## Micro-interactions
- Easing: use gentle cubic-bezier (e.g., cubic-bezier(.2,.9,.2,1)) for show/hide and tool transitions.
- Duration: 160–260ms for most interactions; 320–420ms for larger layout changes.
- Hover/active: soft scale (0.98–1.03) with shadow adjustments for tactile feedback.

## Accessibility
- Contrast: ensure text on backgrounds meets AA (minimum 4.5:1 for body text, 3:1 for larger text where possible). Offer an accessible variant if default tokens fall short.
- Keyboard: all UI controls reachable with keyboard; visible focus ring with 2px outline and slightly darker warm tint.
- Motion: prefer reduced-motion media query respect.

## Implementation Notes
- Provide tokens in a single source of truth (`src/styles/tokens.css` or a Tailwind theme). Example using CSS variables is shown above.
- Prefer CSS variables over hard-coded colors to allow runtime theming and presence color assignment.
- Keep grain/texture assets small and optionally toggleable by user (preference for performance).
- For React components, create `ThemeProvider` that exposes tokens and helper utilities (presence color picker, contrast checker).

## Example React/CSS integration

1. `src/styles/tokens.css` — define `:root` tokens.
2. `src/components/Panel.tsx` — panel wrapper that applies `.panel` styles and respects `ThemeProvider` overrides.
3. `src/components/CursorOverlay.tsx` — render presence cursors using `position: absolute` and CSS transitions.

## Design Assets & Figma
- Provide a small Figma file with color tokens, components (TopBar, Panel, Button, Chip, Cursor), and a grain asset.
- Export grain as a 1x PNG or SVG pattern with recommended opacity.

## Example Token Map (JSON)
Provide this for design systems and automation:

```
{
  "bg": "#fbfaf9",
  "surface": "#ffffff",
  "muted": "#e9e6e2",
  "text": "#222222",
  "accent": { "mint": "#b6e3d8", "coral": "#ffd6c3", "lavender": "#d8d0ff" }
}
```

## Implementation Checklist
- [x] Define CSS tokens
- [x] Create `Panel` styles and grain overlay
- [ ] Add Figma kit and export grain asset
- [ ] Implement `ThemeProvider` in React
- [ ] Wire presence colors to user identity
- [ ] Accessibility audit and contrast adjustments

## Example UX Patterns
- Pending operation indicator: small warm dot in top-right of object node.
- Offline/reconnect toast: soft modal with `--accent-200` border and a gentle pulse animation.

## Where to Apply Textures
- Panels and overlays: apply grain/soft gradient.
- Buttons and small controls: prefer plain fills to avoid visual clutter.
- Canvas: avoid textures — keep the 3D viewport clean and accurate.

## Summary
This theme favors softness and calm: high readability, minimal chrome, desaturated pastels for accents, and subtle tactile textures. Tokens and examples above should be used as the starting point; iterate after visual validation and user testing.

---
If you'd like, I can:
- Add the token file `src/styles/tokens.css` with these variables.
- Produce a small Figma starter file (JSON/figma schema) or a basic CSS implementation and example components.

# Design System

A collection of accessible, themeable React components built with Radix UI and Tailwind CSS v4.

## Installation

### Using the CLI

```bash
npx design-system@latest init
npx design-system@latest add Button
npx design-system@latest list
```

Supports npm, pnpm, yarn, and bun.

### Manual Installation

```bash
npm install design-system lucide-react
```

### Peer Dependencies

| Package | Version |
|---------|---------|
| `react` | ^18.0.0 \|\| ^19.0.0 |
| `react-dom` | ^18.0.0 \|\| ^19.0.0 |
| `lucide-react` | ^1.0.0 |

The following runtime dependencies are bundled with the library and installed automatically:

| Package | Purpose |
|---------|---------|
| `@radix-ui/*` | Accessible UI primitives |
| `class-variance-authority` | Component variant API |
| `tailwind-merge` | Class name merging |
| `clsx` | Conditional classes |

## Usage

### React (Vite, CRA, etc.)

```tsx
import { Button } from 'design-system'
import 'design-system/style.css'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Next.js (App Router)

```tsx
// app/layout.tsx
import 'design-system/style.css'

export default function RootLayout({ children }) {
  return <html>{children}</html>
}
```

```tsx
// app/page.tsx
'use client'

import { Button } from 'design-system'

export default function Page() {
  return <Button>Hello</Button>
}
```

### Next.js (Pages Router)

```tsx
// pages/_app.tsx
import 'design-system/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## Components

All 63 components:

| Component | Radix Primitive |
|-----------|----------------|
| Accordion | `@radix-ui/react-accordion` |
| Alert | — |
| AlertDialog | `@radix-ui/react-alert-dialog` |
| AspectRatio | `@radix-ui/react-aspect-ratio` |
| Attachment | — |
| Avatar | `@radix-ui/react-avatar` |
| Badge | — |
| Breadcrumb | — |
| Bubble | — |
| Button | — |
| ButtonGroup | — |
| Calendar | — |
| Card | — |
| Carousel | — |
| Chart | — |
| Checkbox | `@radix-ui/react-checkbox` |
| Collapsible | `@radix-ui/react-collapsible` |
| Combobox | — |
| Command | — |
| ContextMenu | `@radix-ui/react-context-menu` |
| DataTable | — |
| DatePicker | — |
| Dialog | `@radix-ui/react-dialog` |
| Direction | — |
| DropdownMenu | `@radix-ui/react-dropdown-menu` |
| Empty | — |
| Field | — |
| HoverCard | `@radix-ui/react-hover-card` |
| Input | — |
| InputGroup | — |
| InputOTP | — |
| Item | — |
| Kbd | — |
| Label | — |
| Marker | — |
| Menubar | `@radix-ui/react-menubar` |
| Message | — |
| MessageScroller | — |
| NativeSelect | — |
| NavigationMenu | `@radix-ui/react-navigation-menu` |
| Pagination | — |
| Popover | `@radix-ui/react-popover` |
| Progress | `@radix-ui/react-progress` |
| RadioGroup | `@radix-ui/react-radio-group` |
| Resizable | — |
| ScrollArea | `@radix-ui/react-scroll-area` |
| Select | `@radix-ui/react-select` |
| Separator | `@radix-ui/react-separator` |
| Sheet | `@radix-ui/react-dialog` |
| Sidebar | — |
| Skeleton | — |
| Slider | `@radix-ui/react-slider` |
| Sonner | — |
| Spinner | — |
| Switch | `@radix-ui/react-switch` |
| Table | — |
| Tabs | `@radix-ui/react-tabs` |
| Textarea | — |
| Toast | `@radix-ui/react-toast` |
| Toggle | `@radix-ui/react-toggle` |
| ToggleGroup | `@radix-ui/react-toggle-group` |
| Tooltip | `@radix-ui/react-tooltip` |
| Typography | — |

## Themes

The design system includes 10 built-in themes:

| Theme | Hue |
|-------|-----|
| Default | Blue |
| Ocean | Teal/Cyan |
| Forest | Green |
| Sunset | Orange |
| Rose | Pink |
| Violet | Purple |
| Slate | Cool Gray |
| Amber | Gold |
| Emerald | Rich Green |
| Ruby | Red |

Apply a theme by adding a class to `<html>`:

```html
<html class="theme-ocean">
```

Or use the Theme Drawer in the documentation site to browse and apply themes interactively. A Custom mode lets you override every CSS variable including colors, fonts, and border radius.

Themes are persisted in `localStorage` under the `ds-theme` key.

## Dark Mode

Add the `.dark` class to your root `<html>` element:

```tsx
document.documentElement.classList.add('dark')
```

Dark mode state is persisted in `localStorage` under the `ds-theme-dark` key.

## CSS Custom Properties

All components use CSS custom properties for theming. The following variables can be overridden:

```css
:root {
  --background: oklch(0.9818 0.0054 95.0986);
  --foreground: oklch(0.3438 0.0269 95.7226);
  --primary: oklch(0.6171 0.1375 39.0427);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.9245 0.0138 92.9892);
  --secondary-foreground: oklch(0.4334 0.0177 98.6048);
  --muted: oklch(0.9341 0.0153 90.2390);
  --muted-foreground: oklch(0.6059 0.0075 97.4233);
  --accent: oklch(0.9245 0.0138 92.9892);
  --accent-foreground: oklch(0.2671 0.0196 98.9390);
  --destructive: oklch(0.1908 0.0020 106.5859);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.8847 0.0069 97.3627);
  --input: oklch(0.7621 0.0156 98.3528);
  --ring: oklch(0.6171 0.1375 39.0427);
  --radius: 0.5rem;
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: JetBrains Mono, ui-monospace, monospace;
  --font-serif: Georgia, ui-serif, serif;
}
```

For dark mode, wrap in `.dark`:

```css
.dark {
  --background: oklch(0.2679 0.0036 106.6427);
  --foreground: oklch(0.8074 0.0142 93.0137);
  /* ... */
}
```

## CLI

The CLI tool (`design-system`) provides three commands:

```bash
npx design-system@latest init     # Scaffold config
npx design-system@latest add       # Add components (interactive)
npx design-system@latest list      # List all components
```

## License

MIT
# Design-System

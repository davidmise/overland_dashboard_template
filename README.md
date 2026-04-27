# Overland Fleet Management — Dashboard Template

A production-ready Bootstrap 5 dashboard template built on the Overland brand design system. Zero build step — pure CDN + static files. Drop it into any project.

---

## Quick Start

```bash
# 1. Copy the template folder into your project
cp -r "Overland Dasboard Template/" my-project/

# 2. Open the entry point in a browser (no server required)
open index.html          # macOS
start index.html         # Windows

# 3. Customise tokens for your context
#    Edit: assets/css/overland-tokens.css
```

---

## File Structure

```
Overland Dasboard Template/
├── index.html                      # Main fleet dashboard (entry point)
├── styleguide.html                 # Living HTML style guide for developers
├── README.md                       # This file
│
├── pages/
│   ├── login.html                  # Authentication page
│   ├── table.html                  # Shipments data table
│   ├── form.html                   # New / edit shipment form
│   ├── settings.html               # Account & preference settings
│   └── 404.html                    # Branded error page
│
├── assets/
│   ├── css/
│   │   ├── overland-tokens.css     # All brand design tokens (CSS custom properties)
│   │   ├── overland-light.css      # Light theme Bootstrap variable overrides
│   │   ├── overland-dark.css       # Dark theme overrides ([data-bs-theme="dark"])
│   │   └── overland.css            # All component & layout styles
│   └── js/
│       └── overland.js             # Theme toggle, sidebar, table sort/search
│
└── image/
    └── BrandGuidline/
        ├── overland_logo_digital/  # Full wordmark SVGs, EPS, PNG, JPG
        │   └── SVG/
        │       ├── Logo-01.svg     # Light / white background
        │       ├── Logo-02.svg     # Red background
        │       ├── Logo-03.svg     # Dark / black background (used in sidebar)
        │       └── Logo-04.svg     # Gold background
        └── overland_logo_favico/   # Favicon files (16px, 32px, .ico)
```

---

## CSS Architecture

The CSS is split into four files that must be loaded **in order**:

```html
<link rel="stylesheet" href="assets/css/overland-tokens.css">   <!-- 1. Tokens -->
<link rel="stylesheet" href="assets/css/overland-light.css">    <!-- 2. Light theme -->
<link rel="stylesheet" href="assets/css/overland-dark.css">     <!-- 3. Dark theme -->
<link rel="stylesheet" href="assets/css/overland.css">          <!-- 4. Components -->
```

| File | Purpose |
|------|---------|
| `overland-tokens.css` | Single source of truth — all `--ol-*` custom properties |
| `overland-light.css` | Maps tokens to `--bs-*` vars for `:root,[data-bs-theme="light"]` |
| `overland-dark.css` | Overrides `--ol-*` and `--bs-*` under `[data-bs-theme="dark"]` |
| `overland.css` | All component classes, layout system, responsive rules |

---

## Design Token Reference

### Brand Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--ol-black` | `#000000` | Sidebar background, primary brand |
| `--ol-red` | `#ed1c24` | Primary action colour, Bootstrap `--bs-primary` |
| `--ol-red-dark` | `#c41019` | Hover state for primary |
| `--ol-red-light` | `#fde8e9` | Badge background, alert tint |
| `--ol-gold` | `#fac56e` | Accent, stat cards |
| `--ol-gold-dark` | `#e0a030` | Hover state for gold |
| `--ol-gold-light` | `#fff8ee` | Badge background, alert tint |
| `--ol-gray` | `#7c7b7b` | Neutral / secondary brand |
| `--ol-tan` | `#d8b478` | Warm accent |
| `--ol-orange` | `#f89f1e` | Warning state |
| `--ol-orange-light` | `#fff3e0` | Warning badge / alert tint |
| `--ol-lime` | `#a0b83b` | Success / positive state |
| `--ol-lime-light` | `#eef3d8` | Success badge / alert tint |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--ol-font-brand` | `'Switzer', Helvetica, Arial, sans-serif` | All headings, display text |
| `--ol-font-system` | `Helvetica, Arial, sans-serif` | Body, labels, UI text |
| `--ol-fs-xs` | `0.75rem` | Captions, micro-labels |
| `--ol-fs-sm` | `0.875rem` | Secondary text, form help |
| `--ol-fs-base` | `1rem` | Base body text |
| `--ol-fs-md` | `1.125rem` | Larger body |
| `--ol-fs-lg` | `1.25rem` | Card titles |
| `--ol-fs-xl` | `1.5rem` | Section headings |
| `--ol-fs-2xl` | `1.75rem` | Page titles |
| `--ol-fs-3xl` | `2rem` | H1 / display |
| `--ol-fs-4xl` | `2.5rem` | Hero / large display |
| `--ol-fw-light` | `300` | Light weight |
| `--ol-fw-regular` | `400` | Normal weight |
| `--ol-fw-medium` | `500` | Medium weight |
| `--ol-fw-bold` | `700` | Bold (default headings) |
| `--ol-fw-black` | `900` | Black / heavy weight |

### Spacing (4px base grid)

| Token | Value |
|-------|-------|
| `--ol-space-1` | `4px` |
| `--ol-space-2` | `8px` |
| `--ol-space-3` | `12px` |
| `--ol-space-4` | `16px` |
| `--ol-space-5` | `20px` |
| `--ol-space-6` | `24px` |
| `--ol-space-8` | `32px` |
| `--ol-space-10` | `40px` |
| `--ol-space-12` | `48px` |
| `--ol-space-16` | `64px` |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--ol-sidebar-width` | `260px` | Expanded sidebar width |
| `--ol-sidebar-collapsed-w` | `72px` | Collapsed (icon-only) sidebar |
| `--ol-navbar-height` | `64px` | Top bar height |
| `--ol-logo-min-height` | `40px` | Minimum logo rendered height |

---

## Logo Usage Guide

### Variants

| File | Use on | Never use on |
|------|--------|-------------|
| `Logo-01.svg` | White / light backgrounds | Dark, red, or gold backgrounds |
| `Logo-02.svg` | Overland red (`#ed1c24`) background | Any other colour |
| `Logo-03.svg` | Black / dark backgrounds (sidebar) | Light or coloured backgrounds |
| `Logo-04.svg` | Gold (`#fac56e`) background | Any other colour |

### Rules

- **Minimum height**: 40px rendered (`--ol-logo-min-height`).
- **Clear space**: On all four sides, maintain a gap equal to the height of the circular mark portion of the logo.
- **No modifications**: Never rotate, skew, recolour, add drop shadows, add strokes, or stretch the logo.
- **Backgrounds**: Only approved solid backgrounds. Never place on a busy photo without an opaque backing.
- **Favicon**: Use `overland_logo_favico/favicon-32x32.png` at 32px or smaller (icon-only mark).

---

## Theme Switching

The template uses Bootstrap 5.3's native `data-bs-theme` attribute.

### Storage

The user's preference is persisted in `localStorage` under the key `overland-theme`.

```js
// Possible values
localStorage.getItem('overland-theme')  // "light" | "dark" | null (system default)
```

### JavaScript API (`overland.js`)

```js
// Apply a theme programmatically
applyTheme('light')   // forces light mode
applyTheme('dark')    // forces dark mode

// Toggle between light and dark
toggleTheme()

// Read current theme
document.documentElement.getAttribute('data-bs-theme')  // "light" | "dark"
```

### FOUC Prevention

`overland.js` applies the stored theme synchronously via an IIFE before `DOMContentLoaded` to prevent a flash of unstyled content.

### HTML Setup

The `<html>` tag on every page must have `data-bs-theme="light"` as default:

```html
<html lang="en" data-bs-theme="light">
```

The theme toggle button must have `id="ol-theme-toggle"`:

```html
<button id="ol-theme-toggle" class="ol-topbar__icon-btn" aria-label="Toggle theme">
  <i class="bi bi-moon-fill"></i>
</button>
```

---

## Layout System

### Shell Classes

```html
<div class="ol-layout">
  <nav class="ol-sidebar" id="ol-sidebar">...</nav>
  <div class="ol-sidebar-backdrop" id="ol-sidebar-backdrop"></div>
  <div class="ol-main-wrapper" id="ol-main-wrapper">
    <header class="ol-topbar">...</header>
    <main class="ol-content">...</main>
  </div>
</div>
```

### Sidebar Collapse

The sidebar collapses to `72px` icon-only mode. State is persisted in `localStorage` as `overland-sidebar`:

```js
// Collapse programmatically
toggleSidebar()
applySidebarState(true)   // force collapsed
applySidebarState(false)  // force expanded
```

The collapse button must have `id="ol-sidebar-collapse-btn"`.

### Mobile Navigation

On viewports below 992px, the sidebar becomes an offcanvas. The mobile toggle button must have `id="ol-mobile-toggle"`. A backdrop (`id="ol-sidebar-backdrop"`) is shown when the sidebar is open.

---

## Page Templates

| File | Type | Description |
|------|------|-------------|
| `index.html` | Dashboard | KPI cards, chart placeholders, table, activity feed |
| `pages/table.html` | Data table | Full CRUD table with search, filter, sort, pagination |
| `pages/form.html` | Form | Multi-column form with fieldsets and validation |
| `pages/settings.html` | Settings | Tab-based settings (Profile, Notifications, Appearance, Security) |
| `pages/login.html` | Auth | Two-panel login page |
| `pages/404.html` | Error | Branded error page |

---

## Key Component Classes

### Cards

```html
<div class="ol-card">
  <div class="ol-card__header">
    <h3 class="ol-card__title">Title</h3>
    <p class="ol-card__subtitle">Subtitle</p>
  </div>
  <div class="ol-card__body">...</div>
  <div class="ol-card__footer">...</div>
</div>
```

For flush content (tables, charts touching card edges): `ol-card__body--flush`

### KPI Stat Cards

```html
<div class="ol-stat-card">                          <!-- default red accent -->
<div class="ol-stat-card ol-stat-card--lime">       <!-- lime accent -->
<div class="ol-stat-card ol-stat-card--gold">       <!-- gold accent -->
<div class="ol-stat-card ol-stat-card--orange">     <!-- orange accent -->
```

### Status Badges

```html
<span class="ol-badge ol-badge--active">In Transit</span>
<span class="ol-badge ol-badge--pending">Pending</span>
<span class="ol-badge ol-badge--inactive">Cancelled</span>
<span class="ol-badge ol-badge--critical">Delayed</span>
<span class="ol-badge ol-badge--info">Scheduled</span>
```

### Tables

```html
<table class="ol-table" data-sortable>
  <thead>
    <tr>
      <th data-col="0">Column A <i class="bi bi-arrow-down-up sort-icon"></i></th>
    </tr>
  </thead>
  <tbody>...</tbody>
</table>
```

Table search (binds to a table by ID):

```html
<input type="search" data-table-search="my-table-id" placeholder="Search…">
```

### Chart Placeholder

Replace with Chart.js, ApexCharts, or another charting library:

```html
<div class="ol-chart-placeholder" style="height:280px;">
  <!-- TODO: Inject chart instance here -->
</div>
```

---

## Adding a New Page

1. Copy the nearest matching template from `pages/`.
2. Update `<title>` and breadcrumb.
3. Set the correct `<a class="ol-nav-link active">` item in the sidebar.
4. Adjust `src`/`href` asset paths for your page depth (`../assets/` for pages in `pages/`).
5. Add your content inside `<main class="ol-content">`.

---

## CDN Dependencies

| Library | Version | URL |
|---------|---------|-----|
| Bootstrap CSS | 5.3.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` |
| Bootstrap JS | 5.3.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Bootstrap Icons | 1.11.3 | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css` |
| Switzer (font) | — | `https://api.fontshare.com/v2/css?f[]=switzer@100,300,400,500,700,900&display=swap` |

No npm, no bundler, no build step required.

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Use `--ol-*` tokens for all custom colour values | Hard-code hex values in component CSS |
| Use `Logo-03.svg` in the dark sidebar | Use `Logo-01.svg` (light) on dark backgrounds |
| Keep `--ol-font-brand` (Switzer) for headings | Use Switzer for body/label text |
| Use `.ol-badge--critical` for errors/delays | Create custom badge classes |
| Add chart placeholders with `.ol-chart-placeholder` | Leave empty `<div>` without comment |
| Use `data-bs-theme` attribute for theme switching | Toggle theme via class names |
| Maintain 40px minimum logo height | Render logos below 40px |
| Preserve clear space around the logo | Crowd the logo with other elements |

---

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge). Bootstrap 5 does not support IE11.

---

*Overland Fleet Management Design System — v1.0.0*
#   o v e r l a n d _ d a s h b o a r d _ t e m p l a t e  
 
# Overland Fleet Management — Dashboard Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Build Step](https://img.shields.io/badge/Build%20Step-None-brightgreen?style=flat)
![Version](https://img.shields.io/badge/Version-1.0.0-ed1c24?style=flat)

A production-ready Bootstrap 5 dashboard template built on the Overland brand design system. Zero build step — pure CDN + static files. Drop it into any project and open in a browser.

> **Prepared by:** David Mushi, Senior Software Developer — IT Department, Overland Logistics

---

## Table of Contents

- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Pages Overview](#pages-overview)
- [CSS Architecture](#css-architecture)
- [Design Token Reference](#design-token-reference)
  - [Brand Colours](#brand-colours)
  - [Typography](#typography)
  - [Spacing](#spacing-4px-base-grid)
  - [Layout](#layout)
- [Logo Usage Guide](#logo-usage-guide)
- [Theme Switching](#theme-switching)
- [Layout System](#layout-system)
- [Key Component Classes](#key-component-classes)
  - [Cards](#cards)
  - [KPI Stat Cards](#kpi-stat-cards)
  - [Status Badges](#status-badges)
  - [Tables](#tables)
  - [Chart Placeholder](#chart-placeholder)
- [Adding a New Page](#adding-a-new-page)
- [CDN Dependencies](#cdn-dependencies)
- [Do's and Don'ts](#dos-and-donts)
- [Browser Support](#browser-support)
- [Author and Credits](#author-and-credits)

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
│   ├── login.html                  # Authentication — two-panel sign-in page
│   ├── vehicles.html               # Fleet inventory — vehicle list and status
│   ├── maintenance.html            # Maintenance schedule and service history
│   ├── table.html                  # Shipments — full data table with sort & search
│   ├── routes.html                 # Route management and planning
│   ├── drivers.html                # Driver roster and management
│   ├── reports.html                # Analytics, KPIs, and reporting
│   ├── form.html                   # New / edit shipment form
│   ├── settings.html               # Account and preference settings
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
    └── PNG/
        ├── Logo-01.png             # Light / white background variant
        ├── Logo-02.png             # Overland red background variant
        ├── Logo-03.png             # Dark / black background (sidebar, favicon)
        ├── Logo-04.png             # Gold background variant
        └── Logo-05 to Logo-08.png  # Additional brand mark variants
```

---

## Pages Overview

The template ships with **11 HTML pages** (entry point + 10 inner pages) covering the full fleet management workflow.

| File | Nav Section | Type | Description |
|------|-------------|------|-------------|
| `index.html` | Overview | Dashboard | KPI cards, delivery volume chart, fleet status donut, recent shipments table, activity feed, alerts |
| `pages/vehicles.html` | Fleet | List view | Vehicle inventory with status indicators (Active, In Maintenance, Idle) |
| `pages/maintenance.html` | Fleet | Schedule | Service history, upcoming maintenance records, vehicle condition tracking |
| `pages/table.html` | Operations | Data table | Full shipments table with column sorting, search, status badges, and pagination |
| `pages/routes.html` | Operations | List view | Route management, planning, and optimisation |
| `pages/drivers.html` | Operations | List view | Driver roster, licence details, assignment status, searchable table |
| `pages/reports.html` | Analytics | Reports | Fleet analytics, KPI summaries, and exportable report views |
| `pages/form.html` | Operations | Form | Multi-column new/edit shipment form with fieldsets and validation feedback |
| `pages/settings.html` | Footer | Settings | Tab-based settings: Profile, Notifications, Appearance, Security |
| `pages/login.html` | — | Auth | Split-screen login with brand panel, email/password form, and error state |
| `pages/404.html` | — | Error | Branded 404 page with quick-navigation links back to core sections |

### Dashboard (`index.html`) in Detail

The main entry point provides a full fleet snapshot:

- **Announcement banner** — Dismissible info strip for system notices (persisted in `sessionStorage`)
- **KPI stat cards** — Active Shipments · Total Vehicles · Drivers On Route · Deliveries Today, each with trend indicator
- **Delivery Volume chart** — 30-day / 7-day tab toggle; chart placeholder ready for Chart.js or ApexCharts
- **Fleet Status donut** — Active (48) · In Maintenance (11) · Idle (5) with colour-coded legend
- **Recent Shipments table** — Latest 8 records, sortable, with status badges and View actions
- **Recent Activity feed** — Timestamped event log (deliveries, service alerts, onboarding, cancellations)
- **Alerts panel** — Danger / Warning / Info alert cards for critical shipment delays and service notices

### Sidebar Navigation Structure

```
Overview   ->  Dashboard
Fleet      ->  Vehicles  |  Maintenance
Operations ->  Shipments (badge: 14)  |  Routes  |  Drivers
Analytics  ->  Reports
Footer     ->  Settings
```

---

## CSS Architecture

The CSS is split into four files that **must be loaded in order**:

```html
<link rel="stylesheet" href="assets/css/overland-tokens.css">   <!-- 1. Tokens -->
<link rel="stylesheet" href="assets/css/overland-light.css">    <!-- 2. Light theme -->
<link rel="stylesheet" href="assets/css/overland-dark.css">     <!-- 3. Dark theme -->
<link rel="stylesheet" href="assets/css/overland.css">          <!-- 4. Components -->
```

| File | Purpose |
|------|---------|
| `overland-tokens.css` | Single source of truth — all `--ol-*` custom properties |
| `overland-light.css` | Maps tokens to `--bs-*` vars for `:root, [data-bs-theme="light"]` |
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
| `Logo-01.png` | White / light backgrounds | Dark, red, or gold backgrounds |
| `Logo-02.png` | Overland red (`#ed1c24`) background | Any other colour |
| `Logo-03.png` | Black / dark backgrounds (sidebar, favicon) | Light or coloured backgrounds |
| `Logo-04.png` | Gold (`#fac56e`) background | Any other colour |

### Rules

- **Minimum height**: 40px rendered (`--ol-logo-min-height`).
- **Clear space**: On all four sides, maintain a gap equal to the height of the circular mark portion of the logo.
- **No modifications**: Never rotate, skew, recolour, add drop shadows, add strokes, or stretch the logo.
- **Backgrounds**: Only approved solid backgrounds. Never place on a busy photo without an opaque backing.
- **Favicon**: Use `Logo-03.png` at 32px or smaller for the browser tab icon.

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

### Sidebar Variant

In light theme, the sidebar can switch between its default dark style and a light variant. The variant toggle must have `id="ol-sidebar-variant-btn"`. Preference is stored in `localStorage` as `overland-sidebar-variant`.

---

## Layout System

### Shell Classes

```html
<div class="ol-layout">
  <nav class="ol-sidebar" id="ol-sidebar">...</nav>
  <div class="ol-sidebar-backdrop" id="ol-sidebar-backdrop"></div>
  <div class="ol-main-wrapper" id="ol-main-wrapper">
    <header class="ol-topbar">...</header>
    <main class="ol-content" id="main-content">...</main>
  </div>
</div>
```

### Sidebar Collapse

The sidebar collapses to `72px` icon-only mode on desktop. State is persisted in `localStorage` as `overland-sidebar`:

```js
// Collapse programmatically
toggleSidebar()
applySidebarState(true)   // force collapsed
applySidebarState(false)  // force expanded
```

The collapse button must have `id="ol-sidebar-collapse-btn"`.

### Mobile Navigation

On viewports below 992px, the sidebar becomes an offcanvas drawer. The mobile toggle button must have `id="ol-mobile-toggle"`. A backdrop (`id="ol-sidebar-backdrop"`) is shown when the sidebar is open.

### Announcement Banner

A dismissible info strip sits above the topbar for system-wide notices:

```html
<div id="ol-announcement-banner" class="ol-announcement-banner ol-announcement-banner--info"
     role="status" aria-live="polite">
  <div class="ol-announcement-banner__content">
    <i class="bi bi-tools"></i>
    <span><strong>Notice:</strong> Your message here.</span>
  </div>
  <button type="button" class="ol-announcement-banner__close"
          id="ol-banner-dismiss" aria-label="Dismiss announcement">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

Dismissed state is stored in `sessionStorage` under `overland-banner-dismissed` and resets on each new browser session.

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

For flush content (tables or charts touching card edges) use `ol-card__body--flush` on the body div.

### KPI Stat Cards

```html
<div class="ol-stat-card">                          <!-- default red accent -->
<div class="ol-stat-card ol-stat-card--lime">       <!-- lime / success accent -->
<div class="ol-stat-card ol-stat-card--gold">       <!-- gold accent -->
<div class="ol-stat-card ol-stat-card--orange">     <!-- orange / warning accent -->
```

Trend indicators inside a stat card:

```html
<div class="ol-stat-card__trend ol-stat-card__trend--up">
  <i class="bi bi-arrow-up-short"></i> +12%
  <span class="ol-stat-card__trend-text ms-1">vs last week</span>
</div>

<!-- Also available: ol-stat-card__trend--down  |  ol-stat-card__trend--neutral -->
```

### Status Badges

```html
<span class="ol-badge ol-badge--active">In Transit</span>
<span class="ol-badge ol-badge--active">Delivered</span>
<span class="ol-badge ol-badge--pending">Pending</span>
<span class="ol-badge ol-badge--info">Scheduled</span>
<span class="ol-badge ol-badge--critical">Delayed</span>
<span class="ol-badge ol-badge--inactive">Cancelled</span>
```

### Tables

```html
<table class="ol-table" data-sortable id="my-table">
  <thead>
    <tr>
      <th data-col="0">Column A <i class="bi bi-arrow-down-up sort-icon"></i></th>
      <th data-col="1">Column B <i class="bi bi-arrow-down-up sort-icon"></i></th>
    </tr>
  </thead>
  <tbody>...</tbody>
</table>
```

Bind a search input to a table by matching the `id`:

```html
<input type="search" data-table-search="my-table" placeholder="Search...">
```

### Chart Placeholder

Replace with Chart.js, ApexCharts, or any other library:

```html
<div class="ol-chart-placeholder" style="height:280px;" aria-label="Chart placeholder">
  <!-- TODO: Inject chart instance here -->
  <!-- Chart.js    -> https://www.chartjs.org/ -->
  <!-- ApexCharts  -> https://apexcharts.com/  -->
</div>
```

---

## Adding a New Page

1. Copy the nearest matching template from `pages/`.
2. Update `<title>` and the breadcrumb `<ol>`.
3. Set `class="ol-nav-link active"` on the correct sidebar link.
4. Adjust asset paths — pages inside `pages/` must use `../assets/` and `../image/`.
5. Add your content inside `<main class="ol-content" id="main-content">`.

---

## CDN Dependencies

| Library | Version | CDN URL |
|---------|---------|---------|
| Bootstrap CSS | 5.3.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` |
| Bootstrap JS | 5.3.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Bootstrap Icons | 1.11.3 | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css` |
| Switzer (font) | — | `https://api.fontshare.com/v2/css?f[]=switzer@100,300,400,500,700,900&display=swap` |

No npm, no bundler, no build step required.

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Use `--ol-*` tokens for all custom colour values | Hard-code hex values in component CSS |
| Use `Logo-03.png` in the dark sidebar and as favicon | Use `Logo-01.png` (light) on dark backgrounds |
| Keep `--ol-font-brand` (Switzer) for headings | Use Switzer for body or label text |
| Use `.ol-badge--critical` for errors/delays | Create custom one-off badge classes |
| Add chart placeholders with `.ol-chart-placeholder` | Leave an empty `<div>` without a comment |
| Use `data-bs-theme` attribute for theme switching | Toggle theme via class names |
| Maintain 40px minimum logo height | Render logos below 40px |
| Preserve clear space around the logo | Crowd the logo with adjacent elements |
| Copy an existing page template for new pages | Build new pages from scratch |

---

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge — current and prior major version). Bootstrap 5 does not support Internet Explorer 11.

---

## Author and Credits

| Field | Detail |
|-------|--------|
| **Prepared by** | David Mushi |
| **Title** | Senior Software Developer |
| **Department** | IT Department |
| **Organisation** | Overland Logistics |
| **Version** | 1.0.0 |
| **Date** | April 2026 |

---

*Overland Fleet Management Design System — v1.0.0*

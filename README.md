# Terminal Condition — Evangelion GUI CSS Theme

A CSS theme inspired by the NERV tactical interface from *Neon Genesis Evangelion*.  
No gradients. No rounded corners. No mercy.

![Preview](https://img.shields.io/badge/style-NERV-ff6500?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-00f0ff?style=flat-square)

## 🔴 Live Demo

👉 **[View Showcase](https://YOUR_USERNAME.github.io/YOUR_REPO/)**

## ⬇️ Download

Grab the standalone CSS file: **[theme.css](https://YOUR_USERNAME.github.io/YOUR_REPO/theme.css)**

Or install via your HTML:

```html
<link rel="stylesheet" href="theme.css">
```

## 🎨 Features

- **Pure CSS** — no JavaScript required
- **CRT scanline & flicker effects** — authentic retro terminal feel
- **Radar spinner** — replaces generic loading indicators
- **Aggressive alert animations** — danger states that demand attention
- **Sharp geometry** — `border-radius: 0` everywhere, no exceptions
- **3-color palette** — Alert Orange `#FF6500`, System Cyan `#00F0FF`, Critical Red `#FF351A`
- **Monospace typography** — Roboto Mono for headings, Heebo for body

## 📦 Components

| Component | CSS Class |
|-----------|-----------|
| Button | `.nerv-btn`, `.nerv-btn-danger`, `.nerv-btn-active` |
| Card | `.nerv-card` |
| Badge | `.nerv-badge`, `.nerv-badge-ok`, `.nerv-badge-warn`, `.nerv-badge-danger` |
| Alert | `.nerv-alert`, `.nerv-alert-info`, `.nerv-alert-warning`, `.nerv-alert-danger` |
| Table | `.nerv-table` |
| Input | `.nerv-input` |
| Select | `.nerv-select` |
| Checkbox | `.nerv-checkbox` |
| Progress | `.nerv-progress-bar`, `.nerv-progress-fill`, `.nerv-progress-fill-ok/warn/danger` |
| Nav | `.nerv-nav`, `.nerv-nav-item`, `.nerv-nav-item-active` |
| Modal | `.nerv-modal-overlay`, `.nerv-modal`, `.nerv-modal-header/body/footer` |
| Toast | `.nerv-toast` |
| Accordion | `.nerv-accordion-header`, `.nerv-accordion-body` |
| Pagination | `.nerv-pagination`, `.nerv-pagination-item`, `.nerv-pagination-item-active` |
| Dropdown | `.nerv-dropdown`, `.nerv-dropdown-item` |
| Radar/Spinner | `.nerv-radar` |
| Breadcrumb | `.nerv-breadcrumb` |
| List Group | `.nerv-list-group-item` |
| CRT Overlay | `.crt-wrapper`, `.crt-flicker`, `.crt-scanline-move` |
| Glow | `.glow-orange`, `.glow-cyan`, `.glow-red` |

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My NERV App</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Heebo:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="theme.css">
</head>
<body class="crt-wrapper crt-flicker">
  <div class="crt-scanline-move"></div>

  <button class="nerv-btn">LAUNCH</button>
  <button class="nerv-btn nerv-btn-danger">ABORT</button>

  <div class="nerv-alert nerv-alert-danger">
    ■ PATTERN BLUE DETECTED
  </div>

  <div class="nerv-card">
    <h3>UNIT-01</h3>
    <span class="nerv-badge nerv-badge-ok">ACTIVE</span>
  </div>
</body>
</html>
```

## 🎯 Design Principles

1. **No border-radius** — Rounded corners imply safety. This is a tactical interface.
2. **No gradients** — Information is binary: known or unknown, safe or dangerous.
3. **No box-shadow for depth** — Depth is created by layering near-black surfaces and explicit borders.
4. **No decorative icons** — Typography and structure carry the aesthetic.

## 📝 Fonts

The theme uses two fonts loaded via Google Fonts:

- **Roboto Mono** — headings, labels, monospace elements
- **Heebo** — body text, paragraphs

## 📄 License

MIT — Use it however you want. God's in his heaven. All's right with the world.

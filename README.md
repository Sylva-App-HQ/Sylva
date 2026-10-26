# Sylva

All rights reserved © 2026 Sylva

> A high-performance, local-first hierarchical thought and tree management engine.

Sylva is a modern Progressive Web App (PWA) designed for deep spatial thinking, multi-tree project modeling, and frictionless thought organization with zero cloud bloat and strict local-first data ownership.

- **Live Production App**: [https://sylvatree.com](https://sylvatree.com)
- **Current Version**: `v0.2.0-Alpha`
- **Architecture**: Vanilla JS / SVG procedural canvas, Service Worker offline caching, Local-First storage.

---

## Core Philosophy

- **Local-First & Private**: Zero external telemetry, tracking, or cloud lock-in. Your thoughts, branches, and trees remain securely on your device.
- **Botanical Hierarchy**: Project trees sprout, grow leaves (notes/sub-thoughts), bear harvestable fruit (milestones), and generate recursive seeds.
- **Tactile Ergonomics**: Designed from the ground up for touch and stylus (fluid pinch-to-zoom, pan, double-tap management, long-press canopy drilldowns) and desktop keyboard workflows.
- **Instant Offline Operation**: Launches instantly in any browser and installs natively to Android, iOS, Windows, and macOS via Service Worker caching.

---

## Tech Stack

- **Core**: Vanilla HTML5, Modern CSS3, JavaScript (ES6+)
- **Graphics Engine**: Procedural SVG / Canvas vector rendering
- **Storage**: Local-first storage (IndexedDB / LocalStorage persistence)
- **Offline / PWA**: Web App Manifest & Service Worker Cache Engine
- **Hosting / CDN**: GitHub Pages with custom domain DNS routing

---

## Local Development

To run Sylva locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Sylva-App-HQ/sylva.git](https://github.com/Sylva-App-HQ/sylva.git)
   cd sylva
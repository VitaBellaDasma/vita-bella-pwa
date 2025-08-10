# Vita Bella Bubble Drinks & Coffee Stop — PWA

An installable, offline-friendly web app for **Vita Bella Bubble Drinks & Coffee Stop**.
Built as a static site (no backend needed) and optimized for **Vercel**.

## Features
- **Home & Promos** page
- **Dynamic Menu** (edit `data/menu.json`)
- **Loyalty Card** (10 stamps = 1 free drink; staff code `VITA2025` in `app.js`)
- **Events** (edit `data/events.json`)
- **Order** page (call button + link placeholder)
- **PWA**: installable on iOS/Android/Desktop, works offline

## Local Preview
Use any static server (so the service worker & JSON files load correctly). For example:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy on Vercel
1. Create a new project in **Vercel** (Framework preset: **Other**).
2. Import this GitHub repository or drag-drop the folder.
3. Click **Deploy**. You’ll get a live URL like `https://your-app.vercel.app`.
4. On your phone, open the site → **Add to Home Screen** to install the app.

Vercel respects the included `vercel.json` for sensible caching of assets and a fresh service worker.

## GitHub Setup (from a local folder)
```bash
git init
git add .
git commit -m "Initial commit: Vita Bella PWA"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/vita-bella-pwa.git
git push -u origin main
```

## Customize
- **Branding**: edit colors in `styles.css`, update icons in `/assets`, and app name in `manifest.json`.
- **Menu**: `data/menu.json`
- **Events**: `data/events.json`
- **Loyalty staff code**: search `VITA2025` in `app.js`
- **Order page**: update phone number & link in `order.html`

## Files Overview
```
index.html          # Home & promos
menu.html           # Renders data from data/menu.json
loyalty.html        # Local-storage loyalty; staff code & reset
events.html         # Renders data from data/events.json
order.html          # Call button + external order link
styles.css          # Theme + layout
app.js              # PWA registration + menu/events/loyalty logic
manifest.json       # PWA metadata + icons
service-worker.js   # Offline caching
vercel.json         # Caching headers / routes for Vercel
data/
  ├─ menu.json
  └─ events.json
assets/
  ├─ icon-192.png
  ├─ icon-256.png
  ├─ icon-384.png
  └─ icon-512.png
```

## Roadmap Ideas
- Brand logo & real icons
- QR-based stamp validation
- Online order integrations (Foodpanda/Lalamove)
- Multi-branch support
- Admin JSON editor (protected by PIN)

---

**© 2025 Vita Bella Bubble Drinks & Coffee Stop · Dasmariñas, Cavite**

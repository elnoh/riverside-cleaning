# Riverside Window Cleaning

A polished one-page local-service portfolio example for AdamRemix. The site includes residential, storefront and office services; starting prices; before/after proof; three trust points; a service area; and an interactive quote form.

## Open in VS Code

```bash
cd /home/noah-elam/RIVERSIDE-CLEANING
code .
```

## Run locally

Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production check

```bash
npm run build
npm run start
```

## Main files

- `app/page.tsx` — all page content and the quote-form interaction
- `app/globals.css` — full visual design and responsive behavior
- `app/layout.tsx` — page title, description, social preview and favicon metadata
- `public/images/riverside-hero.png` — service-in-progress hero photograph
- `public/images/window-before-after.png` — before/after proof photograph
- `public/og.png` — social sharing card

The quote form is a front-end portfolio interaction: it validates required fields and previews the request without transmitting personal information. Connect `handleSubmit` in `app/page.tsx` to an approved email, CRM or form endpoint when preparing a production client deployment.

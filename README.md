# Pinho Law — Website

Official website for **Pinho Law, PLLC** — a Florida-based immigration and business law firm serving the Brazilian-American community and beyond.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl (English, Portuguese, Spanish)
- **Animations:** Framer Motion
- **Fonts:** Cormorant Garamond + DM Sans

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Project Structure

```
src/
  app/[locale]/       # Pages (locale-based routing)
  components/         # UI components, sections, layout
  i18n/               # Internationalization config
  lib/                # Constants, utilities, metadata
  messages/           # Translation files (en, pt-br, es)
  styles/             # Global styles
public/images/        # Static assets
```

## Pages

| Route              | Description                        |
|--------------------|------------------------------------|
| `/`                | Homepage                           |
| `/immigration`     | Immigration law services           |
| `/business`        | Business law services              |
| `/about`           | About the firm                     |
| `/about/attorney`  | Attorney Izi Pinho bio             |
| `/consultation`    | Book a consultation                |
| `/reviews`         | Client testimonials                |
| `/resources`       | Resources & guides hub             |
| `/resources/faq`   | Frequently asked questions         |

## Deployment

Configured for Vercel. Push to `main` to deploy.

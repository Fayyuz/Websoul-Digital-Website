# Websoul Digital Website

Premium corporate website for Websoul Digital, an Australian-owned digital and cyber consultancy.

**Domain:** websoul.com.au  
**Location:** Canberra, ACT, Australia

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Engine**: React 18 / TypeScript
- **Styling**: Tailwind CSS (Custom Monochrome Architecture)
- **Icons**: Lucide React
- **Validation**: Zod / React Hook Form
- **Deployment**: Google Cloud Run (Containerized Standalone)

## Core Capabilities

1. **Trust Services**: Workforce integrity frameworks and personnel readiness
2. **Digital Consultancy**: Secure-by-design engineering and ICT transformation
3. **DISP Advisory**: Strategic pathways for organisational security maturity
4. **Essential Eight ML2**: ISM-aligned cyber assurance

## Local Development

```bash
npm install
npm run dev
```

## Production Quality Gates

```bash
npm run check  # Runs lint, typecheck, and build
```

## Deployment: Google Cloud Run

This project is optimized for Google Cloud Run using Next.js standalone output.

### Environment Configuration

Set in Cloud Run environment variables:

`NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Your Formspree endpoint ID

### Deploy

```bash
# Build container
docker build -t gcr.io/[PROJECT-ID]/websoul-website .

# Push to Artifact Registry
docker push gcr.io/[PROJECT-ID]/websoul-website

# Deploy to Cloud Run (port 8080)
gcloud run deploy websoul-website \
  --image gcr.io/[PROJECT-ID]/websoul-website \
  --port 8080 \
  --platform managed
```

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader friendly
- Reduced motion support
- Skip to content link

## Legal

Websoul Digital Pty Ltd  
ABN 44 656 760 146  
hello@websoul.com.au

© 2026 Websoul Digital. All rights reserved.

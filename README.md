# Websoul Digital | Production Repository

This repository contains the source for the Websoul Digital corporate website—a premium, sovereign Australian consultancy providing Trust Services, Digital Delivery, and DISP Advisory.

**Domain:** [websoul.com.au](https://websoul.com.au)  
**Location:** Canberra, ACT, Australia

## Specification

- **Framework:** Next.js 14 (App Router)
- **Engine:** React 18 / TypeScript
- **Styling:** Tailwind CSS (Custom Monochrome Architecture)
- **Icons:** Lucide React
- **Validation:** Zod / React Hook Form
- **Deployment:** Google Cloud Run (Containerized Standalone)

## Architectural Ethos

The website is designed to the standard of a Tier-One global consultancy. It prioritizes:
- **Trust-Oriented Hierarchy:** Logical service partitioning and clear value propositions.
- **Sovereign Positioning:** Explicit alignment with Australian secure-domain requirements.
- **Operational Reality:** No broken links, placeholder phone numbers, or overclaims.

## Core Capabilities

1.  **Trust Services:** Advanced workforce integrity frameworks and personnel readiness.
2.  **Digital Delivery:** Secure-by-design engineering and ICT transformation.
3.  **DISP Advisory:** Strategic pathways for organisational security maturity.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Quality Gates

Before deployment, ensure all quality gates pass:

```bash
# Run linting, typechecking, and build
npm run check
```

## Deployment: Google Cloud Run

This project is optimized for **Google Cloud Run** using the Next.js **standalone** build output for minimal image size and maximum performance.

### 1. Environment Configuration
Ensure `.env` in your deployment environment contains:
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Your Formspree endpoint ID.

### 2. Containerization
The repository includes a production-grade `Dockerfile`.

```bash
# Build the container
docker build -t gcr.io/[PROJECT_ID]/websoul-website .

# Push to Artifact Registry
docker push gcr.io/[PROJECT_ID]/websoul-website

# Deploy to Cloud Run
# Ensure to expose port 3000
```

## Integrated Components

- **Contact:** Functional Formspree integration with Zod validation.
- **Insights:** Living content architecture for industry leadership.
- **Case Studies:** Anonymized, evidence-led past performance.
- **Security:** Responsible disclosure protocol for high-trust operations.

## Legal Identity

Websoul Digital Pty Ltd  
ABN 44 656 760 146  
hello@websoul.com.au

---

© 2026 Websoul Digital. All rights reserved. Proprietary and Confidential.

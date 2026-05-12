# Websoul Digital Website

Premium corporate website for Websoul Digital, an Australian-owned digital and cyber consultancy.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (monochrome premium palette)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Hosting**: Firebase Hosting

## Core Capabilities

- **Trust Services**: Workforce integrity and screening
- **Digital Consultancy**: ICT strategy and cloud transformation
- **DISP Advisory**: Security maturity and governance

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment (Firebase Hosting)

### Prerequisites

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`

### Deploy

```bash
# Build the static export
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

The site will be available at your configured Firebase Hosting URL.

## Build Configuration

This project is optimized for static hosting compatibility.

## Design System

- **Colors**: Monochrome premium palette (ink, paper, graphite, charcoal, slate, silver, mist)
- **Typography**: Inter font family with SF Pro Display for headings
- **Logo**: Custom geometric "W" mark (chevron-based design)
- **Spacing**: Consistent spacing system based on architectural proportions

## Pages

- Homepage (Strategic sections for credibility)
- Trust Services
- Digital Delivery (Digital Consultancy)
- DISP Advisory
- About
- Careers
- Contact (with functional Formspree integration)
- Privacy Policy
- Terms of Use

## Contact Form

The contact form is designed for real-world use via Formspree. To configure:
1. Create a free account at https://formspree.io/
2. Create a new form and get your endpoint URL
3. Replace the endpoint in `src/app/(marketing)/contact/page.tsx`

## License

All rights reserved. Websoul Digital.

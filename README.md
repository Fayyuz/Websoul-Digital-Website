# Websoul Digital Website

Premium corporate website for Websoul Digital, an Australian-owned digital and cyber consultancy.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Key Capabilities
- **Trust Services**: Workforce integrity and screening.
- **Digital Consultancy**: ICT strategy and cloud transformation.
- **DISP Advisory**: Security maturity and governance.

## Local Development

```bash
npm run dev
```

## Deployment

### Google Cloud Run
This project includes a `Dockerfile` optimized for Cloud Run.

1. Build the image:
   ```bash
   gcloud builds submit --tag gcr.io/[PROJECT-ID]/websoul-digital
   ```
2. Deploy to Cloud Run:
   ```bash
   gcloud run deploy websoul-digital --image gcr.io/[PROJECT-ID]/websoul-digital --platform managed
   ```

### Firebase App Hosting
The project is compatible with Next.js 14 SSR/SSG.
1. Initialize Firebase: `firebase init hosting`
2. Follow prompts for Next.js App Hosting.

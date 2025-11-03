# Vaultic AI - Marketing Website

A production-ready marketing website for Vaultic AI, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router and Edge Runtime
- 🎨 **Tailwind CSS** with custom theme and dark mode
- 🧩 **shadcn/ui** components for beautiful UI
- 🎭 **Framer Motion** for smooth animations
- 📧 **Resend** integration for contact forms
- 🔍 **SEO optimized** with next-seo
- 📊 **Analytics** with Vercel Analytics & Speed Insights
- ♿ **Accessible** WCAG AA compliant
- 🚀 **Performance** 90+ Lighthouse score target
- 🌍 **i18n-ready** structure for future translations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Email**: Resend
- **Analytics**: Vercel Analytics & Speed Insights
- **Icons**: Lucide React
- **Font**: Inter (body), Space Grotesk (display)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VaulticAI/vaultic-ai.git
cd vaultic-ai
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
CONTACT_INBOX=hello@vaultic.ai
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vaultic-ai/
├── app/                      # Next.js App Router
│   ├── (site)/              # Main site routes
│   │   ├── layout.tsx       # Site layout with Navbar/Footer
│   │   ├── page.tsx         # Homepage
│   │   ├── website/         # Website service page
│   │   ├── web-app/         # Web App service page
│   │   ├── ai/              # AI service pages
│   │   ├── portfolio/       # Portfolio showcase
│   │   └── contact/         # Contact form
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── sitemap.xml/         # Dynamic sitemap
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── hero.tsx             # Homepage hero
│   ├── services.tsx         # Services section
│   ├── portfolio.tsx        # Portfolio grid
│   ├── navbar.tsx           # Navigation
│   └── footer.tsx           # Footer
├── lib/                     # Utilities
│   ├── constants.ts         # Site constants
│   ├── utils.ts             # Helper functions
│   ├── seo.ts               # SEO config
│   └── portfolio.ts         # Portfolio data
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking
- `npm run prepare` - Set up Husky git hooks

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

The site will be deployed at `https://your-project.vercel.app`

### Manual Deployment

```bash
npm run build
npm run start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `CONTACT_INBOX` | Email address to receive contacts | Yes |

## Code Quality

- **ESLint**: Configured with Next.js presets
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit linting
- **TypeScript**: Strict type checking

## Performance Targets

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checking
5. Submit a pull request

## License

Copyright © 2024 Vaultic AI. All rights reserved.

## Support

For questions or support, email us at hello@vaultic.ai


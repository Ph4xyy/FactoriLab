# Deployment Guide for Vaultic AI

## Quick Start

This site is production-ready and can be deployed immediately to Vercel.

## Pre-Deployment Checklist

- [x] All pages implemented and working
- [x] Contact form API route configured
- [x] SEO metadata configured
- [x] Analytics integrated
- [x] Sitemap and robots.txt configured
- [x] TypeScript strict mode enabled
- [x] ESLint configured
- [x] Tailwind CSS optimized
- [x] Fonts optimized (Next.js font optimization)

## Environment Variables

You need to set these in your Vercel (or hosting provider) dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://vaultic.ai
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_INBOX=hello@vaultic.ai
```

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add it to environment variables
4. Verify your domain (optional but recommended)

## Deploy to Vercel

### Option 1: Deploy from CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

### Option 2: Deploy from GitHub

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js settings
5. Add environment variables in project settings
6. Deploy!

### Option 3: Connect Existing Vercel Project

```bash
vercel link
vercel --prod
```

## Post-Deployment

### Test These Features

1. **Homepage**: https://your-domain.com
   - Hero section loads
   - Animations work smoothly
   - All sections visible

2. **Navigation**: 
   - Desktop dropdowns work
   - Mobile menu opens/closes
   - All links navigate correctly

3. **Service Pages**:
   - `/website`
   - `/web-app`
   - `/ai/automation`
   - `/ai/agent`
   - `/ai/infrastructure`
   - All pages load without errors

4. **Portfolio**: `/portfolio`
   - Grid displays correctly
   - Filter tabs work
   - Dialog opens/closes

5. **Contact Form**: `/contact`
   - Submit a test message
   - Check inbox for email
   - Verify honeypot works

6. **SEO**:
   - `/sitemap.xml` loads
   - `/robots.txt` loads
   - Meta tags present in source

### Performance Optimization

#### Lighthouse Audit

Run a Lighthouse audit on deployed site:

```bash
# Install Lighthouse CLI
npm i -g lighthouse

# Run audit
lighthouse https://your-domain.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

#### Known Optimization Strategies

Already implemented:
- ✅ Next.js Image optimization
- ✅ Font optimization (next/font)
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ Edge deployment ready
- ✅ Lazy loading components
- ✅ Prefers-reduced-motion support

### Monitoring

#### Vercel Analytics

Automatically enabled via `@vercel/analytics`. View in:
- Vercel Dashboard → Analytics tab

#### Speed Insights

Automatically enabled via `@vercel/speed-insights`. View in:
- Vercel Dashboard → Speed Insights tab

### Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning

### CDN & Edge

The site automatically deploys to Vercel Edge Network globally:
- Instant global distribution
- Edge runtime optimized
- Automatic HTTPS
- DDoS protection

## Troubleshooting

### Build Fails

```bash
# Run local build
npm run build

# Fix TypeScript errors
npm run typecheck

# Fix ESLint errors
npm run lint --fix
```

### Contact Form Not Working

1. Check `RESEND_API_KEY` is set
2. Verify API key is valid
3. Check rate limiting isn't triggered
4. View Vercel function logs

### Images Not Loading

1. All placeholder images should work
2. Replace with real images in `/public`
3. Use Next.js `Image` component
4. Optimize images before upload

### Fonts Not Loading

- Fonts are loaded via `next/font`
- Should work automatically on Vercel
- Check network tab in DevTools

### Dark Mode Not Working

- Toggle respects system preference
- Check `next-themes` is working
- Verify `Providers` component wraps app

## Maintenance

### Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix automatically
npm audit fix
```

### Content Updates

Most content is in:
- `lib/constants.ts` - Site-wide content
- `lib/portfolio.ts` - Portfolio items
- Individual page files in `app/(site)/`

### Adding New Pages

1. Create page in `app/(site)/your-page/page.tsx`
2. Add to navigation in `lib/constants.ts`
3. Add to sitemap in `app/sitemap.xml/route.ts`

## Support

For issues or questions:
- Email: hello@vaultic.ai
- GitHub Issues: [GitHub](https://github.com/VaulticAI/vaultic-ai/issues)

## License

Copyright © 2024 Vaultic AI. All rights reserved.


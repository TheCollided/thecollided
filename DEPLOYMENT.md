# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Git + Vercel Dashboard (Recommended)

1. **Initialize Git and push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial landing page setup"
   git remote add origin https://github.com/YOUR_USERNAME/thecollided.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Connect your GitHub/GitLab account
   - Select the `thecollided` repository
   - Click "Import"
   - Vercel auto-detects Next.js configuration
   - Add Environment Variables:
     - `NEXT_PUBLIC_GA_ID` = `YOUR_GA_TRACKING_ID`
   - Click "Deploy"

3. **Done!** Your site is live at a Vercel URL (e.g., `thecollided.vercel.app`)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Scope: Select your account
# - Project name: thecollided
# - Framework preset: Next.js
# - Build settings: Default
# - Environment variables: Add NEXT_PUBLIC_GA_ID

# Your site is live!
```

---

## Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `thecollided.com`)
4. Choose DNS configuration:
   - **Nameservers** (easier) — Update DNS provider
   - **CNAME** (if keeping current DNS provider)
5. Follow on-screen instructions
6. Wait 5-30 mins for DNS propagation

---

## Environment Variables

### Before Deployment

1. Create `.env.local` locally:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Test locally:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

### In Vercel Dashboard

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Your Google Analytics ID
   - **Environments**: Select `Production` (and `Preview` for testing)
3. Redeploy: Vercel auto-redeploys when environment variables change

---

## Post-Deployment Checklist

- [ ] Visit your live site — confirm all 3 pages load
- [ ] Test navigation arrows and page dots
- [ ] Test on mobile (use DevTools or physical device)
- [ ] Verify social links work (open in new tab)
- [ ] Check Myntra CTA button functionality
- [ ] Verify contact links (phone, email, map)
- [ ] Check analytics in Google Analytics dashboard
- [ ] Test keyboard navigation (Arrow Right key)

---

## Continuous Deployment

Every push to `main` branch → Auto-deploy to Vercel

To disable:
- Vercel Dashboard → Settings → Git → Production Branch → Disable
- Or delete the repository connection

---

## Rollback Previous Version

```bash
# View deployment history
vercel list

# Rollback to previous
vercel rollback
```

Or in Vercel Dashboard:
- Deployments tab → Hover over a deployment → "Promote to Production"

---

## Custom Build & Start Scripts

Current package.json commands work as-is for Vercel. But if you customize:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

Vercel automatically detects and uses these.

---

## Troubleshooting Deployment

**Pages not sliding correctly after deploy?**
- Verify CSS Modules imported correctly
- Check if production build includes all CSS
- Solution: Run `npm run build` locally first to verify

**Styles missing on live site?**
- Clear browser cache (Cmd+Shift+R / Ctrl+F5)
- Check Vercel build logs: Deployments → Failed Build → View Logs

**Social links/emails not working?**
- Ensure config files loaded: Check browser console
- Verify `.next/` folder excluded from Git
- Check that JSON files are committed to Git

**Analytics not tracking?**
- Confirm `NEXT_PUBLIC_GA_ID` set in Vercel Environment Variables
- Check Google Analytics dashboard for events
- Verify GA tag is initialized (check browser console)

---

## Performance Optimization

After deploying, measure performance:

1. **Vercel Analytics** — Built-in (no setup needed)
   - Dashboard → Analytics tab

2. **Google PageSpeed Insights** — https://pagespeed.web.dev
   - Enter your domain
   - Target: Mobile ≥90, Desktop ≥95

3. **Lighthouse in DevTools**
   - Open DevTools (F12)
   - Lighthouse tab → Generate report
   - Target: All ≥90

### Common optimizations:
- Images: Use Next.js `<Image>` component
- CSS: Already optimized via CSS Modules
- Animations: Using CSS transforms (performant)
- No heavy JS libraries

---

## Maintenance

### Update Dependencies
```bash
npm outdated          # See what's outdated
npm update            # Update to latest compatible
npm run build         # Test build
git push              # Auto-deploys to Vercel
```

### Monitoring
- Vercel Dashboard → Analytics for traffic/performance
- Google Analytics for user behavior
- Check deployment logs for build errors

---

## Support

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Issues**: Check Vercel build logs for errors

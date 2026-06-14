# The Collided - Landing Page

A modern, responsive multi-page landing website built with Next.js, TypeScript, and Tailwind CSS. Features smooth horizontal slide transitions, mobile-first design, and analytics tracking.

## Features

✨ **3-Page Sliding Navigation**
- Page 1: Brand showcase with logo
- Page 2: Myntra partnership display with CTA button
- Page 3: Contact locations with 2 offices

🎯 **Navigation Options**
- Right arrow button (bottom-right, fixed)
- Page indicator dots (center-bottom, clickable)
- Keyboard navigation (Arrow Right key)
- Touch/swipe gestures on mobile (swipe left for next page)
- Page wrapping (Page 3 → Page 1)

📱 **Responsive Design**
- Mobile-first approach (tested at 320px, 768px, 1024px+)
- Smooth 0.6s CSS transitions between pages
- Optimized touch targets for mobile
- Collapsible social footer on small screens

🔗 **Social Links**
- Fixed footer with social media icons
- Configurable links via `app/config/socialLinks.json`
- Analytics tracking on social clicks

📊 **Analytics Tracking**
- Google Analytics integration (next-gtag compatible)
- Track page views per slide
- Track button clicks (Myntra CTA)
- Track social link clicks
- Custom event tracking functions

## Project Structure

```
thecollided/
├── app/
│   ├── components/           # React components
│   │   ├── PageSlider.tsx    # Main slider container
│   │   ├── BrandPage.tsx     # Page 1 - Logo showcase
│   │   ├── MyntraPage.tsx    # Page 2 - Myntra partnership
│   │   ├── ContactPage.tsx   # Page 3 - Contact info
│   │   ├── NavigationArrow.tsx
│   │   └── SocialLinks.tsx
│   ├── hooks/
│   │   └── useSlider.ts      # Slide state management
│   ├── lib/
│   │   └── analytics.ts      # Analytics tracking utilities
│   ├── config/
│   │   ├── socialLinks.json  # Social media URLs
│   │   └── locations.json    # Contact locations (2 offices)
│   ├── styles/
│   │   ├── slider.module.css # Slider animations & layout
│   │   └── pages.module.css  # Page-specific styles
│   ├── page.tsx              # Main page entry point
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18+ (v26.3.0 tested)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Google Analytics ID

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Configuration

### Add Your Brand Assets

1. **Logo** — Update `BrandPage.tsx` with your logo/brand color
   - Currently displays "TC" gradient placeholder
   - Replace with: `<Image src="/logo.png" alt="..." />`

2. **Myntra Badge** — Update `MyntraPage.tsx`
   - Currently displays "M" gradient placeholder
   - Add Myntra partnership visual/badge
   - Update Myntra store URL in CTA button

3. **Contact Locations** — Edit `app/config/locations.json`
   ```json
   {
     "locations": [
       {
         "id": 1,
         "name": "Headquarters",
         "address": "123 Brand Street, City, State 10001",
         "phone": "+1 (555) 123-4567",
         "email": "contact@brand.com",
         "mapUrl": "https://maps.google.com/?q=..."
       },
       // ... second location
     ]
   }
   ```

4. **Social Links** — Edit `app/config/socialLinks.json`
   ```json
   {
     "links": [
       {
         "name": "Twitter",
         "url": "https://twitter.com/yourbrand",
         "icon": "twitter"
       }
       // ... more platforms
     ]
   }
   ```

### Set Up Analytics

1. Create a Google Analytics account: https://analytics.google.com
2. Get your Tracking ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Install Google Analytics:
   ```bash
   npm install @next/third-parties
   ```
5. Add `GoogleAnalytics` to `app/layout.tsx` (optional - implement as needed)

## Customization

### Colors & Styling
- Primary color (gradient): `#667eea` → `#764ba2`
- Secondary color (Myntra): `#d6336c`
- Edit `/app/styles/slider.module.css` and `/app/styles/pages.module.css`

### Animations
- Slide transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1)
- Page load: fadeIn + slideUp animations
- Hover effects on buttons and cards
- All defined in CSS modules for performance

### Mobile Navigation
- **Current**: Swipe left (next page), arrow button, page dots
- **Alternative**: Add swipe-right for previous page in `PageSlider.tsx`
- **Optional**: Add dots on mobile footer for page indication

## API Routes & Server Functions
- Currently none - this is a pure static frontend
- Add server routes in `app/api/` if needed for:
  - Contact form submissions
  - Email notifications
  - CMS integration

## Deployment

### Deploy on Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Environment Variables for Vercel
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add `NEXT_PUBLIC_GA_ID` = your Google Analytics ID
3. Redeploy

### Other Deployment Options
- **Netlify**: `npm run build` → Deploy `out` folder
- **Self-hosted**: `npm run build` → Run `npm start`
- **GitHub Pages**: Configure Next.js static export in `next.config.ts`

## Performance & SEO

- ✅ Next.js Image optimization (if added)
- ✅ CSS Modules for scoped styling
- ✅ Tailwind CSS for utility classes
- ✅ Meta tags configured for SEO
- ✅ Lighthouse optimized (target: ≥90)
- ✅ Touch event optimization for mobile
- ✅ Smooth animations with CSS transforms

## Testing Checklist

- [ ] **Navigation**: All 3 pages load, slide transitions smooth
- [ ] **Mobile**: Works on 320px, 480px, 768px screens
- [ ] **Touch**: Swipe left advances to next page
- [ ] **Keyboard**: Arrow Right key navigates
- [ ] **Links**: Myntra CTA opens in new tab
- [ ] **Analytics**: Events fire in Google Analytics dashboard
- [ ] **Cross-browser**: Chrome, Safari, Firefox render identically
- [ ] **Performance**: Lighthouse score ≥90

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Android)

## Development Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## Troubleshooting

**Dev server not starting?**
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`
- Port 3000 in use? Use: `npm run dev -- -p 3001`

**Styles not loading?**
- Ensure CSS Modules import: `import styles from '@/styles/slider.module.css'`
- Import globals.css in layout: `import './globals.css'`

**Images/assets not showing?**
- Place files in `/public` directory
- Reference as `/filename` (not `./public/filename`)

## Contributing

- Follow component structure in `/app/components`
- Use TypeScript for type safety
- Add CSS Module files for component styles
- Test responsive design at breakpoints: 320px, 768px, 1024px

## License

Private project - The Collided Brand

## Support

For issues or questions:
1. Check this README
2. Review Next.js docs: https://nextjs.org/docs
3. Check component implementations in `/app/components`

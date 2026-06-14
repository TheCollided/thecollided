# Getting Started - The Collided Landing Page

Welcome! Your multi-page landing website is ready to customize and deploy.

## 🎯 What's Built

✅ **3-Page Sliding Landing Site**
- Page 1: Brand logo showcase
- Page 2: Myntra partnership display with CTA
- Page 3: Contact locations (2 offices)

✅ **Navigation System**
- Right arrow button (fixed, bottom-right)
- Clickable page indicator dots (center-bottom)
- Keyboard support (Arrow Right key)
- Touch/swipe on mobile
- Page wrapping (Page 3 → Page 1)

✅ **Visual Features**
- Smooth 0.6s slide transitions
- Responsive mobile-first design (320px - 1440px+)
- Beautiful gradient colors & animations
- Social media links footer
- Contact cards with clickable links

✅ **Analytics Ready**
- Google Analytics integration
- Page view tracking
- Button click tracking
- Social link click tracking

---

## 📁 File Structure

```
app/
├── components/              # React components
│   ├── PageSlider.tsx      # Main slider (handles navigation)
│   ├── BrandPage.tsx       # Page 1 - Logo
│   ├── MyntraPage.tsx      # Page 2 - Partnership + CTA
│   ├── ContactPage.tsx     # Page 3 - Contact info
│   ├── NavigationArrow.tsx # Right arrow button
│   └── SocialLinks.tsx     # Social media icons
│
├── hooks/
│   └── useSlider.ts        # State management for pages
│
├── lib/
│   └── analytics.ts        # Analytics tracking functions
│
├── config/
│   ├── socialLinks.json    # Social media URLs
│   └── locations.json      # Contact locations (2 offices)
│
├── styles/
│   ├── slider.module.css   # Slider animations & layout
│   └── pages.module.css    # Page styling
│
├── page.tsx                # Main entry point
├── layout.tsx              # Root layout + metadata
└── globals.css             # Global styles
```

---

## 🎨 Customization Guide

### 1. Update Brand Logo (Page 1)

Edit: `app/components/BrandPage.tsx`

```tsx
// Replace the gradient placeholder with your logo:
<Image 
  src="/your-logo.png"
  alt="Brand Logo"
  width={200}
  height={200}
/>
```

Or keep the gradient and change colors:
```tsx
background: 'linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%)',
```

### 2. Update Myntra Partnership (Page 2)

Edit: `app/components/MyntraPage.tsx`

```tsx
// Update title
<span style={{ color: '#YOUR_COLOR' }}>Myntra</span>

// Update description
<p className={styles.myntraDescription}>
  Your custom partnership message here
</p>

// Update CTA link
<a href="YOUR_MYNTRA_STORE_URL" ...>
  Your Button Text
</a>
```

### 3. Update Contact Locations (Page 3)

Edit: `app/config/locations.json`

```json
{
  "locations": [
    {
      "id": 1,
      "name": "Office Name",
      "address": "Your Street Address",
      "phone": "+1 (555) 123-4567",
      "email": "your-email@brand.com",
      "mapUrl": "https://maps.google.com/?q=YOUR_ADDRESS"
    }
    // ... second location
  ]
}
```

### 4. Update Social Links

Edit: `app/config/socialLinks.json`

```json
{
  "links": [
    {
      "name": "Instagram",
      "url": "https://instagram.com/your-handle",
      "icon": "instagram"
    }
    // ... other platforms (twitter, linkedin, facebook)
  ]
}
```

### 5. Update Colors & Gradients

Edit: `app/styles/pages.module.css` and `app/styles/slider.module.css`

```css
/* Example: Change primary gradient */
.navigationArrow button {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### 6. Update Metadata & Title

Edit: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Brand - Landing Page",
  description: "Your custom description",
};
```

---

## 🚀 Next Steps

### Before Going Live

1. **Add Your Assets**
   - Brand logo → replace placeholder in `BrandPage.tsx`
   - Brand colors → update gradients in CSS files
   - Contact info → update `locations.json`
   - Social URLs → update `socialLinks.json`

2. **Set Up Analytics**
   - Create Google Analytics account: https://analytics.google.com
   - Get your Tracking ID (format: `G-XXXXXXXXXX`)
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```
   - Test locally: `npm run dev`

3. **Test Everything**
   - Run dev server: `npm run dev`
   - Visit: http://localhost:3000
   - Test all 3 pages
   - Test navigation (arrows, dots, keyboard, swipe)
   - Test mobile responsiveness
   - Test links (Myntra CTA, contact links, socials)

4. **Deploy to Vercel**
   - Push to GitHub
   - Import to Vercel
   - Add environment variables
   - Done! Your site is live

See **DEPLOYMENT.md** for detailed steps.

---

## 📱 Testing Checklist

- [ ] All 3 pages display correctly
- [ ] Slide transitions are smooth
- [ ] Navigation arrows work
- [ ] Page dots work
- [ ] Page wrapping works (Page 3 → Page 1)
- [ ] Mobile responsive (test at 320px, 480px, 768px)
- [ ] Touch/swipe works on mobile
- [ ] Social links open in new tabs
- [ ] Myntra CTA button works
- [ ] Contact phone/email links work
- [ ] Contact "View on Map" links work
- [ ] Keyboard navigation works (Arrow Right key)
- [ ] No console errors

---

## 🎯 Common Tasks

### Change Slide Transition Speed
Edit: `app/styles/slider.module.css`
```css
.slidesWrapper {
  transition: transform 0.4s ease-in-out; /* Change 0.6s to your duration */
}
```

### Hide Social Links on Mobile
Edit: `app/styles/slider.module.css`
```css
@media (max-width: 480px) {
  .socialFooter {
    display: none; /* or flex to show */
  }
}
```

### Change Brand Colors Throughout
Search & replace in CSS files:
- `#667eea` → your primary color
- `#764ba2` → your secondary color
- `#d6336c` → your accent color

### Add More Social Platforms
Edit: `app/config/socialLinks.json`
```json
{
  "name": "YouTube",
  "url": "https://youtube.com/your-channel",
  "icon": "youtube"
}
```

Then add icon mapping in `app/components/SocialLinks.tsx`:
```tsx
const iconMap: Record<string, string> = {
  youtube: '📺',
  // ... others
};
```

---

## 📚 Documentation

- **SETUP.md** — Detailed setup and customization guide
- **DEPLOYMENT.md** — Deploy to Vercel step-by-step
- **Next.js Docs** — https://nextjs.org/docs

---

## ⚡ Performance

Lighthouse targets (out of the box):
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 95+

Test with: https://pagespeed.web.dev

---

## 🐛 Troubleshooting

**Dev server not starting?**
```bash
npm install
npm run dev
```

**Styles not showing?**
- Clear cache: `rm -rf .next`
- Restart dev server: `npm run dev`

**Pages not transitioning?**
- Check browser console for errors (F12)
- Verify all component files exist in `app/components/`

**Mobile not responding to swipe?**
- Check browser console for JS errors
- Test on actual mobile device (not just DevTools)

---

## 📞 Support

Need help? 
1. Check the documentation (SETUP.md, DEPLOYMENT.md)
2. Review Next.js docs: https://nextjs.org/docs
3. Check browser console for error messages (F12)

---

## 🎉 You're All Set!

Your landing page is ready to customize and deploy. Start by:

1. Update brand assets (logo, colors, links)
2. Test locally: `npm run dev`
3. Deploy to Vercel (see DEPLOYMENT.md)
4. Monitor analytics in Google Analytics dashboard

Good luck! 🚀

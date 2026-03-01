# Matrix Fusion 4.0 - React Version

Complete React conversion with Loader integration.

## Features

✅ Loader animation (0-100 counter with staggered bars)
✅ Lenis smooth scroll
✅ Custom cursor with animations
✅ Nav hover animation (minhpham style)
✅ Video parallax background
✅ CO-OD hover reveal (clip-path animation)
✅ Live countdown timer
✅ All sections fully responsive to 320px
✅ Mobile-optimized loader

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## File Structure

```
src/
├── components/
│   ├── Loader.jsx           # Loader with counter animation
│   ├── Loader.css           # Mobile-responsive loader styles
│   ├── Header.jsx           # Header with nav hover animation
│   ├── SocialIcons.jsx      # Fixed social icons
│   ├── Hero.jsx             # Hero section
│   ├── Hero.css             # Hero-specific styles
│   ├── About.jsx            # About section
│   ├── Domain.jsx           # Domain section
│   ├── CoOd.jsx             # CO-OD with clip-path hover
│   ├── Pics.jsx             # Image grid section
│   ├── Collaboration.jsx    # Sponsors section
│   └── Footer.jsx           # Footer with countdown timer
├── App.jsx                  # Main app with loader state
├── App.css                  # Global styles
└── main.jsx                 # React entry point
```

## Loader Details

- Counter animates from 0-100 with random increments
- 10 vertical bars animate out with stagger
- Fully mobile responsive with clamp() font sizing
- Duration: ~4 seconds
- Auto-hides when complete

## Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- gsap: ^3.12.5
- @studio-freight/lenis: ^1.0.42

## Assets Needed

Place these files in the `public/` directory:
- MF 4.0 Logo.png
- desktop.mp4
- mobile.mp4
- Iste-removebg-preview.png
- Iic-removebg-preview.png
- Artics-removebg-preview.png

## Mobile Responsiveness

The loader is fully responsive:
- Desktop: 20vw font size
- Tablet: 25vw font size  
- Mobile: 30vw font size (clamp prevents overflow)
- All breakpoints: 320px, 480px, 768px tested

## Notes

- Touch devices: Cursor and video parallax disabled automatically
- Lenis: Simple integration, no GSAP conflicts
- Countdown: Updates every minute, target date March 31, 2026

import React, { useRef, useCallback } from 'react';
import gsap from 'gsap';

const navLinks = [
  { href: '#about',           label: 'ABOUT' },
  { href: '#flow-section',    label: 'ROADMAP' },
  { href: '#domain',          label: 'DOMAIN' },
  { href: '#domain',          label: 'REGISTRATION' },
  { href: '#idea-submission',  label: 'SUBMIT IDEA' },
  { href: '#cood',            label: 'ORGANIZERS' },
  { href: '#pics',            label: 'GALLERY' },
  { href: '#sponsors',        label: 'SPONSORS' },
  { href: '#collaboration',   label: 'COLLABORATORS' },
  { href: '#map',             label: 'LOCATION' },
  { href: '#faq',             label: <>FAQ<span style={{textTransform:'none'}}>s</span></> },
];

const Header = () => {
  const drawerRef  = useRef(null);
  const overlayRef = useRef(null);
  const itemsRef   = useRef([]);
  const btnRef     = useRef(null);
  const isOpen     = useRef(false); // track state without re-render side-effects

  /* ── OPEN the drawer ── */
  const openMenu = useCallback(() => {
    if (isOpen.current) return;
    isOpen.current = true;

    const drawer  = drawerRef.current;
    const overlay = overlayRef.current;
    const btn     = btnRef.current;
    if (!drawer || !overlay) return;

    // Update button icon
    const icon = btn?.querySelector('i');
    if (icon) { icon.className = 'ri-close-line'; }
    btn?.classList.add('is-open');

    // Show overlay
    gsap.set(overlay, { display: 'block', opacity: 0 });
    gsap.to(overlay, { opacity: 1, duration: 0.3, ease: 'power2.out' });

    // Show drawer — slide in from right smoothly
    gsap.set(drawer, { display: 'flex', x: '100%' });
    gsap.to(drawer, {
      x: '0%',
      duration: 0.55,
      ease: 'power3.out', // much smoother than harsh back.out
    });

    // Animate each nav item in with staggered fade/slide
    const items = itemsRef.current.filter(Boolean);
    gsap.fromTo(
      items,
      { x: 30, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: 'power2.out', // smoother fade-in
        stagger: 0.04,
        delay: 0.15,
      }
    );
  }, []);

  /* ── CLOSE the drawer ── */
  const closeMenu = useCallback(() => {
    if (!isOpen.current) return;
    isOpen.current = false;

    const drawer  = drawerRef.current;
    const overlay = overlayRef.current;
    const btn     = btnRef.current;
    if (!drawer || !overlay) return;

    // Update button icon
    const icon = btn?.querySelector('i');
    if (icon) { icon.className = 'ri-menu-fill'; }
    btn?.classList.remove('is-open');

    // Slide items out
    const items = itemsRef.current.filter(Boolean);
    gsap.to(items, {
      x: 40,
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: 'power2.in',
      stagger: 0.02,
    });

    // Slide drawer out
    gsap.to(drawer, {
      x: '100%',
      duration: 0.35,
      ease: 'power3.in',
      delay: 0.08,
      onComplete: () => {
        gsap.set(drawer, { display: 'none' });
        // Wipe inline styles so next open is fresh
        gsap.set(items, { clearProps: 'all' });
      },
    });

    // Fade overlay
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      delay: 0.08,
      onComplete: () => gsap.set(overlay, { display: 'none' }),
    });
  }, []);

  /* ── Toggle ── */
  const toggleMenu = useCallback(() => {
    if (isOpen.current) closeMenu();
    else openMenu();
  }, [openMenu, closeMenu]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Left logo */}
          <div className="header-logo js-cursor-extend-sm">
            <img src="MF 4.0 Logo.png" alt="Matrix Fusion 4.0 Logo" />
          </div>

          {/* Center logo */}
          <div className="header-center-logo">
            <img src="Artics-removebg-preview.png" alt="Yen-Artics Logo" />
          </div>

          {/* Desktop nav */}
          <nav className="header-nav header-nav--desktop">
            {navLinks.map(({ href, label }) => (
              <a key={label} href={href} className="js-cursor-contract">
                <span className="nav-item-inner">
                  <span className="nav-item-link nav-item-link__default">{label}</span>
                  <span className="nav-item-link nav-item-link__active">{label}</span>
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            ref={btnRef}
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="ri-menu-fill" />
          </button>
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      <div
        ref={overlayRef}
        className="mobile-menu-overlay"
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <nav ref={drawerRef} className="mobile-nav-drawer">
        <ul className="mobile-nav-list">
          {navLinks.map(({ href, label }, i) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeMenu}
                className="mobile-nav-link"
                ref={(el) => (itemsRef.current[i] = el)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;

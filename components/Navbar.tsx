'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Productions', href: '#productions' },
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Behind Lens', href: '#behind' },
  { label: 'Awards', href: '#awards' },
  { label: 'Reel Life', href: '#reel' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(10,10,10,0.97)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.9), transparent)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(204,0,0,0.3)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38,
              height: 38,
              background: 'var(--red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M4 4h16v2l-2 1 2 1v2l-2 1 2 1v2l-2 1 2 1v2H4v-2l2-1-2-1v-2l2-1-2-1V7l2-1-2-1V4z"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', letterSpacing: '0.08em' }}>
              CINE<span style={{ color: 'var(--red)' }}>FORGE</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className="animated-underline"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: active === link.label ? 'var(--white)' : 'var(--gray)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-red" style={{ padding: '10px 20px', fontSize: '0.78rem' }}>
              Get In Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 70,
              left: 0,
              right: 0,
              background: 'rgba(10,10,10,0.98)',
              zIndex: 999,
              padding: '20px 24px 30px',
              borderBottom: '2px solid var(--red)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActive(link.label); setMobileOpen(false); }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-light)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 16,
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}

'use client';
import { motion } from 'framer-motion';
import { FiInstagram, FiYoutube, FiFacebook, FiTwitter } from 'react-icons/fi';

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press Kit', 'Awards'],
  Productions: ['Feature Films', 'Web Series', 'Documentaries', 'Short Films', 'Advertising'],
  Services: ['Film Making', 'Production', 'Post Production', 'VFX & Animation', 'Distribution'],
  Connect: ['Contact Us', 'Pitch a Story', 'Collaborate', 'Internships', 'FAQs'],
};

const socials = [
  { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <FiYoutube size={18} />, href: '#', label: 'YouTube' },
  { icon: <FiFacebook size={18} />, href: '#', label: 'Facebook' },
  { icon: <FiTwitter size={18} />, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative top border */}
      <div style={{ height: 3, background: 'linear-gradient(to right, transparent, var(--red) 30%, var(--red) 70%, transparent)' }} />

      {/* Film strip decoration */}
      <div style={{
        position: 'absolute', top: 3, left: 0, right: 0, height: 18,
        background: 'var(--black-2)',
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(255,255,255,0.04) 16px, rgba(255,255,255,0.04) 20px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 52 }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, background: 'var(--red)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M4 4h16v2l-2 1 2 1v2l-2 1 2 1v2l-2 1 2 1v2H4v-2l2-1-2-1v-2l2-1-2-1V7l2-1-2-1V4z"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.08em' }}>
                CINE<span style={{ color: 'var(--red)' }}>FORGE</span>
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
              A premier film production studio crafting cinematic stories that inspire and transform audiences worldwide.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -3, color: '#cc0000' }}
                  style={{
                    width: 36, height: 36,
                    background: 'var(--black-3)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gray)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{section}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="animated-underline"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      color: 'var(--gray)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--gray)' }}>
              © {new Date().getFullYear()} CineForge Studios. All rights reserved.
            </span>
          </div>

          {/* Clapperboard icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="10" width="24" height="18" rx="2" fill="var(--black-3)" stroke="rgba(204,0,0,0.4)" strokeWidth="1.5"/>
              <rect x="4" y="5" width="24" height="7" rx="1" fill="var(--black-4)" stroke="rgba(204,0,0,0.4)" strokeWidth="1.5"/>
              <line x1="8" y1="5" x2="8" y2="12" stroke="var(--red)" strokeWidth="1.5"/>
              <line x1="14" y1="5" x2="12" y2="12" stroke="var(--gray)" strokeWidth="1.5"/>
              <line x1="20" y1="5" x2="17" y2="12" stroke="var(--red)" strokeWidth="1.5"/>
              <line x1="26" y1="5" x2="22" y2="12" stroke="var(--gray)" strokeWidth="1.5"/>
            </svg>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((link) => (
                <a key={link} href="#" style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                  color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}
                >{link}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="2fr 1fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="2fr 1fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

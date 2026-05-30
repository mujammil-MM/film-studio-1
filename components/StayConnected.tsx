'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiInstagram, FiYoutube, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const socials = [
  { icon: <FiInstagram size={22} />, label: 'Instagram', handle: '@cineforge', color: '#E1306C', href: '#' },
  { icon: <FiYoutube size={22} />, label: 'YouTube', handle: 'CineForge Studios', color: '#FF0000', href: '#' },
  { icon: <FiFacebook size={22} />, label: 'Facebook', handle: '/cineforgestudios', color: '#1877F2', href: '#' },
  { icon: <FiTwitter size={22} />, label: 'Twitter', handle: '@cineforge', color: '#1DA1F2', href: '#' },
];

export default function StayConnected() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); setEmail(''); }
  };

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--black-2)',
      padding: '90px 0 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Red glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 2,
        background: 'linear-gradient(to right, transparent, var(--red), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(204,0,0,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(204,0,0,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="red-line" style={{ margin: '0 auto 16px' }} />
          <h2 className="section-title">
            STAY <span style={{ color: 'var(--red)' }}>CONNECTED</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: '0.95rem', marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>
            Be the first to know about our latest productions, events, and behind-the-scenes content
          </p>
        </motion.div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start', paddingBottom: 80 }}>
          {/* Left — Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--white)', marginBottom: 30,
            }}>Follow Our Journey</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: 'var(--black-3)', padding: '16px 20px',
                    textDecoration: 'none', transition: 'background 0.2s',
                    borderLeft: `3px solid ${s.color}`,
                  }}
                >
                  <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--white)' }}>{s.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--gray)', marginTop: 2 }}>{s.handle}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--gray)', fontSize: '0.75rem' }}>→</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Newsletter + Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--white)', marginBottom: 30,
            }}>Newsletter & Contact</h3>

            {/* Newsletter form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1, padding: '14px 18px',
                    background: 'var(--black-3)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRight: 'none', color: 'var(--white)',
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" className="btn-red" style={{
                  padding: '14px 20px', clipPath: 'none', borderRadius: 0,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <FiSend size={16} />
                  {submitted ? 'Sent!' : 'Subscribe'}
                </button>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--gray)' }}>
                No spam, just cinematic content. Unsubscribe anytime.
              </p>
            </form>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: <FiMail size={16} />, text: 'hello@cineforgestudios.com' },
                { icon: <FiPhone size={16} />, text: '+91 98765 43210' },
                { icon: <FiMapPin size={16} />, text: 'Mumbai, Maharashtra, India' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ color: 'var(--red)', flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--gray-light)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Red bottom banner */}
      <div style={{
        background: 'var(--red)',
        padding: '20px 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.06) 20px, rgba(0,0,0,0.06) 40px)',
        }} />
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12, position: 'relative', zIndex: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.1rem',
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)',
          }}>
            🎬 READY TO CREATE SOMETHING EXTRAORDINARY?
          </span>
          <a href="mailto:hello@cineforgestudios.com" style={{
            background: 'rgba(0,0,0,0.25)', color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '10px 24px', textDecoration: 'none',
            fontFamily: 'var(--font-heading)', fontSize: '0.85rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'background 0.3s',
          }}>Let&apos;s Talk</a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
